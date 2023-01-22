---
id: rosie-ast-javascript-importedname
title: Imported name AST JavaScript Object
sidebar_label: ImportedName
description: The Imported name object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `JavaScriptImportedName` object matches a JavaScript imported name.

The `astType` value for this node is `importedname`.

## Code Pattern

This object catches `export1`, `export2 as alias2` in the following code pattern:

```javascript
import { export1, export2 as alias2 /* … */ } from "module-name";
```

## Attributes

- `name` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): value of the name
- `as` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): alias if defined
