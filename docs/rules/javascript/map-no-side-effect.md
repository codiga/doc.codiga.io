---
id: javascript-map-no-side-effect
title: JavaScript .map() no side effect
description: Code Analysis rules for JavaScript on Codiga detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - codiga
  - static analysis
  - static code analysis
  - continuous integration
  - ci/cd pipeline
  - code verification
  - security analysis
  - CWE
  - CVE
  - JavaScript
---

This rule detects if there is a side effect when using `map()`.
Modifying variables outside the scope of `map()` should not
not be done. Instead, `.forEach()` should be used.

## Examples

### Good

```javascript

const bla = [...];
var total = 0;
bla.forEach(v => {
    total = total + v;
});
```

### Bad

```javascript
const bla = [...];
var total = 0;
bla.map(v => {
    total = total + v;
});
```
