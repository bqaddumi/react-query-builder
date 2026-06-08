import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

// Shared responsive sx for the per-row form controls. On `xs` each control
// takes the full row width and the row stacks vertically; on `sm`+ the three
// controls share the row evenly via `flex: 1`. `minWidth: 0` lets them shrink
// below their intrinsic content width so the row never overflows.
//
// NOTE: we deliberately do NOT override `padding` here. The previous version
// forced `padding: "4px !important"` which clobbered the default `padding-right`
// that MUI reserves for the Select dropdown caret, causing the arrow to overlap
// the placeholder text ("Select Column" → "Select Colum▼"). We rely on
// `size="small"` (applied per-control) to get a uniform compact height while
// keeping the caret/text spacing intact.
const fieldSx = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0,
};

const QueryForm = ({
  columnsOperator,
  handleApplyFilters,
  defaultOperators,
  defaultValues,
  defaultOperator,
  sx = {},
}) => {
  // Slot map: each key targets a specific element in the rendered tree so
  // callers can override styles per-slot, e.g.
  // sx={{ root: {...}, applyButton: {...}, columnSelect: {...} }}.
  const {
    root: rootSx,
    header: headerSx,
    headerLabel: headerLabelSx,
    globalOperatorSelect: globalOperatorSelectSx,
    rowsStack: rowsStackSx,
    row: rowSx,
    columnSelect: columnSelectSx,
    operatorSelect: operatorSelectSx,
    valueInput: valueInputSx,
    deleteButton: deleteButtonSx,
    deleteTooltip: deleteTooltipSx,
    actions: actionsSx,
    addButton: addButtonSx,
    applyButton: applyButtonSx,
  } = sx;

  const [queries, setQueries] = useState([
    { column: "", operator: "", value: "" },
  ]);
  const [globalOperator, setGlobalOperator] = useState("AND");

  const handleAddRow = () => {
    setQueries((prev) => [...prev, { column: "", operator: "", value: "" }]);
  };

  const handleDeleteRow = (index) => {
    setQueries((prev) => prev.filter((_, i) => i !== index));
  };

  const handleQueryChange = (index, field, value) => {
    setQueries((prev) =>
      prev.map((query, i) =>
        i === index ? { ...query, [field]: value } : query
      )
    );
  };

  useEffect(() => {
    if (defaultValues && Array.isArray(defaultValues) && defaultValues.length) {
      setQueries(defaultValues);
    }
  }, [defaultValues]);

  useEffect(() => {
    setGlobalOperator(defaultOperator);
  }, [defaultOperator]);

  return (
    <Box
      sx={{
        // Fill whatever width the parent popover paper gives us. The paper
        // itself enforces sensible mobile/desktop caps in index.jsx, so we
        // don't add a second cap here — that's what was previously squeezing
        // the fields to ~200px each on wide screens.
        width: "100%",
        padding: { xs: 1, sm: 2 },
        boxSizing: "border-box",
        ...rootSx,
      }}
    >
      {/* Header: "Combine queries with: [AND/OR]". Wraps on very narrow
          screens so the select drops below the label instead of overflowing. */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
          mb: 2,
          ...headerSx,
        }}
      >
        <Typography variant="body1" sx={headerLabelSx}>
          Combine queries with:
        </Typography>
        <Select
          size="small"
          value={globalOperator}
          onChange={(e) => setGlobalOperator(e.target.value)}
          sx={{ minWidth: 120, ...globalOperatorSelectSx }}
        >
          {defaultOperators.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Query rows. Each row is a flex container that collapses to a vertical
          stack on `xs` and lays out horizontally on `sm`+ with the three
          controls sharing the row evenly. */}
      <Stack spacing={1.5} sx={rowsStackSx}>
        {queries.map((query, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 1.5 },
              alignItems: { xs: "stretch", sm: "center" },
              py: 0.5,
              borderBottom: { xs: 1, sm: 0 },
              borderColor: "divider",
              ...rowSx,
            }}
          >
            <Select
              size="small"
              value={query.column}
              onChange={(e) =>
                handleQueryChange(index, "column", e.target.value)
              }
              displayEmpty
              fullWidth
              sx={{ ...fieldSx, ...columnSelectSx }}
            >
              <MenuItem value="" disabled>
                Select Column
              </MenuItem>
              {Object.keys(columnsOperator).map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>

            <Select
              size="small"
              value={query.operator}
              onChange={(e) =>
                handleQueryChange(index, "operator", e.target.value)
              }
              displayEmpty
              disabled={!query.column}
              fullWidth
              sx={{ ...fieldSx, ...operatorSelectSx }}
            >
              <MenuItem value="" disabled>
                Select Operator
              </MenuItem>
              {query.column &&
                columnsOperator[query.column]?.operators.map((operator) => (
                  <MenuItem key={operator} value={operator}>
                    {operator}
                  </MenuItem>
                ))}
            </Select>

            <TextField
              size="small"
              value={query.value}
              onChange={(e) =>
                handleQueryChange(index, "value", e.target.value)
              }
              placeholder="Enter value"
              fullWidth
              sx={{ ...fieldSx, ...valueInputSx }}
            />

            <Tooltip title="Delete Query" sx={deleteTooltipSx}>
              <IconButton
                onClick={() => handleDeleteRow(index)}
                color="error"
                size="small"
                sx={{
                  // On mobile, anchor the trash icon to the right of the
                  // stacked column so it doesn't take a full row of its own.
                  alignSelf: { xs: "flex-end", sm: "center" },
                  flex: { sm: "0 0 auto" },
                  ...deleteButtonSx,
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        ))}
      </Stack>

      {/* Action buttons: full-width stacked on `xs`, inline on `sm` and up. */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mt: 2.5,
          ...actionsSx,
        }}
      >
        <Button
          startIcon={<Add />}
          onClick={handleAddRow}
          sx={{ flex: { xs: "1 1 100%", sm: "0 0 auto" }, ...addButtonSx }}
        >
          Add Query
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleApplyFilters(globalOperator, queries)}
          sx={{ flex: { xs: "1 1 100%", sm: "0 0 auto" }, ...applyButtonSx }}
        >
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
};

export default QueryForm;
