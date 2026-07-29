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
  ToggleButton,
  ToggleButtonGroup,
  Radio,
} from "@mui/material";
import { Add, Close } from "@mui/icons-material";

const fieldSx = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0,
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
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: 1, sm: 1.5 },
        alignItems: { xs: "stretch", sm: "center" },
        py: 0.5,
      }}
    >
      <Select
        size="small"
        value={rule.column}
        onChange={(e) => onChange(index, "column", e.target.value)}
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
        value={rule.operator}
        onChange={(e) => onChange(index, "operator", e.target.value)}
        displayEmpty
        disabled={!rule.column}
        fullWidth
        sx={{ ...fieldSx, ...operatorSelectSx }}
      >
        <MenuItem value="" disabled>
          Select Operator
        </MenuItem>
        {rule.column &&
          columnsOperator[rule.column]?.operators.map((operator) => (
            <MenuItem key={operator} value={operator}>
              {operator}
            </MenuItem>
          ))}
      </Select>

      <TextField
        size="small"
        value={rule.value}
        onChange={(e) => onChange(index, "value", e.target.value)}
        placeholder="Enter value"
        fullWidth
        sx={{ ...fieldSx, ...valueInputSx }}
      />

      <Tooltip title="Delete Rule">
        <IconButton
          onClick={() => onDelete(index)}
          color="error"
          size="small"
          sx={{
            alignSelf: { xs: "flex-end", sm: "center" },
            flex: { sm: "0 0 auto" },
            ...deleteButtonSx,
          }}
        >
          <Close fontSize="small" />
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
  sx = {},
}) => {
  const handleCombinatorChange = (_, newVal) => {
    if (newVal !== null) {
      onChange(path, { ...group, combinator: newVal });
    }
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
    const newRules = group.rules.map((r, i) =>
      i === index ? { ...r, [field]: value } : r,
    );
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
      sx={{
        border: isRoot ? "none" : "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        p: isRoot ? 0 : 1.5,
        ml: isRoot ? 0 : 2,
        mb: 1,
        bgcolor: isRoot ? "transparent" : "action.hover",
      }}
    >
      {/* Group header: NOT toggle + AND/OR combinator + add buttons */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1.5,
          flexWrap: "wrap",
        }}
      >
        <Radio
          checked={group.not}
          onClick={handleNotToggle}
          size="small"
          sx={{ p: 0.5 }}
        />
        <Typography variant="body2" sx={{ fontWeight: 500, mr: 0.5 }}>
          NOT
        </Typography>

        <ToggleButtonGroup
          value={group.combinator}
          exclusive
          onChange={handleCombinatorChange}
          size="small"
          sx={{ height: 28 }}
        >
          <ToggleButton
            value="AND"
            sx={{
              px: 1.5,
              py: 0,
              fontSize: "0.75rem",
              fontWeight: 600,
              "&.Mui-selected": {
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "&:hover": { bgcolor: "primary.dark" },
              },
            }}
          >
            AND
          </ToggleButton>
          <ToggleButton
            value="OR"
            sx={{
              px: 1.5,
              py: 0,
              fontSize: "0.75rem",
              fontWeight: 600,
              "&.Mui-selected": {
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "&:hover": { bgcolor: "primary.dark" },
              },
            }}
          >
            OR
          </ToggleButton>
        </ToggleButtonGroup>

        <Box sx={{ flex: 1 }} />

        <Tooltip title="Add Rule">
          <IconButton onClick={handleAddRule} size="small" color="primary">
            <Add fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Group">
          <IconButton
            onClick={handleAddGroup}
            size="small"
            color="primary"
            sx={{
              border: "1px solid",
              borderColor: "primary.main",
              borderRadius: "50%",
              width: 28,
              height: 28,
            }}
          >
            <Add fontSize="small" />
          </IconButton>
        </Tooltip>
        {!isRoot && (
          <Tooltip title="Delete Group">
            <IconButton onClick={() => onDelete()} color="error" size="small">
              <Close fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {/* Rules and sub-groups */}
      <Stack spacing={1}>
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
      </Stack>
    </Box>
  );
};

const QueryForm = ({
  columnsOperator,
  handleApplyFilters,
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

  const handleGroupChange = (_path, updatedGroup) => {
    setRootGroup(updatedGroup);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: 1, sm: 2 },
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
        sx={restSx}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          mt: 2.5,
          ...actionsSx,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleApplyFilters(rootGroup)}
          sx={applyButtonSx}
        >
          Search
        </Button>
        <Button variant="outlined" sx={cancelButtonSx}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default QueryForm;
