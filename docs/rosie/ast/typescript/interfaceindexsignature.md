---
id: rosie-ast-typescript-interface-index-signature
title: Interface Index Signature AST TypeScript Object
sidebar_label: Interface Index Signature
description: The TypeScriptInterfaceIndexSignature object in the TypeScript AST
keywords:
  - rosie
  - ast
  - type
  - typescript
---

The `TypeScriptInterfaceIndexSignature` object matches a index signature in [an interface](/docs/rosie/ast/typescript/rosie-ast-typescript-interface).

The `astType` value for this node is `interfaceproperty`.

## Code Pattern

This object catches `[key: string]: string;` in the following code pattern:

```typescript
interface StringByString {
  [key: string]: string;
}
```

## Attributes

- `keyName` ([`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement), but in the majority of cases, is an [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): left side of the operation
- `value` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the type of the key (number or string)
- `key` ([`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the underlying type
