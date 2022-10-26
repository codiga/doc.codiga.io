---
id: rosie-python-ast
title: AST Rules for Python
sidebar_label: Writing Python AST Rule
description: Write rules that manipulate the Python AST
keywords:
  - sast
  - static code analysis rules
  - python ast
  - ast
---

:::info
If you are starting with Rosie and want to start writing rules, follow the [Python AST rule tutorial](/docs/rosie/tutorials/analysis-rule-tutorial-python-ast) first.
:::

## Python AST Rules

An AST rule is a rule that browses the AST and reports an error (along with a potential fix).

Every single node in the AST inherits the [`ASTElement type`](/docs/rosie/ast/common/rosie-ast-common-astelement) has the following properties:

- `astType` (type string): the type of the element. The value depends in what element you are on.
- `start` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST
- `end` (type [`Position`](/docs/rosie/ast/common/rosie-ast-common-position)): the starting position of the element in the AST

## The visit function

The rule code has a `visit` function that is the entrypoint of your rule.

```javascript
function visit(node, filename, code) {
  // code
}
```

It has the following parameter:

- the `node` you rule matches on. The exact type of this argument depends on the element type being checked. All types inherit the `ASTElement` type. As the element checked is set to `FunctionCall`, the `node` for our rule will be a type `FunctionCall`.
- the `filename` where the code is located (a string). If a user edits the file `foo/bar.py` in VS Code, this is the value that will be passed to the function.
- the `code` being checked (a string)

### Value of the `node` parameter

The value of the `node` parameter depends on the element type checked:

- If the element type checked is `Function Call`, the value of `nodeOrPattern` is a [`FunctionCall` object](/docs/rosie/ast/python/rosie-ast-python-functioncall)
- If the element type checked is `If Condition`, the value of `nodeOrPattern` is a [`IfCondition`](/docs/rosie/ast/python/rosie-ast-python-ifcondition)
- If the element type checked is `For Loop`, the value of `nodeOrPattern` is a [`ForStatement` object](/docs/rosie/ast/python/rosie-ast-python-forstmt)
- If the element type checked is `Function Definition`, the value of `nodeOrPattern` is a [`FunctionDefinition` object](/docs/rosie/ast/python/rosie-ast-python-functiondefinition)
- If the element type checked is `Try Block`, the value of `nodeOrPattern` is a [`TryBlock` object](/docs/rosie/ast/python/rosie-ast-python-tryblock)
- If the element type checked is `Import`, the value of `nodeOrPattern` is an [`Import`](/docs/rosie/ast/python/rosie-ast-python-import) or an [`ImportFrom`](/docs/rosie/ast/python/rosie-ast-python-importfrom)
- If the element type checked is `Assignment`, the value of `nodeOrPattern` is a [`Assignment` object](/docs/rosie/ast/python/rosie-ast-python-assignment)

## Examples of Python AST Rules

Browse the [Codiga Hub](https://app.codiga.io/analysis/rulesets) to find interesting rulesets to reuse.
The following rules are available publicly and can be used as a starter. We list the rules by the element checked type.

### Function Call

- [Changing Python format string by f-string](https://app.codiga.io/hub/ruleset/python-best-practices/replace-format-string)
- [Check that requests have a timeout parameter](https://app.codiga.io/hub/ruleset/python-security/requests-timeout)
- [Avoid `shell=True` when using the `subprocess` module](https://app.codiga.io/hub/ruleset/python-security/subprocess-shell-true)

### For loop

- [No range loop with len](https://app.codiga.io/hub/ruleset/python-best-practices/no-range-loop-with-len)

### If condition

- [No if when True](https://app.codiga.io/hub/ruleset/python-best-practices/no-if-true)

### Try Block

- [No silent exception](https://app.codiga.io/hub/ruleset/python-best-practices/no-silent-exception)

### Function Definition

- [No empty array as default parameter](https://app.codiga.io/hub/ruleset/python-security/no-empty-array-as-parameter)
