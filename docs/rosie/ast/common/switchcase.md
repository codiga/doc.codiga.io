---
id: rosie-ast-common-switch-case
title: SwitchCase AST Object
sidebar_label: SwitchCase
description: The SwitchCase object in the
keywords:
  - rosie
  - ast
---

The `SwitchCase` object matches a switch case in a [`switch statement`](/docs/rosie/ast/common/rosie-ast-common-switch).

The `astType` value for this node is `switchcase`.

## Code Pattern

This object catches switch case statements in most languages. For example, in JavaScript, it matches the following code:

```jsx

case x:
  // code block
  break;

```

## Attributes

- `condition` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): instructions in the try block
- `content` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): instructions in the finally block
