---
id: rosie-ast-typescript-type
title: Type AST TypeScript Object
sidebar_label: Type
description: The Type object in the TypeScript AST
keywords:
  - rosie
  - ast
  - type
  - typescript
---

The `Type` object matches a TypeScript type (e.g. the identifier of a type).

The `astType` value for this node is `type`.

## Code Pattern

This object catches the following code patterns:

```typescript
const foo: number = 42;
const bar: string = "hello world";
```

The `TypeScriptType` captures the element `number` or `string` in the code above.

## Attributes

- `name` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the type.
