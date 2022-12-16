---
id: integration-github
title: Codiga GitHub Integration for Automated Code Reviews and Code Analysis
sidebar_label: GitHub
description: Check your code quality with Codiga for all GitHub repositories. Work for 12+ languages. Free 14 days trial.
keywords:
  [
    github,
    github application,
    github marketplace,
    codiga,
    static analysis,
    static code analysis,
    continuous integration,
    ci/cd pipeline,
    code verification,
    security analysis,
    CWE,
    CVE,
  ]
---

## GitHub Accounts

When you log into Codiga with GitHub, you have to use our
[GitHub App](https://github.com/apps/codiga) to allow repositories to be shared
with Codiga. Only the repositories you select can be used on Codiga.

![Manage GitHub App menu entry](/img/github-app.png)

## GitHub App

You can install the [GitHub App](https://github.com/apps/codiga) on individual and organizational accounts.

Regardless on where you install the app, you need to create a group for the
related GitHub entity (e.g. if you install the GitHub App on the `johndoe` user,
you need to create the `johndoe` group on Codiga).

### Projects Management

Adding or removing projects is done directly on Codiga. Only the projects you
selected in the GitHub App can be used on Codiga.

### Group Management

GitHub users cannot create groups directly on Codiga.
Instead, GitHub organizations are mapped into groups. When logging on Codiga, the platform detects
if any organization you belong to is on Codiga and automatically adds
you to it if you belong to it.

You can also add more users to a Codiga group in the group preferences.

### Automated Code Review

GitHub accounts are automatically enrolled in automated code review: when a pull request
is created, the engine compares the new code with the previous one and annotates the pull
requests with the various violations, code duplicates and complex/long functions.

That way, code issues are automatically detected before pushing change. Automating
code reviews also saves significant developers time since it catches small errors
before human reviewers do it.

:::info

Automated code reviews work only on GitHub App.

:::

### Permissions and Security

Our engine can access only repositories you gave access to when you selected
the list of repositories you want to get access to. For that reason,
pull requests from other repositories cannot be processed since the GitHub
app has not granted access to these repositories.

This is a design decision: we wanted to design Codiga with user
privacy in mind.

## Supported features

- Login
- Select Repository through list
- Automated Code Review (pull request being commented)
