---
id: rosie-ast-javascript-functiondefinition
title: Function Definition AST JavaScript Object
sidebar_label: Function Definition
description: The FunctionDefinition object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionDefinition` object matches a JavaScript function declaration.

The `astType` value for this node is `functiondefinition`.

## Code Pattern

This object captures the following code block.

```javascript
def my_function(arg1 = default_value, arg2 = other_value):
  ...
```

## Attributes

- `isAsync` (type `boolean`): if this is an async function
- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the function
- `returnType` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): return type of the function
- `parameters` (type [`FunctionDefinitionParameters`](/docs/rosie/ast/javascript/rosie-ast-javascript-functiondefinitionparameters)): list of parameters for the function
