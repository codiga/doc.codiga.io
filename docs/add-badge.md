---
id: add-badge
title: Add a Badge
description: Create a badge on Codiga to show your code quality on GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - github
  - gitlab
  - github actions
  - github profile
  - github badge
  - bitbucket
  - codiga
  - static analysis
  - static code analysis
  - continuous integration
  - ci/cd pipeline
  - code verification
  - security analysis
  - CWE
  - CVE
---

You can add a badge on your project page to show the code grade (as shown below).

![Example of badge](/img/badge.png)

The video below shows how to add a badge to your project in your repositories.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6WHibkv6cc0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Show the Code Quality Score

The Code Quality Score is a value from 0 to 100 that reflects the quality of your code base.

To add it, just insert the following code snippet in the `README.md` file at your project root (replace `<PROJECT_IDENTIFIER>` with the project identifier).

```
[![Code Grade](https://api.codiga.io/project/<PROJECT_IDENTIFIER>/score/svg)](https://www.codiga.io)
```

**Hint**: you can find the full URL to use in your project preferences.

## Show the Code Grade

The Code Grade is a score from **A** (best quality) to **F** (worst quality) for your code base.

Insert the following code snippet in the `README.md` file at your project root (replace `<PROJECT_IDENTIFIER>`
with the project identifier).

```
[![Code Grade](https://api.codiga.io/project/<PROJECT_IDENTIFIER>/status/svg)](https://www.codiga.io)
```

**Hint**: you can find the full URL to use in your project preferences.
