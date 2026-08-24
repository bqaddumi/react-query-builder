import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  IconButton,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
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
  const [mode, setMode] = useState("light");

  const theme = useMemo(
    () => createTheme({ palette: { mode } }),
    [mode],
  );

  const handleApply = (groupTree) => {
    console.log("Query tree:", groupTree);
    setResult(groupTree);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Typography variant="h4" flex={1}>
            Query Builder Example
          </Typography>
          <IconButton
            onClick={() => setMode((m) => (m === "light" ? "dark" : "light"))}
            color="inherit"
          >
            {mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>

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
              body: {
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
    </ThemeProvider>
  );
}
