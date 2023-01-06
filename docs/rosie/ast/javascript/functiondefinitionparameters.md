---
id: rosie-ast-javascript-functiondefinitionparameters
title: Function Definition Parameters AST JavaScript Object
sidebar_label: Function Definition Parameters
description: The FunctionDefinitionParameters object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function definition parameters
---

The `FunctionDefinitionParameters` object matches a JavaScript function parameters (all of them).

The `astType` value for this node is `functiondefinitionparameters`.

## Code Pattern

This object captures the following code block:

```javascript
def my_function(arg1 = default_value, arg2 = other_value):
  ...
```

In this code block `FunctionDefinitionParameters` captures `(arg1 = default_value, arg2 = other_value)`.

## Attributes

- `values` (type array of [`FunctionDefinitionParameter`](/docs/rosie/ast/javascript/rosie-ast-javascript-functiondefinitionparameter)): list of all parameters
