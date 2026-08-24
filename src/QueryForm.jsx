import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Switch,
  TextField,
  Tooltip,
  FormControlLabel,
} from "@mui/material";
import {
  Add,
  Close,
  CreateNewFolderOutlined,
  DeleteOutline,
} from "@mui/icons-material";
import { isNullOperator } from "./helpers";

const ACCENT = "#007aff";

const controlSx = {
  borderRadius: "4px",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "divider" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: ACCENT,
    borderWidth: "1px",
  },
  "& .MuiSelect-select, & .MuiOutlinedInput-input": {
    py: "7px",
    fontSize: 13.5,
  },
};

function createRule() {
  return { type: "rule", column: "", operator: "", value: "" };
}

function createGroup(combinator = "AND") {
  return {
    type: "group",
    combinator,
    not: false,
    rules: [createRule()],
  };
}

const JoinToggle = ({ value, onChange }) => (
  <Box
    role="group"
    aria-label="Combine conditions with"
    sx={{
      display: "inline-flex",
      border: "1px solid",
      borderColor: ACCENT,
      borderRadius: "4px",
      overflow: "hidden",
    }}
  >
    {["AND", "OR"].map((join) => (
      <Box
        key={join}
        component="button"
        type="button"
        aria-pressed={value === join}
        onClick={() => onChange(join)}
        sx={{
          cursor: "pointer",
          border: 0,
          px: 1.5,
          py: "3px",
          fontFamily: "inherit",
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: ".05em",
          bgcolor: value === join ? ACCENT : "transparent",
          color: value === join ? "#fff" : ACCENT,
        }}
      >
        {join}
      </Box>
    ))}
  </Box>
);

const RuleRow = ({
  rule,
  index,
  columnsOperator,
  onChange,
  onDelete,
  sx = {},
}) => {
  const { columnSelectSx, operatorSelectSx, valueInputSx, deleteButtonSx } = sx;

  return (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        alignItems: "center",
        gridTemplateColumns: {
          xs: "1fr 1fr",
          sm: "1fr 150px 1.4fr 32px",
        },
        mb: 1,
      }}
    >
      <Select
        size="small"
        value={rule.column}
        onChange={(e) => onChange(index, "column", e.target.value)}
        displayEmpty
        fullWidth
        sx={{ ...controlSx, ...columnSelectSx }}
      >
        <MenuItem value="" disabled sx={{ fontSize: 13.5 }}>
          Select Column
        </MenuItem>
        {Object.keys(columnsOperator).map((key) => (
          <MenuItem key={key} value={key} sx={{ fontSize: 13.5 }}>
            {key}
          </MenuItem>
        ))}
      </Select>

      <Select
        size="small"
        value={rule.operator}
        onChange={(e) => onChange(index, "operator", e.target.value)}
        displayEmpty
        disabled={!rule.column}
        fullWidth
        sx={{ ...controlSx, ...operatorSelectSx }}
      >
        <MenuItem value="" disabled sx={{ fontSize: 13.5 }}>
          Select Operator
        </MenuItem>
        {rule.column &&
          columnsOperator[rule.column]?.operators.map((operator) => (
            <MenuItem key={operator} value={operator} sx={{ fontSize: 13.5 }}>
              {operator}
            </MenuItem>
          ))}
      </Select>

      {!isNullOperator(rule.operator) ? (
        <TextField
          size="small"
          value={rule.value}
          onChange={(e) => onChange(index, "value", e.target.value)}
          placeholder="Enter value"
          fullWidth
          sx={{ ...controlSx, ...valueInputSx }}
        />
      ) : (
        <Box />
      )}

      <Tooltip title="Remove condition">
        <IconButton
          onClick={() => onDelete(index)}
          size="small"
          sx={{
            alignSelf: "center",
            ...deleteButtonSx,
          }}
        >
          <Close sx={{ fontSize: 15 }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

const RuleGroup = ({
  group,
  path,
  columnsOperator,
  onChange,
  onDelete,
  isRoot,
  depth = 0,
  sx = {},
}) => {
  const handleCombinatorChange = (newVal) => {
    onChange(path, { ...group, combinator: newVal });
  };

  const handleNotToggle = () => {
    onChange(path, { ...group, not: !group.not });
  };

  const handleAddRule = () => {
    onChange(path, { ...group, rules: [...group.rules, createRule()] });
  };

  const handleAddGroup = () => {
    onChange(path, { ...group, rules: [...group.rules, createGroup()] });
  };

  const handleRuleChange = (index, field, value) => {
    const newRules = group.rules.map((r, i) => {
      if (i !== index) return r;
      const updated = { ...r, [field]: value };
      if (field === "operator" && isNullOperator(value)) {
        updated.value = "";
      }
      return updated;
    });
    onChange(path, { ...group, rules: newRules });
  };

  const handleDeleteRule = (index) => {
    const newRules = group.rules.filter((_, i) => i !== index);
    onChange(path, { ...group, rules: newRules });
  };

  const handleSubGroupChange = (subPath, updatedGroup) => {
    const index = subPath[subPath.length - 1];
    const newRules = group.rules.map((r, i) =>
      i === index ? updatedGroup : r,
    );
    onChange(path, { ...group, rules: newRules });
  };

  const handleDeleteSubGroup = (index) => {
    const newRules = group.rules.filter((_, i) => i !== index);
    onChange(path, { ...group, rules: newRules });
  };

  return (
    <Box
      role="group"
      aria-label={`${group.not ? "NOT " : ""}${group.combinator} group`}
      sx={{
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "3px solid",
        borderLeftColor: group.not
          ? "error.main"
          : depth > 0
            ? "primary.light"
            : ACCENT,
        borderRadius: "6px",
        bgcolor: "background.paper",
        mb: depth > 0 ? 1 : 0,
      }}
    >
      {/* Group header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
          px: 1.25,
          py: 1,
        }}
      >
        <FormControlLabel
          sx={{ m: 0, gap: 0.5 }}
          control={
            <Switch
              size="small"
              color="error"
              checked={group.not}
              onChange={handleNotToggle}
            />
          }
          label="NOT"
          slotProps={{
            typography: {
              sx: {
                fontSize: 12.5,
                letterSpacing: ".04em",
                fontWeight: group.not ? 700 : 500,
                color: group.not ? "error.main" : "text.secondary",
              },
            },
          }}
        />

        <JoinToggle
          value={group.combinator}
          onChange={handleCombinatorChange}
        />

        <Box sx={{ flex: 1 }} />

        <Button
          size="small"
          startIcon={<Add sx={{ fontSize: 15 }} />}
          onClick={handleAddRule}
          sx={{ textTransform: "none", fontSize: 12.5, minWidth: 0 }}
        >
          Condition
        </Button>
        <Button
          size="small"
          startIcon={<CreateNewFolderOutlined sx={{ fontSize: 15 }} />}
          onClick={handleAddGroup}
          sx={{ textTransform: "none", fontSize: 12.5, minWidth: 0 }}
        >
          Group
        </Button>
        {!isRoot && (
          <Tooltip title="Remove group">
            <IconButton
              onClick={() => onDelete()}
              size="small"
              aria-label="Remove group"
            >
              <DeleteOutline sx={{ fontSize: 16 }} />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {/* Rules and sub-groups */}
      <Box sx={{ px: 1.25, pb: 1.25 }}>
        {group.rules.map((item, index) =>
          item.type === "group" ? (
            <RuleGroup
              key={index}
              group={item}
              path={[...path, index]}
              columnsOperator={columnsOperator}
              onChange={handleSubGroupChange}
              onDelete={() => handleDeleteSubGroup(index)}
              isRoot={false}
              depth={depth + 1}
              sx={sx}
            />
          ) : (
            <RuleRow
              key={index}
              rule={item}
              index={index}
              columnsOperator={columnsOperator}
              onChange={handleRuleChange}
              onDelete={handleDeleteRule}
              sx={sx}
            />
          ),
        )}
      </Box>
    </Box>
  );
};

const QueryForm = ({
  columnsOperator,
  handleApplyFilters,
  onCancel,
  onGroupChange,
  applyRef,
  defaultOperators,
  groupTree: groupTreeProp,
  sx = {},
}) => {
  const {
    root: rootSx,
    actions: actionsSx,
    applyButton: applyButtonSx,
    cancelButton: cancelButtonSx,
    ...restSx
  } = sx;

  const [rootGroup, setRootGroup] = useState(() =>
    groupTreeProp && groupTreeProp.type === "group"
      ? groupTreeProp
      : createGroup("AND"),
  );

  useEffect(() => {
    if (groupTreeProp && groupTreeProp.type === "group") {
      setRootGroup(groupTreeProp);
    }
  }, [groupTreeProp]);

  useEffect(() => {
    if (applyRef) {
      applyRef.current = () => handleApplyFilters(rootGroup);
    }
  });

  const handleGroupChange = (_path, updatedGroup) => {
    setRootGroup(updatedGroup);
    onGroupChange?.(updatedGroup);
  };

  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        ...rootSx,
      }}
    >
      <RuleGroup
        group={rootGroup}
        path={[]}
        columnsOperator={columnsOperator}
        onChange={handleGroupChange}
        onDelete={() => {}}
        isRoot={true}
        depth={0}
        sx={restSx}
      />
    </Box>
  );
};

export default QueryForm;
