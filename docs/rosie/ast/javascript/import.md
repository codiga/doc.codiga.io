---
id: rosie-ast-javascript-import
title: Import AST JavaScript Object
sidebar_label: Import
description: The Import object in the JavaScript AST
keywords:
  - rosie
  - ast
  - function call
---

The `Import` object matches a JavaScript import.

The `astType` value for this node is `importstatement`.

## Code Pattern

This object catches the following code patterns:

```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2 /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1 /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

## Usage

The following code checks if `"module-name"` is being used.

```javascript
const node = ... <import data> ...

if (node.pkg.value === "\"module-name\"") {
   ...
}
```

## Attributes

- `pkg` ([`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): name of the package imported
- `importedNames` (array of [`AstString`](/docs/rosie/ast/common/rosie-ast-common-aststring)): array of imported names.
