---
id: branches
title: Git Branches Configuration
sidebar_label: Branches
description: Manage multiple branches on Codiga to analyze your code and automated your Code Reviews on GitHub, GitLab and Bitbucket. Support for 12+ languages, start for free today.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - github
  - gitlab
  - github actions
  - bitbucket
  - codiga
  - static analysis
  - static code analysis
  - continuous integration
  - ci/cd pipeline
  - code verification
  - security analysis
  - CWE
  - CVEs
---

## Summary

- Codiga supports the analysis of multiple branches.
- Automated code reviews do not need to have any branch specified.

## Default branch

When the default branch is not set, Codiga uses the default
branch of your repository, similar to which branch would be checked
out when you run `git clone <url-of-repository>`.

For GitHub and Bitbucket accounts, the default branch used for push notifications
are `master` and `main`, respectively. You can change the default branch name.

## Add additional branches

To track more branches, go to your project preferences. Click on the "Branches" tab, add the list of branches you want to support.

:::info

You have to set up a default branch before tracking other branches.

:::

![Branches](/img/branches.png)

## Show dashboard for a specific branch

You can display the dashboard of a specific project for a particular branch. By default, the default branch is shown. You can specify the branch to show using the branch selector, as shown below.

![Branches](/img/branch-dashboard.png)

## Show analyses for a specific branch

You can display the list of analyses for a project for a particular branch. By default, the default branch is shown. You can specify the branch to show using the branch selector.

![Branches](/img/branch-analyses.png)
