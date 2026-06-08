# QueryBuilder Component

## Overview

The `QueryBuilder` component helps users build complex search queries using an intuitive UI. It allows selecting columns, operators, and values, and combines them with logical operators like `AND` or `OR`.

---

## Features

- **Interactive Query Builder**: Create queries by selecting columns, operators, and values.
- **Popover Interface**: Advanced filters are managed in a simple popover UI.
- **Customizable**: Define columns and their valid operators.
- **Fully Styleable**: Every visual element — including the advanced-filter form, the help modal, validation tooltips, and the syntax-highlight overlay — can be styled via the `sx` slot map.
- **Callback Support**: Trigger a function when the query is applied.

---

## Installation

Ensure you have Material-UI installed alongside the package:

```bash
# with pnpm
pnpm add query-builder-react @mui/material @mui/icons-material @emotion/react @emotion/styled

# or with npm
npm install query-builder-react @mui/material @mui/icons-material @emotion/react @emotion/styled

# or with yarn
yarn add query-builder-react @mui/material @mui/icons-material @emotion/react @emotion/styled
```

---

## Usage

#### Example:

```js
import React from "react";
import QueryBuilder from "query-builder-react";

const columnsOperator = {
  name: { operators: ["contains", "exclude", "==", "!="] },
  id: { operators: ["contains", "exclude", "==", "!="] },
  duration: { operators: ["<", "<=", ">", ">=", "==", "!="] },
  created_at: { operators: ["before", "after", "exact"] },
};

export default function App() {
  const handleApply = (queries) => {
    console.log("Generated Queries:", queries);
  };
  return (
    <QueryBuilder
      columnsOperator={columnsOperator}
      defaultOperators={["AND", "OR"]}
      relatedOperators={[
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
      ]}
      placeholder='e.g. name contains "John" AND duration > 30'
      handleApply={handleApply}
    />
  );
}
```

---

## Props

| **Prop**           | **Type**   | **Default** | **Description**                                              |
| ------------------ | ---------- | ----------- | ------------------------------------------------------------ |
| `columnsOperator`  | `object`   | `{}`        | Defines columns and their valid operators.                   |
| `defaultOperators` | `string[]` | `[]`        | Logical operators for combining queries (e.g., `AND`, `OR`). |
| `relatedOperators` | `string[]` | `[]`        | List of valid operators for the query builder.               |
| `handleApply`      | `function` | `undefined` | Callback triggered with the generated query when applied.    |
| `placeholder`      | `string`   | `""`        | Placeholder text shown inside the query text box when empty. Forwarded to the inner `QueryTextBox`. |
| `sx`               | `object`   | `{}`        | Style overrides for individual slots of the component. See [Custom Styling](#custom-styling). |

---

## Custom Styling

The `QueryBuilder` component is fully styleable from the outside through the `sx` prop. Instead of accepting a single style object, `sx` is a **slot map**: each key targets a specific part of the rendered tree, and its value is any valid MUI [`sx`](https://mui.com/system/getting-started/the-sx-prop/) value (object, function, or array).

### QueryBuilder Slots

| **Slot**            | **Targets**                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `root`              | The outer wrapper `Box` of the entire component.                                  |
| `textBoxContainer`  | The `Box` wrapping the `QueryTextBox` and the tune button.                        |
| `textBox`           | A nested slot map forwarded to `QueryTextBox`. See [Text Box Slots](#text-box-slots). |
| `iconButton`        | The tune (settings) `IconButton`.                                                 |
| `popover`           | The advanced-filters `Popover` (wrapper).                                         |
| `popoverPaper`      | The `Paper` element inside the `Popover`. Override responsive width / height caps here. |
| `popoverContent`    | The inner `Box` inside the popover.                                               |
| `title`             | The "Query Builder" title `Typography`.                                           |
| `queryForm`         | A nested slot map forwarded to `QueryForm`. See [Query Form Slots](#query-form-slots). |

> All slots are optional. Any slot you don't provide simply falls back to the component's default styling.

#### Text Box Slots

The free-text query builder (`QueryTextBox`) exposes its own slot map, which you can drive either through `sx.textBox` from `QueryBuilder` or directly via the `sx` prop when using `QueryTextBox` standalone.

| **Slot**            | **Targets**                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `root`              | The outer wrapper `Box` of `QueryTextBox`.                           |
| `inputRow`          | The `Box` wrapping the `OutlinedInput` and the Apply `Button`.       |
| `inputWrapper`      | The relative-positioned wrapper that holds the highlight overlay + input. |
| `highlightOverlay`  | The transparent `Box` that paints colored tokens behind the input.   |
| `input`             | The `OutlinedInput` field.                                           |
| `adornmentBox`      | The flex `Box` inside the input's end adornment (holds help icon, custom adornment, Apply button). |
| `helpButton`        | The help (?) `IconButton`.                                           |
| `helpTooltip`       | The `Tooltip` wrapping the help icon.                                |
| `applyButton`       | The Apply `Button`.                                                  |
| `errorTooltip`      | The validation-error `Tooltip` shown for invalid queries. Override `bgcolor`, `color`, etc. |
| `hintTooltip`       | The hint `Tooltip` shown for an empty input.                         |
| `popper`            | The suggestions `Popper`.                                            |
| `suggestionsBox`    | The `Box` rendered inside the popper (border / background wrapper).  |
| `suggestionsList`   | The `List` of suggestions.                                           |
| `suggestionItem`    | Each `ListItemButton` inside the suggestions list.                   |
| `suggestionText`    | The `Typography` displaying each suggestion's text.                  |
| `tokenColors`       | Color overrides for syntax-highlighted tokens. See [Token Highlighting](#token-highlighting). |
| `tokenFontWeights`  | Font-weight overrides per token type. See [Token Font Weights](#token-font-weights). |
| `helpModal`         | A nested slot map forwarded to the help modal. See [Help Modal Slots](#help-modal-slots). |

##### Token Highlighting

As the user types, `QueryTextBox` parses the input into typed tokens and paints each one in a distinct color through a transparent overlay. You can override any/all of the default colors via `sx.textBox.tokenColors` (or `sx.tokenColors` when using `QueryTextBox` directly). Any CSS color value is accepted (`"red"`, `"#1976d2"`, `"rgb(...)"`, theme colors via callbacks, etc.).

| **Token Type**     | **Default Color** | **When It's Used**                                            |
| ------------------ | ----------------- | ------------------------------------------------------------- |
| `column`           | `#1976d2` (blue)   | Token at a column position that matches one of the configured columns. |
| `customColumn`     | `#0288d1` (light blue) | Token at a column position that is not in the configured columns. |
| `operator`         | `#d32f2f` (red)    | Token at the operator slot that matches a known related operator. |
| `unknownOperator`  | `#9e9e9e` (grey)   | Token at the operator slot that does not match any known operator (yet). |
| `logical`          | `#7b1fa2` (purple) | The separator between queries — `AND` / `OR`.                |
| `value`            | `inherit`          | The right-hand side value token.                             |

```jsx
<QueryBuilder
  columnsOperator={columnsOperator}
  defaultOperators={["AND", "OR"]}
  handleApply={handleApply}
  sx={{
    textBox: {
      tokenColors: {
        column: "#0d47a1",
        customColumn: "#00897b",
        operator: "#c2185b",
        logical: "#6a1b9a",
        value: "#212121",
      },
    },
  }}
/>
```

##### Token Font Weights

You can also tweak the per-token font weight via `sx.textBox.tokenFontWeights` (or `sx.tokenFontWeights` on `QueryTextBox` directly). Accepts any valid CSS `font-weight` value (number or keyword).

| **Token Type**     | **Default Weight** |
| ------------------ | ------------------ |
| `column`           | `400`              |
| `customColumn`     | `400`              |
| `operator`         | `600`              |
| `unknownOperator`  | `400`              |
| `logical`          | `600`              |
| `value`            | `400`              |

```jsx
<QueryBuilder
  sx={{
    textBox: {
      tokenFontWeights: {
        column: 700,
        operator: 500,
        logical: 800,
      },
    },
  }}
/>
```

#### Query Form Slots

The advanced-filter form (`QueryForm`) inside the popover exposes its own slot map via `sx.queryForm`.

| **Slot**                 | **Targets**                                                                       |
| ------------------------ | --------------------------------------------------------------------------------- |
| `root`                   | The outer wrapper `Box` of the form.                                              |
| `header`                 | The "Combine queries with: [AND/OR]" header `Box`.                                |
| `headerLabel`            | The "Combine queries with:" label `Typography`.                                   |
| `globalOperatorSelect`   | The global AND/OR `Select`.                                                       |
| `rowsStack`              | The `Stack` that holds the query rows.                                            |
| `row`                    | Each individual query row `Box` (column / operator / value / delete).             |
| `columnSelect`           | The column `Select` in each row.                                                  |
| `operatorSelect`         | The operator `Select` in each row.                                                |
| `valueInput`             | The value `TextField` in each row.                                                |
| `deleteButton`           | The delete (trash) `IconButton` for each row.                                     |
| `deleteTooltip`          | The `Tooltip` wrapping the delete button.                                         |
| `actions`                | The action-buttons row `Box` (holds "Add Query" + "Apply Filters").               |
| `addButton`              | The "Add Query" `Button`.                                                         |
| `applyButton`            | The "Apply Filters" `Button`.                                                     |

#### Help Modal Slots

The query-syntax help modal (opened from the `?` icon inside `QueryTextBox`) exposes its own slot map via `sx.textBox.helpModal` (or `sx.helpModal` when using `QueryTextBox` directly).

| **Slot**            | **Targets**                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `dialog`            | The `Dialog` itself.                                                 |
| `title`             | The `DialogTitle` ("How to Use the Query Search").                   |
| `closeButton`       | The close (×) `IconButton` in the title.                             |
| `content`           | The `DialogContent`.                                                 |
| `sectionTitle`      | Each `<h6>` section heading inside the content.                      |
| `body`              | Each paragraph `Typography` inside the content.                      |
| `codeBlock`         | The grey-background code blocks (e.g. `column operator value`).      |
| `exampleBlock`      | Each individual example code block.                                  |
| `exampleLabel`      | The uppercase caption above each example.                            |
| `list`              | Each `<ul>` inside the content (tips, syntax bullets, etc.).         |
| `listItem`          | Each `<li>` `Typography`.                                            |
| `chip`              | Each inline `Chip` (e.g. `name`, `==`, `"John Doe"`).                |
| `divider`           | Each section `Divider`.                                              |
| `warningText`       | The red "Cannot mix AND and OR" warning paragraph.                   |
| `colorLegendItem`   | Each list item in the syntax-highlighting color legend.              |
| `colorSwatch`       | The colored circle (`Box`) next to each legend item.                 |
| `actions`           | The `DialogActions` row.                                             |
| `gotItButton`       | The "Got it" `Button`.                                               |

### Basic Example

```jsx
<QueryBuilder
  columnsOperator={columnsOperator}
  defaultOperators={["AND", "OR"]}
  relatedOperators={["contains", "exclude"]}
  handleApply={handleApply}
  sx={{
    root: { width: "100%" },
    textBoxContainer: { marginBottom: "8px" },
    iconButton: { color: "primary.main" },
    popover: { padding: "24px" },
    popoverPaper: { borderRadius: 3, boxShadow: 6 },
    popoverContent: { minWidth: "400px" },
    title: { color: "secondary.main", fontWeight: 700 },
    textBox: {
      input: { backgroundColor: "background.default" },
      applyButton: { textTransform: "none" },
      suggestionsBox: { width: "360px" },
      suggestionItem: {
        "&:hover": { backgroundColor: "action.hover" },
      },
    },
    queryForm: {
      header: { mb: 3 },
      globalOperatorSelect: { minWidth: 160 },
      columnSelect: { bgcolor: "background.default" },
      applyButton: { textTransform: "none", bgcolor: "success.main" },
    },
  }}
/>
```

### Theme-Aware Example

Because each slot accepts a normal MUI `sx` value, you can use theme tokens, breakpoints, and callbacks just like in any other MUI component:

```jsx
<QueryBuilder
  columnsOperator={columnsOperator}
  defaultOperators={["AND", "OR"]}
  handleApply={handleApply}
  sx={{
    root: {
      p: 2,
      borderRadius: 2,
      bgcolor: "background.paper",
      boxShadow: 1,
    },
    textBoxContainer: {
      gap: 1,
      mb: { xs: 1, md: 2 },
    },
    iconButton: (theme) => ({
      color: theme.palette.primary.main,
      "&:hover": { color: theme.palette.primary.dark },
    }),
    popover: { mt: 1 },
    popoverPaper: {
      // Override the default responsive width caps
      width: { xs: "calc(100vw - 32px)", sm: 600, md: 800 },
    },
    popoverContent: { minWidth: 480 },
    title: { mb: 1, color: "text.secondary" },
    textBox: {
      input: (theme) => ({
        borderRadius: 1,
        "& fieldset": { borderColor: theme.palette.divider },
      }),
      applyButton: { ml: 1 },
      popper: { zIndex: 1500 },
      suggestionsBox: {
        borderRadius: 1,
        boxShadow: 3,
      },
      errorTooltip: { bgcolor: "warning.main", color: "warning.contrastText" },
      hintTooltip: { bgcolor: "primary.dark" },
      helpModal: {
        dialog: { "& .MuiDialog-paper": { borderRadius: 3 } },
        sectionTitle: { color: "primary.main" },
        codeBlock: { bgcolor: "grey.900", color: "common.white" },
        gotItButton: { textTransform: "none" },
      },
    },
    queryForm: {
      root: { p: 3 },
      row: (theme) => ({
        bgcolor: theme.palette.action.hover,
        borderRadius: 1,
        p: 1,
      }),
      deleteButton: { "&:hover": { bgcolor: "error.light" } },
    },
  }}
/>
```

---

## How It Works

Query Text Box: Shows the current query as it's built.
Popover (Tune Icon): Opens an interface for detailed filter setup.
Apply: The handleApply function is triggered with the final query when users apply their filters.

---

## Notes

**Required Props**: `columnsOperator` and `handleApply` are essential for the component to work effectively.
**Custom Operators**: Add or modify operators in `columnsOperator` or `relatedOperators` to suit your needs.

---

## License

MIT
