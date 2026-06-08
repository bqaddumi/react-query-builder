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
import {
  convertQueriesToText,
  validateQuery,
  escapeRegex,
  tokenizeQuery,
} from "./helpers";

// Default highlight palette per token type. Callers can override any of these
// via sx.tokenColors (see README "Token Highlighting").
const DEFAULT_TOKEN_COLORS = {
  column: "#1976d2", // blue   – known column
  customColumn: "#0288d1", // light blue – custom/unknown column
  operator: "#d32f2f", // red    – related operator
  unknownOperator: "#9e9e9e", // grey   – not (yet) a valid operator
  logical: "#7b1fa2", // purple – AND / OR
  value: "inherit",
};

// Default font weights per token type. Callers can override any of these via
// sx.tokenFontWeights to customize the visual emphasis of each token.
const DEFAULT_TOKEN_FONT_WEIGHTS = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  value: 400,
};

const HINT_TEXT =
  'Type a query like: column operator value — e.g. name == "John"';

// ---------------------------------------------------------------------------
// HelpModal – standalone component so the JSX stays readable
// ---------------------------------------------------------------------------
const HelpModal = ({ open, onClose, sx = {} }) => {
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
        {/* ── Overview ─────────────────────────────────────────────────── */}
        <Typography variant="h6" gutterBottom sx={sectionTitleSx}>
          Overview
        </Typography>
        <Typography variant="body2" paragraph sx={bodySx}>
          The query search box lets you filter data using a simple, readable
          query language. Type your conditions directly into the search field
          and press <strong>Apply</strong> to run the query. Suggestions will
          appear as you type to guide you through valid columns, operators,
          and logical connectors.
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
          Use <strong>AND</strong> or <strong>OR</strong> (uppercase) to join
          multiple conditions:
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
        <Typography
          variant="body2"
          sx={{ color: "error.main", ...warningTextSx }}
          paragraph
        >
          ⚠ You cannot mix <strong>AND</strong> and <strong>OR</strong> in the
          same query. Pick one logical operator and use it consistently.
        </Typography>

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
            label: "Date range",
            code: `created_at after 2024-01-01 AND created_at before 2024-12-31`,
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
            'Wrap multi-word values in double quotes — e.g. "John Doe".',
            "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
            "You can also build queries using the advanced filter panel (click the ⊟ icon).",
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
            { color: "#1976d2", label: "Blue", desc: "Known column" },
            {
              color: "#0288d1",
              label: "Light blue",
              desc: "Custom / unknown column",
            },
            { color: "#d32f2f", label: "Red", desc: "Valid operator" },
            {
              color: "#9e9e9e",
              label: "Grey",
              desc: "Unrecognized operator (still typing)",
            },
            {
              color: "#7b1fa2",
              label: "Purple",
              desc: "Logical connector — AND / OR",
            },
            { color: "inherit", label: "Default", desc: "Value" },
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
                  bgcolor: color === "inherit" ? "text.primary" : color,
                  mr: 1,
                  verticalAlign: "middle",
                  ...colorSwatchSx,
                }}
              />
              <strong
                style={{ color: color === "inherit" ? undefined : color }}
              >
                {label}
              </strong>{" "}
              — {desc}
            </Typography>
          ))}
        </Box>
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
  defaultValues,
  defaultOperator,
  relatedOperators,
  placeholder = "",
  endAdornment,
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
    [tokenColorsOverride]
  );

  // Same merge strategy for per-token font weights.
  const tokenFontWeights = useMemo(
    () => ({
      ...DEFAULT_TOKEN_FONT_WEIGHTS,
      ...(tokenFontWeightsOverride || {}),
    }),
    [tokenFontWeightsOverride]
  );

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
    if (
      defaultValues &&
      Array.isArray(defaultValues) &&
      defaultValues.length &&
      defaultOperator
    ) {
      const query = convertQueriesToText(defaultValues, defaultOperator);
      setInputValue(query);
    }
  }, [defaultOperator, defaultValues]);

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
      ])
    );

    const words = inputValue.trim().split(/\s+/).filter(Boolean);
    const lastWord = words[words.length - 1] || "";
    const secondLastWord = words[words.length - 2] || "";

    // A "column position" is the start of the query, or right after an AND/OR.
    // Anything typed there that is NOT a known column is treated as a custom column.
    const isAfterColumnPosition =
      !secondLastWord || defaultOperators.includes(secondLastWord);

    let nextSuggestions;

    if (!inputValue.trim() || defaultOperators.includes(lastWord)) {
      // Empty input or right after AND/OR → suggest known columns as starting hints
      nextSuggestions = columns;
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
    } else {
      // Anywhere else (e.g., a value position) → suggest AND/OR
      nextSuggestions = defaultOperators;
    }

    setSuggestions(nextSuggestions);
    setFilteredSuggestions(nextSuggestions);

    // Validation regex: a column can be ANY non-whitespace token,
    // not just one of the keys defined in `columnsOperator`. Operators
    // accepted include both relatedOperators and the union derived above.
    const operatorAlternation = allAvailableOperators
      .map(escapeRegex)
      .join("|");
    const _queryRegex = new RegExp(
      `^(\\S+)\\s+(${operatorAlternation})\\s+(".+?"|\\S+)` +
        `(?:\\s+(AND|OR)\\s+(\\S+)\\s+(${operatorAlternation})\\s+(".+?"|\\S+))*$`,
      "i"
    );
    const result = validateQuery(inputValue, _queryRegex);
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
        suggestion.toLowerCase().includes(value.toLowerCase())
      )
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
              (c) => c?.operators || []
            ),
            ...(relatedOperators || []),
          ])
        ),
        defaultOperators || []
      ),
    [inputValue, columnsOperator, relatedOperators, defaultOperators]
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
  const tooltipTitle = showError ? validationError : (!inputValue ? HINT_TEXT : "");
  const tooltipOpen = showError ? undefined : (!inputValue ? undefined : false);

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
        <Box sx={{ position: "relative", flex: 1, minWidth: 0, ...inputWrapperSx }}>
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
              scrollbarWidth: "none",          // Firefox
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
                    color: tokenColors[tok.type] || "inherit",
                    fontWeight:
                      tokenFontWeights[tok.type] ??
                      DEFAULT_TOKEN_FONT_WEIGHTS[tok.type] ??
                      400,
                  }}
                >
                  {tok.text}
                </span>
              )
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
                  ? { color: "error.main", ...(errorTooltipSx?.bgcolor && { color: errorTooltipSx.bgcolor }) }
                  : { color: "info.dark", ...(hintTooltipSx?.bgcolor && { color: hintTooltipSx.bgcolor }) },
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
        sx={helpModalSx}
      />
    </Box>
  );
};

export default QueryTextBox;
