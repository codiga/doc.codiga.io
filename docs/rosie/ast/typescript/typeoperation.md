---
id: rosie-ast-typescript-typeoperation
title: TypeOperation AST TypeScript Object
sidebar_label: TypeOperation
description: The TypeOperation object in the TypeScript AST
keywords:
  - rosie
  - ast
  - type
  - typescript
---

The `TypeOperation` object matches a TypeScript type (e.g. the identifier of a type).

The `astType` value for this node is `typeoperation`.

## Code Pattern

This object catches the following code patterns:

```typescript
const foo: number | string = ...;
const bar: number & string = ...;
```

The `TypeOperation` captures the element `number | string` or `number & string` in the code above.

## Attributes

- `left` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-astelement)): left side of the operation
- `operand` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the string of the operand (e.g. `|` or `&`)
- `right` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-astelement)): right side of the operation.
