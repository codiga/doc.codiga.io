---
id: rosie-ast-common-aststring
title: AstString AST Common Object
sidebar_label: AstString
description: The AstString object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `AstString` object represents a string in the AST. It inherits the
[`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement) object.

## Attributes

- `value` (type `string`): the value of the string

## Usage

When you have an ASTString, you can do the following

```javascript
const astString = ...

const s = astString.value;
```
