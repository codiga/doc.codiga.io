---
id: typescript-rule-graphql-usequery-parameters
title: TypeScript Apollo GraphQL useQuery parameters
description: Code Analysis rules for TypeScript on Codiga detecting good software practices, security and vulnerability issues. Available on GitHub, GitLab and Bitbucket.
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
  - TypeScript
---

This rule is specific to Apollo GraphQL.

This rule detects if the `useQuery` or `useMutation` have the variables
being used when being called. When missing the `error` or `loading`
variables, you may not detect a GraphQL error, or if the data is loading.

## Examples

### Good

The `data`, `loading` and `error` variables are used.

```javascript
const { data, loading, error } = useQuery();
```

### Bad

The `loading` and `error` variables are not used.

```javascript
const { data } = useQuery();
```

The `error` variable is not used.

```javascript
const { data, loading } = useQuery();
```

The `loading` variable is not used.

```javascript
const { data, error } = useQuery();
```
