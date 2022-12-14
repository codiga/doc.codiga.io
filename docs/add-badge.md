---
id: add-badge
title: Codiga Add a Badge Documentation
sidebar_label: Add Quality Badges
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

## Add Quality Badges
A badge displays your code quality on a public webpage, such as your GitHub README file. 

Go to Code Analysis, click on your project, then click on the Preferences tab and copy and paste the Badge URL where you want to show this as your quality score. You can also add a badge on your project page to show the code grade (as shown below).

![Projec preferences](/img/project-preferences-01.png)

### Show the Code Quality Score

The Code Quality Score is a value from 0 to 100 that reflects the quality of your code base.

![Example of badge](/img/badge-01.svg)

To add it, just insert the following code snippet in the `README.md` file at your project root (replace `<PROJECT_IDENTIFIER>` with the project identifier).

```
[![Code Grade](https://api.codiga.io/project/<PROJECT_IDENTIFIER>/score/svg)](https://www.codiga.io)
```

**Hint**: you can find the full URL to use in your project preferences.

### Show the Code Grade

The Code Grade is a score from **A** (best quality) to **F** (worst quality) for your code base.

![Example of badge](/img/badge-02.svg)

Insert the following code snippet in the `README.md` file at your project root (replace `<PROJECT_IDENTIFIER>`
with the project identifier).

```
[![Code Grade](https://api.codiga.io/project/<PROJECT_IDENTIFIER>/status/svg)](https://www.codiga.io)
```

**Hint**: you can find the full URL to use in your project preferences.
