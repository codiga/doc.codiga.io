---
id: rosie-ast-common-astelement
title: AstString AST Common Object
sidebar_label: AstElement
description: The AstString object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `AstElement` object is the core of ALL elements. Every single element.

:::info

Every single AST element in the document inherits the `AstElement` and can access its data

:::

## Attributes

- `start` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST
- `end` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST

## Usage

When you have an AST object, you can do the following

```javascript
const astObject = ...

const startLine = astObject.start.line;
const endCol = astObject.end.col;
```
