---
id: rosie-ast-python-importstatementpackage
title: ImportStatementPackage AST Python Object
sidebar_label: ImportStatementPackage
description: The ImportStatementPackage object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `ImportStatementPackage` object matches a Python import.

The `astType` value for this node is `importpackage`.

## Code Pattern

This object catches the parts `package1` or `package2 as asname` in the following code pattern

```python
import package1, package2 as asname
```

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the imported package
- `as` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): if package is renamed, this captures the `as` part of the import. Otherwise, the value is `null`.

## See also

- [Import AST Node](/docs/rosie/ast/python/rosie-ast-python-import)
