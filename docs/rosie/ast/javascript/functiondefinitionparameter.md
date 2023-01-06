---
id: rosie-ast-javascript-functiondefinitionparameter
title: Function Definition Parameter AST JavaScript Object
sidebar_label: Function Definition Parameter
description: The FunctionDefinitionParameter object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function definition parameter
---

The `FunctionDefinitionParameter` object matches a JavaScript function parameter

The `astType` value for this node is `functiondefinitionparameter`.

## Code Pattern

This object captures the following code block:

```javascript
def my_function(arg1 = default_value, arg2 = other_value):
  ...
```

In this code block `FunctionDefinitionParameters` captures `arg1 = default_value` or `arg2 = other_value`.

## Attributes

- `name`: (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the name of the parameter
- `type` **TypeScript Only**: (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the type of the parameter
- `defaultValue`: (type [`AstElement`](/docs/rosie/ast/common/rosie-ast-common-astelement)): the default value of the parameter
