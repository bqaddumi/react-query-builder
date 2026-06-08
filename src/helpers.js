function parseQuery(text, operators, columns) {
  const queries = [];
  const parts = text.split(/\s+AND\s+|\s+OR\s+/i);
  // Try longer operators first so multi-char ops (e.g. ">=", "==", "contains")
  // are matched before their shorter prefixes (e.g. ">", "=").
  const sortedOperators = [...operators].sort((a, b) => b.length - a.length);

  parts.forEach((part) => {
    const trimmed = part.trim();
    if (!trimmed) return;

    // 1) Prefer a known column when the part starts with one (preserves prior behavior).
    let column = columns.find((col) => trimmed.startsWith(col + " "));
    let operator;
    let value;

    if (column) {
      operator = sortedOperators.find((op) =>
        trimmed.slice(column.length).trim().startsWith(op)
      );
      if (operator) {
        value = trimmed.slice(column.length).trim().slice(operator.length).trim();
      }
    } else {
      // 2) Fallback: treat the first whitespace-separated token as a custom column.
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
    .map((filter) => `${filter.column} ${filter.operator} ${filter.value}`)
    .join(` ${defaultOperator} `);
}

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Validate a query string and return a structured result so callers can show
 * a meaningful error message (e.g. in a Tooltip) instead of a plain boolean.
 *
 * @returns {{ isValid: boolean, error: string|null }}
 *   - `isValid` mirrors the previous boolean return value.
 *   - `error` is a human-readable explanation when `isValid` is false, or
 *     `null` when the query is valid.
 */
function validateQuery(query, _queryRegex) {
  query = (query || "").trim();

  if (!query) {
    return { isValid: true, error: null };
  }

  if (!_queryRegex.test(query)) {
    // Try to pinpoint a likely cause to make the tooltip helpful.
    const tokens = query.split(/\s+/);
    if (tokens.length < 3) {
      return {
        isValid: false,
        error:
          'Incomplete query. Expected: <column> <operator> <value> (e.g. name == "John").',
      };
    }
    const trailingLogical = /\b(AND|OR)\s*$/i.test(query);
    if (trailingLogical) {
      return {
        isValid: false,
        error:
          "Query ends with AND/OR. Add another `<column> <operator> <value>` clause after it.",
      };
    }
    const unclosedQuote = (query.match(/"/g) || []).length % 2 !== 0;
    if (unclosedQuote) {
      return {
        isValid: false,
        error: 'Unclosed quoted value. Make sure every `"` has a matching `"`.',
      };
    }
    return {
      isValid: false,
      error:
        "Invalid query syntax. Expected format: `<column> <operator> <value> [AND|OR <column> <operator> <value>]`.",
    };
  }

  const logicalOperators = query.match(/\b(AND|OR)\b/gi);
  if (logicalOperators && new Set(logicalOperators).size > 1) {
    return {
      isValid: false,
      error:
        "Cannot mix AND and OR in the same query. Use only one logical operator throughout.",
    };
  }

  return { isValid: true, error: null };
}

/**
 * Tokenize a query string into typed pieces so we can colorize each token in
 * the UI. The returned tokens preserve whitespace so concatenating their
 * `text` values reproduces the original input exactly.
 *
 * Token `type` is one of:
 *   - "whitespace"      : runs of spaces / tabs
 *   - "column"          : token at a column position that matches `columns`
 *   - "customColumn"    : token at a column position that is NOT in `columns`
 *   - "operator"        : token at an operator position that matches `operators`
 *   - "unknownOperator" : token at an operator position that does NOT match
 *   - "value"           : token at a value position (or fallback)
 *   - "logical"         : an AND/OR (or any token in `defaultOperators`) at a
 *                         "between-queries" position
 *
 * The function walks a 4-state machine (column → operator → value → logical →
 * column …) so colors are anchored to the *grammatical position* rather than
 * raw word matching. This keeps highlighting stable while the user is typing.
 */
function tokenizeQuery(text, columns, operators, defaultOperators) {
  if (!text) return [];

  // Capture either: a (possibly unterminated) quoted string, a run of
  // whitespace, or a run of non-whitespace.
  const partRegex = /"[^"]*"?|\s+|\S+/g;
  const parts = text.match(partRegex) || [];

  const cols = columns || [];
  const ops = operators || [];
  const upperDefaults = (defaultOperators || []).map((d) => d.toUpperCase());

  const tokens = [];
  let slot = "column"; // column → operator → value → logical → column …

  for (const part of parts) {
    if (/^\s+$/.test(part)) {
      tokens.push({ type: "whitespace", text: part });
      continue;
    }

    let type;
    if (slot === "column") {
      type = cols.includes(part) ? "column" : "customColumn";
      slot = "operator";
    } else if (slot === "operator") {
      type = ops.includes(part) ? "operator" : "unknownOperator";
      slot = "value";
    } else if (slot === "value") {
      type = "value";
      slot = "logical";
    } else {
      // slot === "logical" → expect AND/OR. If something else shows up we
      // treat it as a value continuation so the user isn't punished mid-typing.
      if (upperDefaults.includes(part.toUpperCase())) {
        type = "logical";
        slot = "column";
      } else {
        type = "value";
      }
    }
    tokens.push({ type, text: part });
  }

  return tokens;
}

export {
  parseQuery,
  convertQueriesToText,
  validateQuery,
  escapeRegex,
  tokenizeQuery,
};
