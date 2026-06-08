import { useEffect, useMemo, useState } from "react";
import Popover from "@mui/material/Popover";
import TuneIcon from "@mui/icons-material/Tune";
import { IconButton, Box, Typography } from "@mui/material";
import QueryForm from "./QueryForm";
import QueryTextBox from "./QueryTextBox";
import { parseQuery } from "./helpers";

export default function QueryBuilder({
  columnsOperator = {},
  defaultOperators = [],
  relatedOperators = [],
  handleApply,
  placeholder = "",
  sx = {},
}) {
  // Pull named slots out of `sx` so callers can target individual parts of
  // the component, e.g. sx={{ root: {...}, popover: {...} }}.
  // The `textBox` and `queryForm` slots are themselves slot maps forwarded
  // to QueryTextBox and QueryForm respectively.
  const {
    root: rootSx,
    textBoxContainer: textBoxContainerSx,
    textBox: textBoxSx,
    iconButton: iconButtonSx,
    popover: popoverSx,
    popoverPaper: popoverPaperSx,
    popoverContent: popoverContentSx,
    title: titleSx,
    queryForm: queryFormSx,
  } = sx;

  const [anchorEl, setAnchorEl] = useState(null);
  const [queries, setQueries] = useState([]);
  const [defaultOperator, setDefaultOperator] = useState("AND");

  // Local, extendable copy of `columnsOperator`. When the user types a column
  // in the free-text box that is NOT in the prop, we register it here with
  // all available operators so the QueryForm table can show it as a column.
  const [dynamicColumnsOperator, setDynamicColumnsOperator] = useState(
    columnsOperator
  );

  // If the caller supplies a new `columnsOperator` prop, reset our local copy.
  useEffect(() => {
    setDynamicColumnsOperator(columnsOperator);
  }, [columnsOperator]);

  // Union of every per-column operator + `relatedOperators`. Used as the
  // operator list assigned to new (custom) columns so they support every
  // operator known to the builder.
  const allAvailableOperators = useMemo(
    () =>
      Array.from(
        new Set([
          ...Object.values(columnsOperator).flatMap(
            (c) => c?.operators || []
          ),
          ...(relatedOperators || []),
        ])
      ),
    [columnsOperator, relatedOperators]
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onApplyClicked = (value) => {
    const knownColumns = Object.keys(dynamicColumnsOperator);
    const _queries = parseQuery(value, allAvailableOperators, knownColumns);

    // Register any column referenced in the query that is not yet known.
    const newColumns = {};
    _queries.forEach((q) => {
      if (
        q.column &&
        !dynamicColumnsOperator[q.column] &&
        !newColumns[q.column]
      ) {
        newColumns[q.column] = { operators: allAvailableOperators };
      }
    });
    if (Object.keys(newColumns).length) {
      setDynamicColumnsOperator((prev) => ({ ...prev, ...newColumns }));
    }

    const globalOperator =
      defaultOperators.find((operator) => value.includes(` ${operator} `)) ||
      null;
    setQueries(_queries);
    if (handleApply) {
      handleApply(_queries, globalOperator);
    }
  };

  const handleApplyFilters = (globalOperator, _queries) => {
    setDefaultOperator(globalOperator);
    setQueries(_queries);
    if (handleApply) {
      handleApply(_queries, globalOperator);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={rootSx}>
      <Box
        display="flex"
        alignItems="center"
        marginBottom="16px"
        width="100%"
        sx={textBoxContainerSx}
      >
        {/* use this text box to build the query upon user selection from input suggestions */}
        <QueryTextBox
          columnsOperator={dynamicColumnsOperator}
          defaultOperators={defaultOperators}
          onApplyClicked={onApplyClicked}
          defaultValues={queries}
          defaultOperator={defaultOperator}
          relatedOperators={relatedOperators}
          placeholder={placeholder}
          sx={textBoxSx}
          endAdornment={
            <IconButton
              aria-describedby={id}
              onClick={handleClick}
              size="small"
              // Prevent the input from blurring (and closing the suggestion
              // popper) when the user clicks the gear icon.
              onMouseDown={(e) => e.preventDefault()}
              sx={iconButtonSx}
            >
              <TuneIcon fontSize="small" />
            </IconButton>
          }
        />
      </Box>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        // Constrain the floating paper so it never spills off-screen on
        // narrow viewports. `calc(100vw - 32px)` leaves a 16px gutter on each
        // side, and `maxHeight` + scroll lets long forms fit on short screens.
        // Callers can override or extend any of these via `sx.popoverPaper`.
        slotProps={{
          paper: {
            sx: {
              // Mobile: hug the viewport with a 16px gutter on each side.
              // Tablet/desktop: ask for an explicit `width` (not just a cap)
              // so the paper actually expands to give the three row controls
              // (Column / Operator / Value) generous, equal space instead of
              // collapsing around its content.
              width: {
                xs: "calc(100vw - 32px)",
                sm: 720,
                md: 880,
                lg: 1040,
              },
              maxWidth: "calc(100vw - 32px)",
              maxHeight: "calc(100vh - 96px)",
              overflowY: "auto",
              boxSizing: "border-box",
              ...popoverPaperSx,
            },
          },
        }}
        sx={{ ...popoverSx }}
      >
        <Box sx={{ padding: { xs: 1.5, sm: 2 }, ...popoverContentSx }}>
          <Typography variant="h6" sx={titleSx}>
            Query Builder
          </Typography>

          <QueryForm
            columnsOperator={dynamicColumnsOperator}
            handleApplyFilters={handleApplyFilters}
            defaultOperators={defaultOperators}
            defaultValues={queries}
            defaultOperator={defaultOperator}
            sx={queryFormSx}
          />
        </Box>
      </Popover>
    </Box>
  );
}
