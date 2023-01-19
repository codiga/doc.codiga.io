---
id: rosie-ast-typescript-interface-property
title: Interface Property AST TypeScript Object
sidebar_label: TypeScriptInterfaceProperty
description: The TypeScriptInterfaceProperty object in the TypeScript AST
keywords:
  - rosie
  - ast
  - type
  - typescript
---

The `TypeScriptInterfaceProperty` object matches a property in [an interface](/docs/rosie/ast/typescript/rosie-ast-typescript-interface).

The `astType` value for this node is `typeoperation`.

## Code Pattern

This object catches `label: string;` in the following code pattern:

```typescript
interface LabeledValue {
  label: string;
}
```

The `TypeOperation` captures the element `number | string` or `number & string` in the code above.

## Attributes

- `name` ([`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement), but in the majority of cases, is an [`AstString`](/docs/rosie/ast/common/rosie-ast-common-astelement)): left side of the operation
- `value` ([`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the underlying type
