# QueryBuilder Component

## Overview

The `QueryBuilder` component helps users build complex search queries using an intuitive UI. It supports nested groups with mixed `AND`/`OR` logic, `NOT` negation, and parenthesized sub-expressions — all through both a free-text input and a visual form builder.

---

## Features

- **Nested Group Builder**: Create groups of conditions with independent AND/OR combinators and NOT negation.
- **Mixed AND/OR**: Combine `AND` and `OR` in a single query using parentheses for grouping.
- **Free-Text Input**: Type queries directly with syntax highlighting, autocomplete suggestions, and validation.
- **Visual Form Builder**: Build queries visually via a popover with group/rule management.
- **Bidirectional Sync**: Changes in the text box reflect in the form, and vice versa.
- **Customizable**: Define columns and their valid operators.
- **Theme-Aware**: Token colors resolve from the MUI theme palette — works in both light and dark mode out of the box.
- **Fully Styleable**: Every visual element can be styled via the `sx` slot map.
- **Callback Support**: Trigger a function with the full query tree when applied.

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

#### Basic Example:

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
  const handleApply = (groupTree) => {
    console.log("Query tree:", groupTree);
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
      placeholder='e.g. name contains "John" AND (duration > 30 OR status == active)'
      handleApply={handleApply}
    />
  );
}
```

---

## Query Syntax

The free-text input supports the following syntax:

```
<column> <operator> <value> [AND|OR <column> <operator> <value>]...
```

### Parentheses & Mixed Logic

You can mix `AND` and `OR` using parentheses to control precedence:

```
name contains "John" AND (status == active OR status == pending)
Trademark = Audi AND (Cylinders = 4 OR Doors = 2)
```

Without parentheses, `AND` binds tighter than `OR`:

```
a = 1 OR b = 2 AND c = 3
// is parsed as: a = 1 OR (b = 2 AND c = 3)
```

### NOT Negation

Prefix a group with `NOT` to negate it:

```
NOT (status == inactive OR status == deleted)
```

---

## Query Tree Structure

The `handleApply` callback receives a recursive group tree:

```js
{
  type: "group",
  combinator: "AND",  // "AND" | "OR"
  not: false,         // true if negated
  rules: [
    { type: "rule", column: "Trademark", operator: "=", value: "Audi" },
    {
      type: "group",
      combinator: "OR",
      not: false,
      rules: [
        { type: "rule", column: "Cylinders", operator: "=", value: "4" },
        { type: "rule", column: "Doors", operator: "=", value: "2" },
      ]
    }
  ]
}
```

### Helper Utilities

The package exports helper functions for working with the tree:

```js
import { flattenGroupToQueries, convertGroupToText } from "query-builder-react/helpers";

// Flatten to a simple array of {column, operator, value}
const flat = flattenGroupToQueries(groupTree);

// Serialize back to a human-readable string
const text = convertGroupToText(groupTree);
// → 'Trademark = Audi AND (Cylinders = 4 OR Doors = 2)'
```

---

## Visual Query Builder (Form)

The popover form supports:

- **Groups with NOT / AND / OR**: Each group has a NOT toggle and an AND/OR combinator selector.
- **Nested sub-groups**: Click the circled `+` button to add a sub-group within any group.
- **Add/delete rules**: Use `+` to add rules, `×` to remove them.
- **Search/Cancel**: Apply the built query or dismiss.

Changes made in the form automatically sync to the text input, and vice versa.

---

## Props

| **Prop**           | **Type**   | **Default** | **Description**                                              |
| ------------------ | ---------- | ----------- | ------------------------------------------------------------ |
| `columnsOperator`  | `object`   | `{}`        | Defines columns and their valid operators.                   |
| `defaultOperators` | `string[]` | `[]`        | Logical operators for combining queries (e.g., `AND`, `OR`). |
| `relatedOperators` | `string[]` | `[]`        | List of valid operators for the query builder.               |
| `handleApply`      | `function` | `undefined` | Callback triggered with the group tree when applied.         |
| `placeholder`      | `string`   | `""`        | Placeholder text shown inside the query text box when empty. |
| `sx`               | `object`   | `{}`        | Style overrides for individual slots. See [Custom Styling](#custom-styling). |

---

## Custom Styling

The `QueryBuilder` component is fully styleable from the outside through the `sx` prop. Instead of accepting a single style object, `sx` is a **slot map**: each key targets a specific part of the rendered tree, and its value is any valid MUI [`sx`](https://mui.com/system/getting-started/the-sx-prop/) value.

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

| **Slot**            | **Targets**                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `root`              | The outer wrapper `Box` of `QueryTextBox`.                           |
| `inputRow`          | The `Box` wrapping the `OutlinedInput` and the Apply `Button`.       |
| `inputWrapper`      | The relative-positioned wrapper that holds the highlight overlay + input. |
| `highlightOverlay`  | The transparent `Box` that paints colored tokens behind the input.   |
| `input`             | The `OutlinedInput` field.                                           |
| `adornmentBox`      | The flex `Box` inside the input's end adornment.                     |
| `helpButton`        | The help (?) `IconButton`.                                           |
| `helpTooltip`       | The `Tooltip` wrapping the help icon.                                |
| `applyButton`       | The Apply `Button`.                                                  |
| `errorTooltip`      | The validation-error `Tooltip` shown for invalid queries.            |
| `hintTooltip`       | The hint `Tooltip` shown for an empty input.                         |
| `popper`            | The suggestions `Popper`.                                            |
| `suggestionsBox`    | The `Box` rendered inside the popper.                                |
| `suggestionsList`   | The `List` of suggestions.                                           |
| `suggestionItem`    | Each `ListItemButton` inside the suggestions list.                   |
| `suggestionText`    | The `Typography` displaying each suggestion's text.                  |
| `tokenColors`       | Color overrides for syntax-highlighted tokens. See [Token Highlighting](#token-highlighting). |
| `tokenFontWeights`  | Font-weight overrides per token type. See [Token Font Weights](#token-font-weights). |
| `helpModal`         | A nested slot map forwarded to the help modal. See [Help Modal Slots](#help-modal-slots). |

##### Token Highlighting

As the user types, `QueryTextBox` parses the input into typed tokens and paints each one in a distinct color. Colors default to MUI theme palette tokens, so they adapt to light/dark mode automatically. You can override via `sx.textBox.tokenColors`.

| **Token Type**     | **Default Color**        | **When It's Used**                                            |
| ------------------ | ------------------------ | ------------------------------------------------------------- |
| `column`           | `primary.main`           | Token matching a configured column.                           |
| `customColumn`     | `info.main`              | Token at column position that is not in configured columns.   |
| `operator`         | `error.main`             | Token matching a known operator.                              |
| `unknownOperator`  | `text.disabled`          | Token at operator slot that doesn't match any known operator. |
| `logical`          | `secondary.main`         | Logical connectors — `AND` / `OR` / `NOT`.                   |
| `paren`            | `warning.main`           | Parentheses `(` and `)`.                                      |
| `value`            | `text.primary`           | The right-hand side value token.                              |

```jsx
<QueryBuilder
  sx={{
    textBox: {
      tokenColors: {
        column: "#0d47a1",
        customColumn: "#00897b",
        operator: "#c2185b",
        logical: "#6a1b9a",
        paren: "#e65100",
        value: "#212121",
      },
    },
  }}
/>
```

##### Token Font Weights

| **Token Type**     | **Default Weight** |
| ------------------ | ------------------ |
| `column`           | `400`              |
| `customColumn`     | `400`              |
| `operator`         | `600`              |
| `unknownOperator`  | `400`              |
| `logical`          | `600`              |
| `paren`            | `700`              |
| `value`            | `400`              |

#### Query Form Slots

The visual query builder form inside the popover exposes its own slot map via `sx.queryForm`.

| **Slot**                 | **Targets**                                                    |
| ------------------------ | -------------------------------------------------------------- |
| `root`                   | The outer wrapper `Box` of the form.                           |
| `columnSelect`           | The column `Select` in each rule row.                          |
| `operatorSelect`         | The operator `Select` in each rule row.                        |
| `valueInput`             | The value `TextField` in each rule row.                        |
| `deleteButton`           | The delete `IconButton` for each rule/group.                   |
| `actions`                | The action-buttons row `Box` (Search + Cancel).                |
| `applyButton`            | The "Search" `Button`.                                         |
| `cancelButton`           | The "Cancel" `Button`.                                         |

#### Help Modal Slots

| **Slot**            | **Targets**                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `dialog`            | The `Dialog` itself.                                                 |
| `title`             | The `DialogTitle`.                                                   |
| `closeButton`       | The close (x) `IconButton` in the title.                             |
| `content`           | The `DialogContent`.                                                 |
| `sectionTitle`      | Each section heading inside the content.                             |
| `body`              | Each paragraph `Typography` inside the content.                      |
| `codeBlock`         | The grey-background code blocks.                                     |
| `exampleBlock`      | Each individual example code block.                                  |
| `exampleLabel`      | The uppercase caption above each example.                            |
| `list`              | Each `<ul>` inside the content.                                      |
| `listItem`          | Each `<li>` `Typography`.                                            |
| `chip`              | Each inline `Chip`.                                                  |
| `divider`           | Each section `Divider`.                                              |
| `colorLegendItem`   | Each list item in the syntax-highlighting color legend.              |
| `colorSwatch`       | The colored circle next to each legend item.                         |
| `actions`           | The `DialogActions` row.                                             |
| `gotItButton`       | The "Got it" `Button`.                                               |

### Styling Example

```jsx
<QueryBuilder
  columnsOperator={columnsOperator}
  defaultOperators={["AND", "OR"]}
  relatedOperators={relatedOperators}
  handleApply={handleApply}
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
```

---

## How It Works

1. **Query Text Box**: Type queries directly with real-time syntax highlighting and autocomplete. Supports parentheses for grouping and mixed AND/OR.
2. **Popover (Tune Icon)**: Opens a visual form for building nested rule groups with independent AND/OR combinators and NOT toggles.
3. **Bidirectional Sync**: Applying from the text box updates the form, and applying from the form updates the text box.
4. **Apply**: The `handleApply` callback receives the full group tree structure.

---

## Notes

- **Required Props**: `columnsOperator` and `handleApply` are essential for the component to work effectively.
- **Custom Operators**: Add or modify operators in `columnsOperator` or `relatedOperators` to suit your needs.
- **Theme Support**: Token colors use MUI theme palette tokens by default, so they work correctly in both light and dark mode without additional configuration.

---

## License

MIT
