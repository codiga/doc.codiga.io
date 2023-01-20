---
id: rosie-ast-common-switch
title: AstSwitch AST Object
sidebar_label: Switch
description: The AstSwitch object in the
keywords:
  - rosie
  - ast
---

The `AstSwitch` object matches a switch statement in most languages.

The `astType` value for this node is `switch`.

## Code Pattern

This object catches switch statements in most languages. For example, in JavaScript, it matches the following code:

```jsx
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
```

## Attributes

- `expression` (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): instructions in the try block
- `defaultCase` (type [`SwitchCase`](/docs/rosie/ast/common/rosie-ast-common-switch-case)): instructions in the finally block
- `cases` (type [`SwitchCase`](/docs/rosie/ast/common/rosie-ast-common-switchcase)): catch block with the exception name being caught.
