---
id: rosie-ast-common-forstatement
title: ForStatement AST Common Object
sidebar_label: ForStatement
description: The ForStatement object in the Common AST
keywords:
  - rosie
  - ast
  - for statement
---

The `ForStatement` is a common AST Object that models an `for` condition.

It maps a traditional `for` statement with three parts:

- initialization
- condition/test
- update

## Attributes

- `init` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the initialization part of the `for` condition
- `test` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the test part of the `for` condition
- `update` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the update part of the `for` condition

## Example

Take the following code

```javascript
for (var i = 0; i < 1; i = i + 1) {}
```

This is how the different parts will map:

- `var i = 0` is the initialization
- `i < 1` is the test
- `i = i + 1` is the update
