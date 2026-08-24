import {
  Box,
  OutlinedInput,
  Popper,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Chip,
  InputAdornment,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef, useEffect, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import ReactMarkdown from "react-markdown";
import { validateQuery, tokenizeQuery } from "./helpers";

// Default highlight palette per token type. Callers can override any of these
// via sx.tokenColors (see README "Token Highlighting").
const DEFAULT_TOKEN_COLORS = {
  column: "primary.main",
  customColumn: "info.main",
  operator: "error.main",
  unknownOperator: "text.disabled",
  logical: "secondary.main",
  paren: "warning.main",
  value: "text.primary",
};

// Default font weights per token type. Callers can override any of these via
// sx.tokenFontWeights to customize the visual emphasis of each token.
const DEFAULT_TOKEN_FONT_WEIGHTS = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  paren: 700,
  value: 400,
};

const HINT_TEXT =
  'Type a query like: column operator value — e.g. name == "John"';

// ---------------------------------------------------------------------------
// HelpModal – standalone component so the JSX stays readable
// ---------------------------------------------------------------------------
const HelpModal = ({ open, onClose, helpContent, sx = {} }) => {
  // Slot map: each key targets a specific element inside the help dialog so
  // callers can override styles per-slot, e.g.
  // sx={{ dialog: {...}, codeBlock: {...}, gotItButton: {...} }}.
  const {
    dialog: dialogSx,
    title: titleSx,
    closeButton: closeButtonSx,
    content: contentSx,
    sectionTitle: sectionTitleSx,
    body: bodySx,
    codeBlock: codeBlockSx,
    exampleBlock: exampleBlockSx,
    exampleLabel: exampleLabelSx,
    list: listSx,
    listItem: listItemSx,
    chip: chipSx,
    divider: dividerSx,
    actions: actionsSx,
    gotItButton: gotItButtonSx,
    colorLegendItem: colorLegendItemSx,
    colorSwatch: colorSwatchSx,
    warningText: warningTextSx,
  } = sx;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      sx={dialogSx}
    >
      <DialogTitle sx={{ pr: 6, ...titleSx }}>
        How to Use the Query Search
        <IconButton
          onClick={onClose}
          size="small"
          sx={{ position: "absolute", right: 12, top: 12, ...closeButtonSx }}
          aria-label="close"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={contentSx}>
        {helpContent ? (
          typeof helpContent === "string" ? (
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <Typography variant="h5" gutterBottom sx={sectionTitleSx}>
                    {children}
                  </Typography>
                ),
                h2: ({ children }) => (
                  <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
                    {children}
                  </Typography>
                ),
                h3: ({ children }) => (
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ fontWeight: 600, ...sectionTitleSx }}
                  >
                    {children}
                  </Typography>
                ),
                p: ({ children }) => (
                  <Typography variant="body2" paragraph sx={bodySx}>
                    {children}
                  </Typography>
                ),
                ul: ({ children }) => (
                  <Box component="ul" sx={{ mt: 0, mb: 2, pl: 3, ...listSx }}>
                    {children}
                  </Box>
                ),
                ol: ({ children }) => (
                  <Box component="ol" sx={{ mt: 0, mb: 2, pl: 3, ...listSx }}>
                    {children}
                  </Box>
                ),
                li: ({ children }) => (
                  <Typography
                    component="li"
                    variant="body2"
                    gutterBottom
                    sx={listItemSx}
                  >
                    {children}
                  </Typography>
                ),
                code: ({ inline, children }) =>
                  inline ? (
                    <Chip
                      label={children}
                      size="small"
                      sx={{ fontFamily: "monospace", ...chipSx }}
                    />
                  ) : (
                    <Box
                      component="pre"
                      sx={{
                        bgcolor: "grey.100",
                        borderLeft: 4,
                        borderColor: "primary.main",
                        px: 2,
                        py: 1.5,
                        borderRadius: 1,
                        overflowX: "auto",
                        mb: 2,
                        fontFamily: "monospace",
                        fontSize: "0.875rem",
                        ...codeBlockSx,
                      }}
                    >
                      {children}
                    </Box>
                  ),
                pre: ({ children }) => <>{children}</>,
                hr: () => <Divider sx={{ my: 2, ...dividerSx }} />,
                strong: ({ children }) => <strong>{children}</strong>,
                a: ({ href, children }) => (
                  <Typography
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    sx={{ color: "primary.main" }}
                  >
                    {children}
                  </Typography>
                ),
                blockquote: ({ children }) => (
                  <Box
                    sx={{
                      borderLeft: 4,
                      borderColor: "grey.300",
                      pl: 2,
                      my: 1,
                      color: "text.secondary",
                    }}
                  >
                    {children}
                  </Box>
                ),
              }}
            >
              {helpContent}
            </ReactMarkdown>
          ) : (
            helpContent
          )
        ) : (
          <>
            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              Overview
            </Typography>
            <Typography variant="body2" paragraph sx={bodySx}>
              The query search box lets you filter data using a simple, readable
              query language. Type your conditions directly into the search
              field and press <strong>Apply</strong> to run the query.
              Suggestions will appear as you type to guide you through valid
              columns, operators, and logical connectors.
            </Typography>

            <Divider sx={{ my: 2, ...dividerSx }} />

            {/* ── Basic Syntax ─────────────────────────────────────────────── */}
            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              Basic Syntax
            </Typography>
            <Typography variant="body2" paragraph sx={bodySx}>
              Every condition follows this pattern:
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: "grey.100",
                borderLeft: 4,
                borderColor: "primary.main",
                px: 2,
                py: 1.5,
                borderRadius: 1,
                overflowX: "auto",
                mb: 2,
                fontFamily: "monospace",
                fontSize: "0.875rem",
                ...codeBlockSx,
              }}
            >
              {`column  operator  value`}
            </Box>
            <Typography variant="body2" paragraph sx={bodySx}>
              Each part is separated by a single space:
            </Typography>
            <Box component="ul" sx={{ mt: 0, mb: 2, pl: 3, ...listSx }}>
              <Typography
                component="li"
                variant="body2"
                gutterBottom
                sx={listItemSx}
              >
                <strong>column</strong> — the field you want to filter on (e.g.{" "}
                <Chip
                  label="name"
                  size="small"
                  sx={{ fontFamily: "monospace", ...chipSx }}
                />
                ,{" "}
                <Chip
                  label="duration"
                  size="small"
                  sx={{ fontFamily: "monospace", ...chipSx }}
                />
                ).
              </Typography>
              <Typography
                component="li"
                variant="body2"
                gutterBottom
                sx={listItemSx}
              >
                <strong>operator</strong> — the comparison to apply (e.g.{" "}
                <Chip
                  label="=="
                  size="small"
                  sx={{ fontFamily: "monospace", ...chipSx }}
                />
                ,{" "}
                <Chip
                  label="contains"
                  size="small"
                  sx={{ fontFamily: "monospace", ...chipSx }}
                />
                ,{" "}
                <Chip
                  label=">"
                  size="small"
                  sx={{ fontFamily: "monospace", ...chipSx }}
                />
                ).
              </Typography>
              <Typography
                component="li"
                variant="body2"
                gutterBottom
                sx={listItemSx}
              >
                <strong>value</strong> — what you are comparing against. Wrap
                values that contain spaces in double quotes:{" "}
                <Chip
                  label={`"John Doe"`}
                  size="small"
                  sx={{ fontFamily: "monospace", ...chipSx }}
                />
                .
              </Typography>
            </Box>

            <Divider sx={{ my: 2, ...dividerSx }} />

            {/* ── Combining Conditions ─────────────────────────────────────── */}
            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              Combining Conditions
            </Typography>
            <Typography variant="body2" paragraph sx={bodySx}>
              Use <strong>AND</strong> or <strong>OR</strong> (uppercase) to
              join multiple conditions:
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: "grey.100",
                borderLeft: 4,
                borderColor: "primary.main",
                px: 2,
                py: 1.5,
                borderRadius: 1,
                overflowX: "auto",
                mb: 2,
                fontFamily: "monospace",
                fontSize: "0.875rem",
                ...codeBlockSx,
              }}
            >
              {`condition1 AND condition2 AND condition3
condition1 OR  condition2`}
            </Box>

            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              Grouping with Parentheses
            </Typography>
            <Typography variant="body2" paragraph sx={bodySx}>
              You can mix <strong>AND</strong> and <strong>OR</strong> in the
              same query by using parentheses <strong>( )</strong> to group
              conditions:
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: "grey.100",
                borderLeft: 4,
                borderColor: "primary.main",
                px: 2,
                py: 1.5,
                borderRadius: 1,
                overflowX: "auto",
                mb: 2,
                fontFamily: "monospace",
                fontSize: "0.875rem",
                ...codeBlockSx,
              }}
            >
              {`name == "John" AND (status == active OR status == pending)
(price > 100 AND price < 500) OR category == sale`}
            </Box>
            <Typography variant="body2" paragraph sx={bodySx}>
              Without parentheses, <strong>AND</strong> binds tighter than{" "}
              <strong>OR</strong>:
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: "grey.100",
                borderLeft: 4,
                borderColor: "primary.main",
                px: 2,
                py: 1.5,
                borderRadius: 1,
                overflowX: "auto",
                mb: 2,
                fontFamily: "monospace",
                fontSize: "0.875rem",
                ...codeBlockSx,
              }}
            >
              {`a = 1 OR b = 2 AND c = 3
// is the same as: a = 1 OR (b = 2 AND c = 3)`}
            </Box>

            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              NOT (Negation)
            </Typography>
            <Typography variant="body2" paragraph sx={bodySx}>
              Prefix a group with <strong>NOT</strong> to negate it:
            </Typography>
            <Box
              component="pre"
              sx={{
                bgcolor: "grey.100",
                borderLeft: 4,
                borderColor: "primary.main",
                px: 2,
                py: 1.5,
                borderRadius: 1,
                overflowX: "auto",
                mb: 2,
                fontFamily: "monospace",
                fontSize: "0.875rem",
                ...codeBlockSx,
              }}
            >
              {`NOT (status == inactive OR status == deleted)`}
            </Box>

            <Divider sx={{ my: 2, ...dividerSx }} />

            {/* ── Examples ─────────────────────────────────────────────────── */}
            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              Examples
            </Typography>

            {[
              {
                label: "Exact match",
                code: `name == "Alice"`,
              },
              {
                label: "Contains substring",
                code: `name contains "ali"`,
              },
              {
                label: "Numeric comparison",
                code: `duration > 30`,
              },
              {
                label: "Multiple conditions (AND)",
                code: `name == "Alice" AND duration > 30`,
              },
              {
                label: "Multiple conditions (OR)",
                code: `status == active OR status == pending`,
              },
              {
                label: "Mixed AND/OR with grouping",
                code: `name == "Alice" AND (status == active OR status == pending)`,
              },
              {
                label: "Nested groups",
                code: `(price > 100 AND price < 500) OR (category == sale AND stock > 0)`,
              },
              {
                label: "NOT negation",
                code: `NOT (status == deleted OR status == archived)`,
              },
            ].map(({ label, code }) => (
              <Box key={label} mb={1.5}>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                    ...exampleLabelSx,
                  }}
                >
                  {label}
                </Typography>
                <Box
                  component="pre"
                  sx={{
                    bgcolor: "grey.50",
                    border: 1,
                    borderColor: "divider",
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    overflowX: "auto",
                    mt: 0.5,
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                    ...exampleBlockSx,
                  }}
                >
                  {code}
                </Box>
              </Box>
            ))}

            <Divider sx={{ my: 2, ...dividerSx }} />

            {/* ── Tips ─────────────────────────────────────────────────────── */}
            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              Tips
            </Typography>
            <Box component="ul" sx={{ mt: 0, mb: 1, pl: 3, ...listSx }}>
              {[
                "Start typing a column name and select it from the suggestion list.",
                "After picking a column, the suggestion list will show valid operators for that column.",
                "After entering a value, AND / OR will appear in the suggestion list.",
                "Use parentheses ( ) to group conditions when mixing AND and OR.",
                "Prefix a group with NOT to negate it — e.g. NOT (status == deleted).",
                'Wrap multi-word values in double quotes — e.g. "John Doe".',
                "AND has higher precedence than OR. Use parentheses to override.",
                "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
                "You can also build queries visually using the filter panel (click the tune icon).",
              ].map((tip) => (
                <Typography
                  key={tip}
                  component="li"
                  variant="body2"
                  gutterBottom
                  sx={listItemSx}
                >
                  {tip}
                </Typography>
              ))}
            </Box>

            <Divider sx={{ my: 2, ...dividerSx }} />

            {/* ── Token Colors ─────────────────────────────────────────────── */}
            <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
              Syntax Highlighting
            </Typography>
            <Typography variant="body2" paragraph sx={bodySx}>
              As you type, each part of the query is colorized to help you spot
              mistakes at a glance:
            </Typography>
            <Box component="ul" sx={{ mt: 0, mb: 1, pl: 3, ...listSx }}>
              {[
                { color: "primary.main", label: "Blue", desc: "Known column" },
                {
                  color: "info.main",
                  label: "Light blue",
                  desc: "Custom / unknown column",
                },
                { color: "error.main", label: "Red", desc: "Valid operator" },
                {
                  color: "text.disabled",
                  label: "Grey",
                  desc: "Unrecognized operator (still typing)",
                },
                {
                  color: "secondary.main",
                  label: "Purple",
                  desc: "Logical connector — AND / OR / NOT",
                },
                {
                  color: "warning.main",
                  label: "Orange",
                  desc: "Parentheses ( )",
                },
                { color: "text.primary", label: "Default", desc: "Value" },
              ].map(({ color, label, desc }) => (
                <Typography
                  key={label}
                  component="li"
                  variant="body2"
                  gutterBottom
                  sx={colorLegendItemSx}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: color,
                      mr: 1,
                      verticalAlign: "middle",
                      ...colorSwatchSx,
                    }}
                  />
                  <Box component="strong" sx={{ color }}>
                    {label}
                  </Box>{" "}
                  — {desc}
                </Typography>
              ))}
            </Box>
          </>
        )}
      </DialogContent>

      <DialogActions sx={actionsSx}>
        <Button
          onClick={onClose}
          variant="contained"
          disableElevation
          sx={gotItButtonSx}
        >
          Got it
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// ---------------------------------------------------------------------------
// QueryTextBox
// ---------------------------------------------------------------------------
const QueryTextBox = ({
  columnsOperator,
  onSuggestionClick,
  defaultOperators,
  onApplyClicked,
  onClear,
  queryText,
  relatedOperators,
  placeholder = "",
  endAdornment,
  helpContent,
  sx = {},
  ...props
}) => {
  // Slot map: each key targets a specific element in the rendered tree so
  // callers can override styles per-slot, e.g.
  // sx={{ input: {...}, applyButton: {...}, suggestionItem: {...} }}.
  const {
    root: rootSx,
    inputRow: inputRowSx,
    inputWrapper: inputWrapperSx,
    highlightOverlay: highlightOverlaySx,
    input: inputSx,
    applyButton: applyButtonSx,
    helpButton: helpButtonSx,
    helpTooltip: helpTooltipSx,
    adornmentBox: adornmentBoxSx,
    errorTooltip: errorTooltipSx,
    hintTooltip: hintTooltipSx,
    popper: popperSx,
    suggestionsBox: suggestionsBoxSx,
    suggestionsList: suggestionsListSx,
    suggestionItem: suggestionItemSx,
    suggestionText: suggestionTextSx,
    tokenColors: tokenColorsOverride,
    tokenFontWeights: tokenFontWeightsOverride,
    helpModal: helpModalSx,
  } = sx;

  // Merge caller-provided token colors over the defaults so users can replace
  // only the colors they care about.
  const tokenColors = useMemo(
    () => ({ ...DEFAULT_TOKEN_COLORS, ...(tokenColorsOverride || {}) }),
    [tokenColorsOverride],
  );

  // Same merge strategy for per-token font weights.
  const tokenFontWeights = useMemo(
    () => ({
      ...DEFAULT_TOKEN_FONT_WEIGHTS,
      ...(tokenFontWeightsOverride || {}),
    }),
    [tokenFontWeightsOverride],
  );

  const theme = useTheme();
  const resolveColor = (color) => {
    if (!color || color === "inherit") return "inherit";
    const parts = color.split(".");
    let val = theme.palette;
    for (const p of parts) {
      val = val?.[p];
      if (val === undefined) return color;
    }
    return typeof val === "string" ? val : color;
  };

  const resolvedTokenColors = useMemo(() => {
    const resolved = {};
    for (const key of Object.keys(tokenColors)) {
      resolved[key] = resolveColor(tokenColors[key]);
    }
    return resolved;
  }, [tokenColors, theme]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [validationError, setValidationError] = useState(null);
  const [helpOpen, setHelpOpen] = useState(false);
  // Width of the input's endAdornment block (help icon + Apply button + any
  // caller-provided adornment). We measure it so the colored highlight overlay
  // can stop short of the buttons instead of rendering colored tokens behind
  // them when the query is long enough to scroll horizontally.
  const [adornmentWidth, setAdornmentWidth] = useState(0);
  const inputRef = useRef();
  const highlightRef = useRef(null);
  const adornmentRef = useRef(null);

  useEffect(() => {
    if (queryText !== undefined && queryText !== null) {
      setInputValue(queryText);
    }
  }, [queryText]);

  useEffect(() => {
    const columns = Object.keys(columnsOperator);

    // "All available operators" = union of every per-column operator list,
    // merged with the relatedOperators prop. This is what we show when the
    // user types a custom column that is NOT in columnsOperator, so we don't
    // depend on relatedOperators being kept perfectly in sync.
    const allAvailableOperators = Array.from(
      new Set([
        ...columns.flatMap((col) => columnsOperator[col]?.operators || []),
        ...(relatedOperators || []),
      ]),
    );

    const words = inputValue.trim().split(/\s+/).filter(Boolean);
    const lastWord = words[words.length - 1] || "";
    const secondLastWord = words[words.length - 2] || "";

    // Check if the last N words form a multi-word operator (e.g., "NOT IN", "IS NULL", "IS NOT NULL")
    const lastTwoWords =
      words.length >= 2
        ? `${words[words.length - 2]} ${words[words.length - 1]}`
        : "";
    const lastThreeWords =
      words.length >= 3
        ? `${words[words.length - 3]} ${words[words.length - 2]} ${words[words.length - 1]}`
        : "";

    const isLastMultiWordOp =
      allAvailableOperators.some(
        (op) => op.toUpperCase() === lastThreeWords.toUpperCase(),
      ) ||
      allAvailableOperators.some(
        (op) => op.toUpperCase() === lastTwoWords.toUpperCase(),
      );

    // Find the column that precedes the (possibly multi-word) operator
    const columnForMultiWordOp = (() => {
      if (
        lastThreeWords &&
        allAvailableOperators.some(
          (op) => op.toUpperCase() === lastThreeWords.toUpperCase(),
        )
      ) {
        return words[words.length - 4] || "";
      }
      if (
        lastTwoWords &&
        allAvailableOperators.some(
          (op) => op.toUpperCase() === lastTwoWords.toUpperCase(),
        )
      ) {
        return words[words.length - 3] || "";
      }
      return "";
    })();

    // A "column position" is the start of the query, or right after an AND/OR.
    // Anything typed there that is NOT a known column is treated as a custom column.
    const isAfterColumnPosition =
      !secondLastWord || defaultOperators.includes(secondLastWord);

    let nextSuggestions;

    if (
      !inputValue.trim() ||
      defaultOperators.includes(lastWord) ||
      lastWord === "("
    ) {
      // Empty input or right after AND/OR or ( → suggest known columns as starting hints
      nextSuggestions = columns;
    } else if (isLastMultiWordOp) {
      // Last words form a multi-word operator (NOT IN, IS NULL, IS NOT NULL) → suggest AND/OR (value position next, or logical for null ops)
      const matchedOp =
        allAvailableOperators.find(
          (op) => op.toUpperCase() === lastThreeWords.toUpperCase(),
        ) ||
        allAvailableOperators.find(
          (op) => op.toUpperCase() === lastTwoWords.toUpperCase(),
        );
      const nullOps = ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"];
      if (
        matchedOp &&
        nullOps.some((n) => n.toUpperCase() === matchedOp.toUpperCase())
      ) {
        nextSuggestions = defaultOperators;
      } else {
        // Non-null multi-word op (like NOT IN) — user needs to type a value next, then AND/OR
        nextSuggestions = defaultOperators;
      }
    } else if (columns.includes(lastWord)) {
      // Known column just typed → suggest its specific operators
      nextSuggestions = columnsOperator[lastWord].operators;
    } else if (isAfterColumnPosition) {
      // Custom (unknown) column at column position → show ALL available operators
      nextSuggestions = allAvailableOperators;
    } else if (
      columns.includes(secondLastWord) &&
      columnsOperator[secondLastWord].operators.includes(lastWord)
    ) {
      // Known column + its specific operator → suggest AND/OR (after the value)
      nextSuggestions = defaultOperators;
    } else if (allAvailableOperators.includes(lastWord)) {
      // Custom column + any available operator → suggest AND/OR (after the value)
      nextSuggestions = defaultOperators;
    } else if (columnForMultiWordOp && columns.includes(columnForMultiWordOp)) {
      // We're in the value position after a multi-word op on a known column → suggest AND/OR
      nextSuggestions = defaultOperators;
    } else {
      // Anywhere else (e.g., a value position) → suggest AND/OR
      nextSuggestions = defaultOperators;
    }

    setSuggestions(nextSuggestions);
    setFilteredSuggestions(nextSuggestions);

    // Validation now supports mixed AND/OR with parentheses grouping.
    // The regex param is no longer used — validateQuery handles it internally.
    const result = validateQuery(inputValue, null);
    setIsValid(result.isValid);
    setValidationError(result.error);
  }, [inputValue, columnsOperator, defaultOperators, relatedOperators]);

  // Observe the endAdornment block and keep `adornmentWidth` in sync. We use
  // a ResizeObserver so the highlight overlay re-trims itself if the Apply
  // button toggles disabled state, the caller swaps in a different adornment,
  // or the layout reflows for any other reason.
  useEffect(() => {
    const node = adornmentRef.current;
    if (!node || typeof ResizeObserver === "undefined") return;
    const update = () => setAdornmentWidth(node.offsetWidth || 0);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    return () => ro.disconnect();
  }, [endAdornment, inputValue, isValid]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase()),
      ),
    );
    setAnchorEl(inputRef.current);
  };

  // Keep the highlight overlay scrolled in sync with the (possibly overflowing)
  // input field so colored tokens always sit directly under their characters.
  const handleInputScroll = (event) => {
    if (highlightRef.current) {
      highlightRef.current.scrollLeft = event.target.scrollLeft;
    }
  };

  // Tokenize on every render of `inputValue`. Cheap because the regex is small
  // and we keep the result in an array of {type, text} objects.
  const tokens = useMemo(
    () =>
      tokenizeQuery(
        inputValue,
        Object.keys(columnsOperator || {}),
        Array.from(
          new Set([
            ...Object.values(columnsOperator || {}).flatMap(
              (c) => c?.operators || [],
            ),
            ...(relatedOperators || []),
          ]),
        ),
        defaultOperators || [],
      ),
    [inputValue, columnsOperator, relatedOperators, defaultOperators],
  );

  const handleSuggestionClick = (suggestion) => {
    // Append the suggestion with a leading space (if needed) AND a trailing
    // space so the caret lands in a ready-to-type position after selection.
    setInputValue((prev) => {
      const base = prev.trimEnd();
      return base ? `${base} ${suggestion} ` : `${suggestion} `;
    });
    onSuggestionClick?.(suggestion);
    // Note: we deliberately do NOT call `setAnchorEl(null)` here. After picking
    // (e.g.) a column, the value-change effect will refresh the suggestion list
    // to the column's operators, and we want that list to stay visible so the
    // user can continue chaining selections.
    // Move the caret to the very end so the user can keep typing immediately.
    setTimeout(() => {
      const el = inputRef.current;
      if (el) {
        const len = el.value.length;
        el.setSelectionRange(len, len);
        el.focus();
      }
    }, 0);
  };

  // Only show the error tooltip when the user has typed something AND the
  // query is invalid. We never show it for an empty input.
  const showError = Boolean(inputValue) && !isValid && Boolean(validationError);

  // Tooltip content: error message when invalid, usage hint when the field is
  // empty so first-time users know what to type.
  const tooltipTitle = showError
    ? validationError
    : !inputValue
      ? HINT_TEXT
      : "";
  const tooltipOpen = showError ? undefined : !inputValue ? undefined : false;

  return (
    <Box width="100%" sx={rootSx}>
      <Box display="flex" sx={inputRowSx}>
        {/*
          Highlight technique: render a transparent <input> on top of a mirror
          <Box> that draws colored <span>s for each token. The two share the
          same typography metrics (font, padding, line-height) so characters
          line up pixel-perfectly. Caret/selection still come from the real
          input — we only paint colors underneath.
        */}
        <Box
          sx={{ position: "relative", flex: 1, minWidth: 0, ...inputWrapperSx }}
        >
          <Box
            ref={highlightRef}
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              // Stop short of the endAdornment block (help icon + Apply button
              // + any caller-provided adornment) so colored tokens never paint
              // behind the buttons when the query overflows horizontally.
              right: `${adornmentWidth}px`,
              padding: "16.5px 14px", // matches default OutlinedInput padding
              fontFamily: "inherit",
              fontSize: "1rem",
              lineHeight: "1.4375em", // MUI OutlinedInput default
              whiteSpace: "pre",
              // Must be scrollable so `scrollLeft` syncs with the real input,
              // but the scrollbar should stay invisible to users.
              overflow: "auto",
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": { display: "none" }, // Chrome / Safari
              pointerEvents: "none",
              color: "transparent",
              borderRadius: "4px",
              ...highlightOverlaySx,
            }}
          >
            {tokens.map((tok, i) =>
              tok.type === "whitespace" ? (
                <span key={i}>{tok.text}</span>
              ) : (
                <span
                  key={i}
                  style={{
                    color: resolvedTokenColors[tok.type] || "inherit",
                    fontWeight:
                      tokenFontWeights[tok.type] ??
                      DEFAULT_TOKEN_FONT_WEIGHTS[tok.type] ??
                      400,
                  }}
                >
                  {tok.text}
                </span>
              ),
            )}
          </Box>
          <Tooltip
            // Show validation error when invalid, usage hint when empty, nothing otherwise.
            title={tooltipTitle}
            open={tooltipOpen}
            placement="top-start"
            arrow
            componentsProps={{
              tooltip: {
                sx: showError
                  ? {
                      bgcolor: "error.main",
                      color: "error.contrastText",
                      fontSize: "0.75rem",
                      maxWidth: 360,
                      ...errorTooltipSx,
                    }
                  : {
                      bgcolor: "info.dark",
                      color: "common.white",
                      fontSize: "0.75rem",
                      maxWidth: 360,
                      ...hintTooltipSx,
                    },
              },
              arrow: {
                sx: showError
                  ? {
                      color: "error.main",
                      ...(errorTooltipSx?.bgcolor && {
                        color: errorTooltipSx.bgcolor,
                      }),
                    }
                  : {
                      color: "info.dark",
                      ...(hintTooltipSx?.bgcolor && {
                        color: hintTooltipSx.bgcolor,
                      }),
                    },
              },
            }}
          >
            <OutlinedInput
              {...props}
              placeholder={placeholder}
              sx={{
                width: "100%",
                backgroundColor: "transparent",
                "& .MuiOutlinedInput-input": {
                  // Make the real text invisible so only the colored mirror
                  // shows through. `caret-color` must be a concrete color (not
                  // `currentColor`, which would resolve to `transparent` here
                  // and hide the cursor). We pick the theme's primary text color
                  // so the caret stays visible in both light and dark themes.
                  color: "transparent",
                  caretColor: (theme) => theme.palette.text.primary,
                  "&::placeholder": {
                    color: "text.secondary",
                    opacity: 0.7,
                  },
                },
                // Keep the trailing adornment (icons + Apply button) flush to
                // the right edge of the input without extra horizontal padding.
                "& .MuiInputAdornment-positionEnd": {
                  marginLeft: 0,
                },
                ...inputSx,
              }}
              inputRef={inputRef}
              // Pass onScroll via inputProps so it fires on the native <input>
              // element (not the MUI wrapper div). Only the native element
              // fires scroll events when single-line text overflows.
              inputProps={{ onScroll: handleInputScroll }}
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => setAnchorEl(inputRef.current)}
              onBlur={() => setTimeout(() => setAnchorEl(null), 100)}
              error={!inputValue ? false : !isValid}
              endAdornment={
                <InputAdornment position="end">
                  <Box
                    ref={adornmentRef}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      ...adornmentBoxSx,
                    }}
                  >
                    {/* Clear button — visible only when there is text */}
                    {inputValue && (
                      <IconButton
                        onClick={() => {
                          setInputValue("");
                          onClear?.();
                          inputRef.current?.focus();
                        }}
                        aria-label="Clear query"
                        size="small"
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    )}

                    {/* Help button — opens the query-syntax modal */}
                    <Tooltip
                      title="Query syntax help"
                      placement="top"
                      sx={helpTooltipSx}
                    >
                      <IconButton
                        onClick={() => setHelpOpen(true)}
                        aria-label="Query syntax help"
                        size="small"
                        edge={endAdornment ? false : "end"}
                        // Stop the input from blurring (which would close the
                        // suggestion popper) when clicking the icon.
                        onMouseDown={(e) => e.preventDefault()}
                        sx={helpButtonSx}
                      >
                        <HelpOutlineIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>

                    {/* Caller-provided adornment (e.g. gear icon) */}
                    {endAdornment}

                    <Button
                      disabled={!inputValue || !isValid}
                      onClick={() => onApplyClicked(inputValue)}
                      onMouseDown={(e) => e.preventDefault()}
                      size="small"
                      sx={applyButtonSx}
                    >
                      Apply
                    </Button>
                  </Box>
                </InputAdornment>
              }
            />
          </Tooltip>
        </Box>
      </Box>

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom-start"
        sx={{ zIndex: 1300, ...popperSx }}
      >
        <Box
          sx={{
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            width: "300px",
            zIndex: 1300,
            ...suggestionsBoxSx,
          }}
        >
          <List dense sx={suggestionsListSx}>
            {filteredSuggestions.map((suggestion, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  // Prevent the input from blurring when the user mouses down
                  // on a suggestion. Without this, blur fires → onBlur queues a
                  // setTimeout that clears the popper anchor 100ms later, so
                  // the just-refreshed (e.g. operator) list never gets shown.
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSuggestionClick(suggestion)}
                  sx={suggestionItemSx}
                >
                  <Typography variant="body2" sx={suggestionTextSx}>
                    {suggestion}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Popper>

      {/* Help modal */}
      <HelpModal
        open={helpOpen}
        onClose={() => setHelpOpen(false)}
        helpContent={helpContent}
        sx={helpModalSx}
      />
    </Box>
  );
};

export default QueryTextBox;
