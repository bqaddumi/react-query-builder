import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.jsx", // Entry point for your component
      name: "query-builder-react", // Name of the library
      fileName: (format) => `query-builder.${format}.js`, // Output file names
    },
    rollupOptions: {
      // Externalize React, MUI, and Emotion so the host project's ThemeProvider is used
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@mui/material",
        "@mui/icons-material",
        "@emotion/react",
        "@emotion/styled",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MuiMaterial",
          "@mui/icons-material": "MuiIconsMaterial",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled",
        },
      },
    },
  },
  plugins: [react()],
});
