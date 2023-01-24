---
id: rosie-ast-python-assignment
title: Assignment AST Python Object
sidebar_label: Assignment
description: The Assignment object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `Assignment` object matches a Python assignment.

The `astType` value for this node is `assignment`.

## Code Pattern

This AST element captures the following code.

```python
my_variable = my_value
```

## Attributes

- `left` (any type that inherits [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement))
- `right` (any type that inherits [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement))

:::info

To know what is the type of `left` or `right`, use the `astType` to distinguish.

For example, to check if the left node is a string, just use the following code:

```javascript
if (node.left.astType === "string") {
  ....
}
```

:::
