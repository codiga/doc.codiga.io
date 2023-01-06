---
id: rosie-ast-javascript-variabledeclaration
title: VariableDeclaration AST JavaScript Object
sidebar_label: VariableDeclaration
description: The VariableDeclaration object in the JavaScript AST
keywords:
  - rosie
  - ast
  - variable declaration
---

The `VariableDeclaration` object matches a JavaScript import.

The `astType` value for this node is `variabledeclaration`.

## Code Pattern

This object catches the following code patterns:

```typescript
const foo = 42; // javascript
const foo: number = 42; // typescript only
```

## Usage

The following code checks if a variable declaration uses the `any` type. This is useful for TypeScript.

```javascript
function visit(node) {
  if (
    node &&
    node.type &&
    node.type.astType === "string" &&
    node.type.value === "any"
  ) {
    const error = buildError(
      node.type.start.line,
      node.type.start.col,
      node.type.end.line,
      node.type.end.col,
      "do not use any type",
      "CRITICAL",
      "SAFETY"
    );
    addError(error);
  }
}
```

## Attributes

- `modifier` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the modifier (`let`, `const`, `var`)
- `name` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the name of the variable
- `type` **TypeScript only** ([`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement), it can be different elements, from a string to more complex objects): the type of the variable. Can be a [`Type`](/docs/rosie/ast/typescript/rosie-ast-typescript-type), a [`TypeOperation`](/docs/rosie/ast/typescript/rosie-ast-typescript-typeoperation) or any other node type.
- `value` (array of [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the value of the variable
