---
id: rosie-ast-python-ifcondition
title: If Condition AST Python Object
sidebar_label: If Condition
description: The If Condition object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `IfCondition` object matches a Python function, module or object call.

The `astType` value for this node is `ifstatement`.

## Code Pattern

This AST element captures the following code.

```python
if condition:
  ... <statements> ...
elif ...:
  ...
else:
  ... <elseStatement> ...
```

## Attributes

- `condition` (type `PythonComparison`): comparison in the `if`
- `statements` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the statement for the `if` part
- `elifStatements` (array of `PythonElifStatement`): all elif statements
- `elseStatement` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): the code of the else statements
