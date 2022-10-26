---
id: rosie-ast-python-importfromelement
title: ImportFrom AST Python Object
sidebar_label: ImportFromElement
description: The ImportFromElement object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `ImportFromElement` captures the elements from a `from` import statement.

The `astType` value for this node is `fromelement`.

```python

from foo import bar as baz
```

## Code Pattern

The `ImportFromElement` object matches the code `bar as baz` in the following Python import statement.

```python

from foo import bar as baz
```

## Attributes

- `name` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name being imported
- `as` (type [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): renaming of the symbol
