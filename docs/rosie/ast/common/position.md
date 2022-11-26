---
id: rosie-ast-common-position
title: Position AST Common Object
sidebar_label: Position
description: The Position object in the AST
keywords:
  - rosie
  - ast
  - function call
---

The `Position` object represent a position in the AST.

:::info

The `Position` object is used by the [AstElement](/docs/rosie/ast/common/astelement.md).
It is used by the `start` end `end` attribute for all AST objects.

:::

## Attributes

- `line` (type `number`): the line of the position
- `col` (type `number`): the column of the position
