---
id: rosie-ast-python-node-context
title: PythonNodeContext AST Python Object
sidebar_label: PythonNodeContext
description: The PythonNodeContext object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `PythonNodeContext` is attached to each AST object for Python via the `context` attribute. It inherits the [`Context`](/docs/rosie/ast/common/rosie-ast-common-context) type.

## Attributes

- `currentFunction` (array or [`FunctionDefinition`](/docs/rosie/ast/python/rosie-ast-python-functiondefinition/)): the current function we are in (`null` if we are not in a function)
- `currentTryBlock` (type [`TryBlock`](/docs/rosie/ast/python/rosie-ast-python-tryblock/)): the current try/block element we are in (`null` if we are not in a try/block)
- `imports` (type [`ImportStatement`](/docs/rosie/ast/python/rosie-ast-python-importstatementpackage/) or [`ImportFrom`](/docs/rosie/ast/python/rosie-ast-python-importfrom)): the list of arguments

## Example of use

```javascript
// Getting the context
const ctx = node.context;

// Getting the imports
const allPackages = ctx.imports
  .filter((i) => i.packages)
  .flatMap((i) => i.packages.map((p) => p.name.str));

// Check if the ssl package is being used
const useSslPackage = allPackages.filter((i) => i === "ssl").length > 0;
```

## Examples of rules

- [python-security/aws-boto3-credentials](https://app.codiga.io/hub/ruleset/python-security/aws-boto3-credentials)
