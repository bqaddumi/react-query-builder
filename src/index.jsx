import { useEffect, useMemo, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import TuneIcon from "@mui/icons-material/Tune";
import { Close, RestartAlt, Search } from "@mui/icons-material";
import { IconButton, Box, Button, Typography, Tooltip } from "@mui/material";
import QueryForm from "./QueryForm";
import QueryTextBox from "./QueryTextBox";
import {
  parseQuery,
  flattenGroupToQueries,
  convertGroupToText,
} from "./helpers";

const ACCENT = "#007aff";

export default function QueryBuilder({
  columnsOperator = {},
  defaultOperators = [],
  relatedOperators = [],
  handleApply,
  placeholder = "",
  helpContent,
  sx = {},
}) {
  const {
    root: rootSx,
    textBoxContainer: textBoxContainerSx,
    textBox: textBoxSx,
    iconButton: iconButtonSx,
    dialog: dialogSx,
    dialogPaper: dialogPaperSx,
    header: headerSx,
    body: bodySx,
    title: titleSx,
    queryForm: queryFormSx,
    // Legacy aliases from when this was a Popover
    popover: legacyPopoverSx,
    popoverPaper: legacyPopoverPaperSx,
    popoverContent: legacyPopoverContentSx,
  } = sx;

  const [open, setOpen] = useState(false);
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

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  const handleClear = () => {
    setGroupTree(null);
    if (handleApply) {
      handleApply(null);
    }
  };

  const [draftGroup, setDraftGroup] = useState(null);
  const applyRef = useRef(null);

  const queryText = useMemo(
    () => (groupTree ? convertGroupToText(groupTree) : ""),
    [groupTree],
  );

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
          onClear={handleClear}
          queryText={queryText}
          relatedOperators={relatedOperators}
          placeholder={placeholder}
          helpContent={helpContent}
          sx={textBoxSx}
          endAdornment={
            <IconButton
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

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: "10px",
              overflow: "hidden",
              ...dialogPaperSx,
              ...legacyPopoverPaperSx,
            },
          },
        }}
        sx={{ ...dialogSx, ...legacyPopoverSx }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            height: 52,
            pl: 2.5,
            pr: 1.5,
            bgcolor: ACCENT,
            color: "#fff",
            ...headerSx,
          }}
        >
          <Typography
            component="h2"
            fontSize={17}
            fontWeight={500}
            flex={1}
            sx={titleSx}
          >
            Query Builder
          </Typography>
          <Tooltip title="Close">
            <IconButton
              size="small"
              aria-label="Close"
              onClick={handleClose}
              sx={{ color: "#fff" }}
            >
              <Close sx={{ fontSize: 18 }} />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Body */}
        <Box
          sx={{
            p: 2,
            overflow: "auto",
            bgcolor: "background.default",
            maxHeight: "min(60vh, 560px)",
            ...bodySx,
            ...legacyPopoverContentSx,
          }}
        >
          <QueryForm
            columnsOperator={dynamicColumnsOperator}
            handleApplyFilters={handleApplyFilters}
            onCancel={handleClose}
            onGroupChange={setDraftGroup}
            applyRef={applyRef}
            defaultOperators={defaultOperators}
            groupTree={groupTree}
            sx={queryFormSx}
          />
        </Box>

        {/* Footer */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            px: 2.5,
            py: 1.5,
            borderTop: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Button
            size="small"
            startIcon={<RestartAlt sx={{ fontSize: 16 }} />}
            onClick={() => handleApplyFilters(null)}
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Reset
          </Button>
          <Box sx={{ flex: 1 }} />
          <Button
            variant="outlined"
            size="small"
            onClick={handleClose}
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            startIcon={<Search sx={{ fontSize: 16 }} />}
            onClick={() => {
              if (applyRef.current) applyRef.current();
            }}
            sx={{
              textTransform: "none",
              fontSize: 13,
              bgcolor: ACCENT,
              "&:hover": { bgcolor: "#0062cc" },
            }}
          >
            Apply filter
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}
