---
id: rosie-ast-python-import
title: Import AST Python Object
sidebar_label: Import
description: The Import object in the Python AST
keywords:
  - rosie
  - ast
  - function call
---

The `Import` object matches a Python import.

The `astType` value for this node is `importstatement`.

## Code Pattern

This object catches the following code pattern

```python
import module
```

## Usage

```javascript
const node = ... <import data> ...


// detect if the package `foobar` is used
if(node.packages) {
    node.packages.forEach(p => {
      if(p.name && p.name.value && p.name.value === "foobar") {
          // do something
      }
    });
  }
```

## Attributes

- `packages` (array of `ImportStatementPackage`): list of imported packages
