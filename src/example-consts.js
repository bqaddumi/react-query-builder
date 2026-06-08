const columnsOperator = {
  name: {
    operators: ["contains", "exclude", "==", "!="],
  },
  id: {
    operators: ["contains", "exclude", "==", "!="],
  },
  duration: {
    operators: ["<", "<=", ">", ">=", "==", "!="],
  },
  created_at: {
    operators: ["before", "after", "exact"],
  },
};

const relatedOperators = [
  "contains",
  "exclude",
  "!=",
  "==",
  "<",
  "<=",
  ">",
  ">=",
  "before",
  "after",
  "exact",
];

const defaultOperators = ["AND", "OR"];

export { columnsOperator, defaultOperators, relatedOperators };
