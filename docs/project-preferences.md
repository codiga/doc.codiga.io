---
id: project-preferences
title: Codiga Project Preferences for Automated Code Analysis
sidebar_label: Project Preferences
description: Configure your project and Code Reviews on Codiga and adapt the code analysis behavior to your needs.
keywords:
  - code analysis
  - technical debt
  - code complexity
  - cyclomatic complexity
  - code analysis
  - static code analysis
  - function length
  - code length
  - code reviews
  - github
  - gitlab
  - bitbucket
  - stripe
---

## Introduction

The Project Preferences page gives access to all the settings for a particular project.

### Skip Analysis

By default, Codiga runs a new analysis every time a new code is pushed to your project repository.
Although, it is possible to avoid running analyses for specific commits by defining "Skip Analysis" tags in the project preferences. You can define a list of tags for your projects (for example: `skip_analysis;no_analysis`) and Codiga will ignore commits having these tags in their commit message.

![Skip analysis](/img/skip-analysis.png)
