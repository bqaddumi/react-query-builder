import React, { useState } from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import QueryBuilder from "../../src/index.jsx";

const columnsOperator = {
  Trademark: {
    operators: ["=", "!=", "contains", "exclude"],
  },
  Cylinders: {
    operators: ["=", "!=", "<", "<=", ">", ">="],
  },
  Doors: {
    operators: ["=", "!=", "<", "<=", ">", ">="],
  },
  Year: {
    operators: ["=", "!=", "<", "<=", ">", ">="],
  },
  Price: {
    operators: ["=", "!=", "<", "<=", ">", ">="],
  },
};

const relatedOperators = [
  "=",
  "!=",
  "contains",
  "exclude",
  "<",
  "<=",
  ">",
  ">=",
];

const defaultOperators = ["AND", "OR"];

export default function App() {
  const [result, setResult] = useState(null);

  const handleApply = (groupTree) => {
    console.log("Query tree:", groupTree);
    setResult(groupTree);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Query Builder Example
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <QueryBuilder
          columnsOperator={columnsOperator}
          defaultOperators={defaultOperators}
          relatedOperators={relatedOperators}
          handleApply={handleApply}
          placeholder="Type a query... e.g. Trademark = Audi AND Cylinders > 4"
          sx={{
            root: { height: "52px" },
            textBoxContainer: { height: "52px" },
            textBox: {
              tokenColors: {
                value: "#212121",
              },
              input: { height: "52px" },
            },
            popover: {
              "& .MuiPopover-paper": {
                width: { xs: "calc(100vw - 32px)", sm: 520 },
                maxWidth: "calc(100vw - 32px)",
              },
            },
            popoverContent: {
              "& .MuiInputBase-input, & .MuiSelect-select": {
                py: "4px",
                minHeight: "unset",
                fontSize: "12px",
              },
              "& .MuiButton-root": {
                textTransform: "none",
                fontSize: "12px",
              },
            },
          }}
        />
      </Paper>

      {result && (
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Query Result (JSON):
          </Typography>
          <Box
            component="pre"
            sx={{
              bgcolor: "grey.100",
              p: 2,
              borderRadius: 1,
              overflow: "auto",
              fontSize: "0.85rem",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </Box>
        </Paper>
      )}
    </Container>
  );
}
