import { useEffect, useMemo, useState } from "react";
import Popover from "@mui/material/Popover";
import TuneIcon from "@mui/icons-material/Tune";
import { IconButton, Box, Typography } from "@mui/material";
import QueryForm from "./QueryForm";
import QueryTextBox from "./QueryTextBox";
import {
  parseQuery,
  flattenGroupToQueries,
  convertGroupToText,
} from "./helpers";

export default function QueryBuilder({
  columnsOperator = {},
  defaultOperators = [],
  relatedOperators = [],
  handleApply,
  placeholder = "",
  sx = {},
}) {
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
  const [groupTree, setGroupTree] = useState(null);

  const [dynamicColumnsOperator, setDynamicColumnsOperator] =
    useState(columnsOperator);

  useEffect(() => {
    setDynamicColumnsOperator(columnsOperator);
  }, [columnsOperator]);

  const allAvailableOperators = useMemo(
    () =>
      Array.from(
        new Set([
          ...Object.values(columnsOperator).flatMap((c) => c?.operators || []),
          ...(relatedOperators || []),
        ]),
      ),
    [columnsOperator, relatedOperators],
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const registerNewColumns = (tree) => {
    const flatRules = flattenGroupToQueries(tree);
    const newColumns = {};
    flatRules.forEach((q) => {
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
  };

  const onApplyClicked = (value) => {
    const knownColumns = Object.keys(dynamicColumnsOperator);
    const tree = parseQuery(value, allAvailableOperators, knownColumns);
    registerNewColumns(tree);
    setGroupTree(tree);
    if (handleApply) {
      handleApply(tree);
    }
  };

  const handleApplyFilters = (tree) => {
    registerNewColumns(tree);
    setGroupTree(tree);
    handleClose();
    if (handleApply) {
      handleApply(tree);
    }
  };

  const queryText = useMemo(
    () => (groupTree ? convertGroupToText(groupTree) : ""),
    [groupTree],
  );

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
        <QueryTextBox
          columnsOperator={dynamicColumnsOperator}
          defaultOperators={defaultOperators}
          onApplyClicked={onApplyClicked}
          queryText={queryText}
          relatedOperators={relatedOperators}
          placeholder={placeholder}
          sx={textBoxSx}
          endAdornment={
            <IconButton
              aria-describedby={id}
              onClick={handleClick}
              size="small"
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
        slotProps={{
          paper: {
            sx: {
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
            groupTree={groupTree}
            sx={queryFormSx}
          />
        </Box>
      </Popover>
    </Box>
  );
}
