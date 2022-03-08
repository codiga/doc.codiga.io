---
id: integration-jetbrains-idea-intellij
title: Jetbrains plugin
description: Analyze your code in IntelliJ, CLion, DataGrip with no tool required. Available for 12+ languages on all JetBrains products.
keywords:
  [
    coding assistant,
    smart coding assistant,
    jetbrains,
    clion,
    datagrip,
    code snippets,
    secure code,
    safe code,
    dataspell,
    fleet,
    goland,
    phpstorm,
    rider,
    rubymine,
    webstorm,
    intellij,
  ]
---

The IntelliJ plugin is available directly on the [Jetbrains marketplace](https://plugins.jetbrains.com/plugin/17969-codiga).
You can directly install it within Jetbrains.

<iframe frameborder="none" width="245px" height="48px" src="https://plugins.jetbrains.com/embeddable/install/17969"></iframe>

## Introduction

The Codiga Jetbrains plugin surfaces all issues detected by
Codiga directly in Jetbrains. No need to install any special tool
on your laptop, the plugin surfaces:

- **code violations** such as vulnerabilities, lack of documentation, safety issues and much more
- **complex functions**: any function with high [cyclomatic complexity](https://en.wikipedia.org/wiki/Cyclomatic_complexity)
- **long functions**: any function longer than 40 lines
- **code duplicates**: any code that has been duplicated through the codebase and should be refactored into functions.

## Quick Start

The Codiga plugin is available on the Jetbrains marketplace. Look for it
within Jetbrains, you can install it in a click!

## Connecting your Codiga account

**Note**: this step is optional, using your account will make sure your preferences are being used when you analyze code in the platform.

You need to have an account on [Codiga](https://www.codiga.io) and have your project
inspected by Codiga. Once done, get your API keys on Codiga on
[the token integration page](https://app.codiga.io/api-tokens).

Add these keys in the plugin preferences.

## Quick actions within Jetbrains

Codiga will annotate your source code and surface all issues it detects. You can select to learn more
about each violation, see them on Codiga or just ignore it.

![Action Available](/img/intellij-plugin/actions-available.png)

## Reporting an issue

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)

You can report an issue on the VS Code plugin [directly on GitHub](https://github.com/codiga/jetbrains-plugin/issues).
