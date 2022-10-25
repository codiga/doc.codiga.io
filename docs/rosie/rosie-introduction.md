---
id: rosie-introduction
title: Rosie Static Analyzer
sidebar_label: Introduction to Rosie
description: How to add custom rules with Codiga and Rosie
keywords:
  - sast
  - code analysis
  - code analysis rules
  - sast
---

Rosie is the Codiga Static Code Analyzer. Rosie works as an API to provide real-time feedback on your code
within your IDE and also processes your code when you push a new revision on your repository.
It is integrated with every element of the Codiga code analysis platform.

## Custom Rules

Rosie provides the ability to write custom rules. You can experiment new rules on the [Codiga Playground](https://app.codiga.io/hub/playground)
and browse rulesets on the [Codiga Hub](https://app.codiga.io/hub/rulesets).

More importantly, you can write your own rules and share them with your team. Custom rules are written in JavaScript
and can check different types of code.

## Types of Rules

Rosie supports two types of rules:

- **Abstract Syntax Tree (AST)**: parse the AST of the file under analysis and runs rules that report violations and generate fixed based on a code pattern
- **Pattern**: matche a sequence of code and report violations based on the pattern content

If you want to write a quick rule, use the **pattern** rule type: it works like a regular expression and can already
provide good support for error detection.

If you want to catch complicated error, use the **AST** rule type. It is more complicated than
the **pattern** rule type but catch precisely code elements.

## Learn More

- Tutorial to create a Pattern Rule
- Tutorial to create an AST rule.
