---
id: javascript-rule-react-no-class-component
title: JavaScript React Class Component
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

This rule is specific to the React framework.

In React, you should prefer to use functional components over class components.
Functional components are easier to read and maintain.

This rule detects when a class component is used and suggest to transform
into a functional component.

## Examples

### Good

```javascript
import React from 'react';
const MyReactComponent = () => {
    ...
};

```

### Bad

```javascript
import React, { PureComponent } from 'react';

class MyReactComponent extends PureComponent {
  ...
}
```
