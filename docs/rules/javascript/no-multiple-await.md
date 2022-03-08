---
id: javascript-no-multiple-await
title: JavaScript mutiple awaits
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

This rule detects is there are multiple calls to `await`. Instead,
the user should use `Promise.all()` when waiting for multiple
asynchronuous calls.

Using `Promise.all()` allows you to fail faster in case one of the
`await` calls does not succeed. See the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) for more details.

## Examples

### Good

```javascript
const [res1, res2] = Promise.all([await callApi(arg1), await callApi(arg2)]);
```

### Bad

```javascript
const res1 = await callApi(arg1);

const res2 = await callApi(arg2);
```
