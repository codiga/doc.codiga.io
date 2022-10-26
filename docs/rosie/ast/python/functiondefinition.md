---
id: rosie-ast-python-functiondefinition
title: Function Definition AST Python Object
sidebar_label: Function Definition
description: The FunctionDefinition object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `FunctionDefinition` object matches a Python function declaration.

## Code Pattern

This object captures the following code block.

```python
def my_function(arg1 = default_value, arg2 = other_value):
  ...
```

## Attributes

- `isAsync` (type `bool`): is the function async
- `decorators` (list of `PythonDecorator`): list of decorators
- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the function
- `returnType` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): return type of the function
- `parameters` (type `FunctionDefinitionParameters): list of parameters for the function

## Examples of rules

- [python-security/no-empty-array-as-parameter](https://app.codiga.io/hub/ruleset/python-security/no-empty-array-as-parameter)
