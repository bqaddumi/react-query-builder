// Operators that take no value (null-check operators)
const NULL_OPERATORS = ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"];

// Multi-word operators that must be treated as a single token
const MULTI_WORD_OPERATORS = [
  "IS NOT NULL",
  "IS NULL",
  "NOT IN",
  "starts with",
  "ends with",
];

function parseQuery(text, operators, columns) {
  const sortedOperators = [...operators].sort((a, b) => b.length - a.length);
  const group = parseGroupFromText(text, sortedOperators, columns);
  return group;
}

function parseGroupFromText(text, sortedOperators, columns) {
  text = (text || "").trim();
  if (!text) return { type: "group", combinator: "AND", not: false, rules: [] };

  const tokens = tokenizeForParsing(text);
  return buildTree(tokens, sortedOperators, columns);
}

function tokenizeForParsing(text) {
  const tokens = [];
  let i = 0;
  while (i < text.length) {
    if (text[i] === " " || text[i] === "\t") {
      i++;
      continue;
    }
    if (text[i] === "(") {
      tokens.push({ type: "paren", value: "(" });
      i++;
    } else if (text[i] === ")") {
      tokens.push({ type: "paren", value: ")" });
      i++;
    } else if (text[i] === '"') {
      let j = i + 1;
      while (j < text.length && text[j] !== '"') j++;
      tokens.push({ type: "word", value: text.slice(i, j + 1) });
      i = j + 1;
    } else if (text[i] === "[") {
      // Consume the entire [...] list as a single value token
      let j = i + 1;
      let depth = 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "[") depth++;
        else if (text[j] === "]") depth--;
        if (depth > 0) j++;
      }
      tokens.push({ type: "word", value: text.slice(i, j + 1) });
      i = j + 1;
    } else {
      let j = i;
      while (
        j < text.length &&
        text[j] !== " " &&
        text[j] !== "\t" &&
        text[j] !== "(" &&
        text[j] !== ")" &&
        text[j] !== "["
      )
        j++;
      tokens.push({ type: "word", value: text.slice(i, j) });
      i = j;
    }
  }
  return tokens;
}

function buildTree(tokens, sortedOperators, columns) {
  let pos = 0;

  function peekMultiWordOp() {
    // Try to match multi-word operators at current position
    for (const mwOp of MULTI_WORD_OPERATORS) {
      const words = mwOp.split(" ");
      let match = true;
      for (let k = 0; k < words.length; k++) {
        const idx = pos + k;
        if (
          idx >= tokens.length ||
          tokens[idx].type !== "word" ||
          tokens[idx].value.toUpperCase() !== words[k].toUpperCase()
        ) {
          match = false;
          break;
        }
      }
      if (match) return { op: mwOp, wordCount: words.length };
    }
    return null;
  }

  function parseExpression() {
    const clauses = [];
    const combinators = [];

    clauses.push(parsePrimary());

    while (pos < tokens.length) {
      const tok = tokens[pos];
      if (
        tok &&
        tok.type === "word" &&
        (tok.value.toUpperCase() === "AND" || tok.value.toUpperCase() === "OR")
      ) {
        combinators.push(tok.value.toUpperCase());
        pos++;
        clauses.push(parsePrimary());
      } else {
        break;
      }
    }

    if (clauses.length === 1) return clauses[0];

    const combinator = combinators[0] || "AND";
    const allSame = combinators.every((c) => c === combinator);

    if (allSame) {
      return { type: "group", combinator, not: false, rules: clauses };
    }

    // Mixed AND/OR: AND binds tighter than OR
    return buildPrecedence(clauses, combinators);
  }

  function buildPrecedence(clauses, combinators) {
    // Group AND-connected clauses first, then join with OR
    const orGroups = [];
    let currentAndGroup = [clauses[0]];

    for (let i = 0; i < combinators.length; i++) {
      if (combinators[i] === "AND") {
        currentAndGroup.push(clauses[i + 1]);
      } else {
        // OR boundary
        if (currentAndGroup.length === 1) {
          orGroups.push(currentAndGroup[0]);
        } else {
          orGroups.push({
            type: "group",
            combinator: "AND",
            not: false,
            rules: currentAndGroup,
          });
        }
        currentAndGroup = [clauses[i + 1]];
      }
    }
    // flush last AND group
    if (currentAndGroup.length === 1) {
      orGroups.push(currentAndGroup[0]);
    } else {
      orGroups.push({
        type: "group",
        combinator: "AND",
        not: false,
        rules: currentAndGroup,
      });
    }

    return { type: "group", combinator: "OR", not: false, rules: orGroups };
  }

  function parsePrimary() {
    if (pos >= tokens.length) {
      return { type: "rule", column: "", operator: "", value: "" };
    }

    const tok = tokens[pos];

    // NOT prefix — but NOT followed by IN is an operator, not a negation
    if (tok.type === "word" && tok.value.toUpperCase() === "NOT") {
      // Check if this is "NOT IN" (part of a multi-word op) or "NOT (" (negation)
      const nextTok = tokens[pos + 1];
      if (
        nextTok &&
        nextTok.type === "word" &&
        nextTok.value.toUpperCase() === "IN"
      ) {
        // This is NOT IN — don't treat as negation, fall through to rule parsing
      } else {
        pos++;
        const inner = parsePrimary();
        if (inner.type === "group") {
          return { ...inner, not: true };
        }
        return { type: "group", combinator: "AND", not: true, rules: [inner] };
      }
    }

    // Parenthesized sub-expression
    if (tok.type === "paren" && tok.value === "(") {
      pos++;
      const inner = parseExpression();
      // consume closing paren
      if (
        pos < tokens.length &&
        tokens[pos].type === "paren" &&
        tokens[pos].value === ")"
      ) {
        pos++;
      }
      if (inner.type === "group") return inner;
      return { type: "group", combinator: "AND", not: false, rules: [inner] };
    }

    // Regular rule: column operator value
    const column = tok.value;
    pos++;

    if (pos >= tokens.length) {
      return { type: "rule", column, operator: "", value: "" };
    }

    // Try to match a multi-word operator (IS NULL, IS NOT NULL, NOT IN)
    const mwMatch = peekMultiWordOp();
    let operator;
    if (mwMatch) {
      operator = mwMatch.op;
      pos += mwMatch.wordCount;
    } else {
      const opTok = tokens[pos];
      operator = opTok ? opTok.value : "";
      pos++;
    }

    // Null-check operators don't take a value
    if (isNullOperator(operator)) {
      return { type: "rule", column, operator, value: "" };
    }

    if (pos >= tokens.length) {
      return { type: "rule", column, operator, value: "" };
    }

    // Value: could be a quoted string, list, or a word (but not AND/OR/paren)
    let value = "";
    const valTok = tokens[pos];
    if (
      valTok &&
      valTok.type === "word" &&
      valTok.value.toUpperCase() !== "AND" &&
      valTok.value.toUpperCase() !== "OR"
    ) {
      value = valTok.value;
      pos++;
    } else if (valTok && valTok.type === "paren") {
      // Might be a list value for IN operator: (1,2,3)
      if (
        (operator.toUpperCase() === "IN" ||
          operator.toUpperCase() === "NOT IN" ||
          operator === "in" ||
          operator === "not_in") &&
        valTok.value === "("
      ) {
        // Consume paren-delimited list as value
        let listStr = "(";
        pos++; // skip opening paren
        while (pos < tokens.length) {
          if (tokens[pos].type === "paren" && tokens[pos].value === ")") {
            listStr += ")";
            pos++;
            break;
          }
          listStr += tokens[pos].value;
          pos++;
        }
        value = listStr;
      }
      // otherwise no value before a paren, leave it
    }

    return { type: "rule", column, operator, value };
  }

  const result = parseExpression();
  if (result.type === "rule") {
    return { type: "group", combinator: "AND", not: false, rules: [result] };
  }
  return result;
}

function isNullOperator(op) {
  return (
    NULL_OPERATORS.includes(op) || NULL_OPERATORS.includes(op.toUpperCase())
  );
}

function parseFlatQueries(text, operators, columns) {
  const queries = [];
  const parts = text.split(/\s+AND\s+|\s+OR\s+/i);
  const sortedOperators = [...operators].sort((a, b) => b.length - a.length);

  parts.forEach((part) => {
    const trimmed = part.trim().replace(/^\(+|\)+$/g, "");
    if (!trimmed) return;

    let column = columns.find((col) => trimmed.startsWith(col + " "));
    let operator;
    let value;

    if (column) {
      operator = sortedOperators.find((op) =>
        trimmed.slice(column.length).trim().startsWith(op),
      );
      if (operator) {
        value = trimmed
          .slice(column.length)
          .trim()
          .slice(operator.length)
          .trim();
      }
    } else {
      const firstSpace = trimmed.indexOf(" ");
      if (firstSpace === -1) return;
      column = trimmed.slice(0, firstSpace);
      const rest = trimmed.slice(firstSpace + 1).trim();
      operator = sortedOperators.find((op) => rest.startsWith(op));
      if (operator) {
        value = rest.slice(operator.length).trim();
      }
    }

    if (column && operator && value !== undefined) {
      queries.push({ column, operator, value });
    }
  });

  return queries;
}

function convertQueriesToText(filters, defaultOperator) {
  return filters
    .map((filter) => {
      if (isNullOperator(filter.operator)) {
        return `${filter.column} ${filter.operator}`;
      }
      return `${filter.column} ${filter.operator} ${filter.value}`;
    })
    .join(` ${defaultOperator} `);
}

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function validateQuery(query, _queryRegex) {
  query = (query || "").trim();

  if (!query) {
    return { isValid: true, error: null };
  }

  // Check balanced parentheses
  let depth = 0;
  for (const ch of query) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (depth < 0) {
      return {
        isValid: false,
        error: "Unmatched closing parenthesis `)`. Check your grouping.",
      };
    }
  }
  if (depth > 0) {
    return {
      isValid: false,
      error:
        "Unclosed opening parenthesis `(`. Add the matching `)` to close the group.",
    };
  }

  // Check balanced brackets
  let bracketDepth = 0;
  for (const ch of query) {
    if (ch === "[") bracketDepth++;
    if (ch === "]") bracketDepth--;
    if (bracketDepth < 0) {
      return {
        isValid: false,
        error: "Unmatched closing bracket `]`.",
      };
    }
  }
  if (bracketDepth > 0) {
    return {
      isValid: false,
      error: "Unclosed bracket `[`. Add the matching `]`.",
    };
  }

  // Check unclosed quotes
  const unclosedQuote = (query.match(/"/g) || []).length % 2 !== 0;
  if (unclosedQuote) {
    return {
      isValid: false,
      error: 'Unclosed quoted value. Make sure every `"` has a matching `"`.',
    };
  }

  // Check trailing logical operator
  const trailingLogical = /\b(AND|OR)\s*$/i.test(query);
  if (trailingLogical) {
    return {
      isValid: false,
      error: "Query ends with AND/OR. Add another condition after it.",
    };
  }

  // Check leading logical operator (after stripping parens/spaces)
  const stripped = query.replace(/^\s*\(\s*/, "");
  if (/^\s*(AND|OR)\b/i.test(stripped)) {
    return {
      isValid: false,
      error: "Query starts with AND/OR. Add a condition before it.",
    };
  }

  // Check empty parens (but not list parens like "in (1,2)")
  if (
    /\(\s*\)/.test(
      query.replace(/\b(?:in|IN|NOT\s+IN|not_in)\s*\([^)]*\)/g, ""),
    )
  ) {
    return {
      isValid: false,
      error: "Empty parentheses `()` found. Add conditions inside the group.",
    };
  }

  // Basic structure check: after removing parens, each clause should have at least column + operator
  const withoutParens = query.replace(/[()[\]]/g, " ");
  const parts = withoutParens.split(/\s+(?:AND|OR)\s+/i);
  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;
    const words = trimmed.split(/\s+/);
    // Allow 2-word clauses for null operators (e.g., "field is_null" or "field IS NULL" which is 3 words)
    if (words.length < 2) {
      return {
        isValid: false,
        error:
          'Incomplete condition. Expected: <column> <operator> <value> (e.g. name == "John").',
      };
    }
  }

  return { isValid: true, error: null };
}

/**
 * Tokenize a query string into typed pieces for syntax highlighting.
 * Supports parentheses, brackets, and multi-word operators.
 */
function tokenizeQuery(text, columns, operators, defaultOperators) {
  if (!text) return [];

  const partRegex = /"[^"]*"?|\[[^\]]*\]?|[()]|\s+|[^\s()]+/g;
  const parts = text.match(partRegex) || [];

  const cols = columns || [];
  const ops = operators || [];
  const upperDefaults = (defaultOperators || []).map((d) => d.toUpperCase());

  // Build set of multi-word operators from the ops list
  const multiWordOps = ops.filter((op) => op.includes(" "));

  const tokens = [];
  let slot = "column"; // column → operator → value → logical → column …
  let i = 0;

  while (i < parts.length) {
    const part = parts[i];

    if (/^\s+$/.test(part)) {
      tokens.push({ type: "whitespace", text: part });
      i++;
      continue;
    }

    if (part === "(" || part === ")") {
      tokens.push({ type: "paren", text: part });
      if (part === "(") {
        if (slot === "value") {
          slot = "listValue";
        } else {
          slot = "column";
        }
      } else if (part === ")") {
        if (slot === "listValue") {
          slot = "logical";
        }
      }
      i++;
      continue;
    }

    // NOT keyword (check if it's NOT as negation or part of "NOT IN")
    if (part.toUpperCase() === "NOT" && slot === "column") {
      // Look ahead to see if next non-whitespace is "IN" (then it's NOT a negation in this context)
      // But at column position, NOT is always a negation prefix
      tokens.push({ type: "logical", text: part });
      i++;
      continue;
    }

    // In operator slot, try to match multi-word operators
    if (slot === "operator") {
      let matchedMultiOp = null;
      for (const mwOp of multiWordOps) {
        const mwWords = mwOp.split(" ");
        let j = i;
        let match = true;
        const collected = [];
        for (const word of mwWords) {
          // skip whitespace
          while (j < parts.length && /^\s+$/.test(parts[j])) {
            collected.push(parts[j]);
            j++;
          }
          if (
            j >= parts.length ||
            parts[j].toUpperCase() !== word.toUpperCase()
          ) {
            match = false;
            break;
          }
          collected.push(parts[j]);
          j++;
        }
        if (match) {
          matchedMultiOp = { text: collected.join(""), endIdx: j, op: mwOp };
          break;
        }
      }

      if (matchedMultiOp) {
        // Emit each part with correct type
        for (let k = i; k < matchedMultiOp.endIdx; k++) {
          if (/^\s+$/.test(parts[k])) {
            tokens.push({ type: "whitespace", text: parts[k] });
          } else {
            tokens.push({ type: "operator", text: parts[k] });
          }
        }
        i = matchedMultiOp.endIdx;
        // Null operators skip value slot
        if (isNullOperator(matchedMultiOp.op)) {
          slot = "logical";
        } else {
          slot = "value";
        }
        continue;
      }
    }

    let type;
    if (slot === "column") {
      if (upperDefaults.includes(part.toUpperCase())) {
        type = "logical";
        slot = "column";
      } else {
        type = cols.includes(part) ? "column" : "customColumn";
        slot = "operator";
      }
    } else if (slot === "operator") {
      type = ops.includes(part) ? "operator" : "unknownOperator";
      // Null operators (single-word form) skip value slot
      if (isNullOperator(part)) {
        slot = "logical";
      } else {
        slot = "value";
      }
    } else if (slot === "value") {
      type = "value";
      slot = "logical";
    } else if (slot === "listValue") {
      type = "value";
    } else {
      // slot === "logical"
      if (upperDefaults.includes(part.toUpperCase())) {
        type = "logical";
        slot = "column";
      } else {
        type = "value";
      }
    }
    tokens.push({ type, text: part });
    i++;
  }

  return tokens;
}

function flattenGroupToQueries(group) {
  if (!group || group.type !== "group") return [];
  const result = [];
  for (const item of group.rules || []) {
    if (item.type === "rule") {
      result.push({
        column: item.column,
        operator: item.operator,
        value: item.value,
      });
    } else if (item.type === "group") {
      result.push(...flattenGroupToQueries(item));
    }
  }
  return result;
}

function convertGroupToText(group) {
  if (!group || group.type !== "group") return "";
  const parts = [];
  for (const item of group.rules || []) {
    if (item.type === "rule" && item.column && item.operator) {
      if (isNullOperator(item.operator)) {
        parts.push(`${item.column} ${item.operator}`);
      } else {
        parts.push(`${item.column} ${item.operator} ${item.value}`);
      }
    } else if (item.type === "group") {
      const sub = convertGroupToText(item);
      if (sub) parts.push(`(${sub})`);
    }
  }
  const joined = parts.join(` ${group.combinator} `);
  return group.not ? `NOT (${joined})` : joined;
}

export {
  parseQuery,
  parseFlatQueries,
  convertQueriesToText,
  validateQuery,
  escapeRegex,
  tokenizeQuery,
  flattenGroupToQueries,
  convertGroupToText,
  isNullOperator,
  NULL_OPERATORS,
  MULTI_WORD_OPERATORS,
};
