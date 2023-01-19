---
id: rosie-ast-typescript-interface
title: Interface AST TypeScript Object
sidebar_label: Interface
description: The Interface object in the TypeScript AST
keywords:
  - rosie
  - ast
  - type
  - typescript
---

The `TypeOperation` object matches a TypeScript type (e.g. the identifier of a type).

The `astType` value for this node is `interface`.

## Code Pattern

This object catches the following code pattern:

```typescript
interface LabeledValue {
  label: string;
}
```

## Attributes

- `name` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-astelement)): left side of the operation
- `members` ([`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the members of the interface. The members are using the following types:
  - [`TypeScriptInterfaceIndexSignature`](/docs/rosie/ast/typescript/rosie-ast-typescript-interface-index-signature)
  - [`TypeScriptInterfaceIndexSignature`](/docs/rosie/ast/typescript/rosie-ast-typescript-interface-index-signature)
