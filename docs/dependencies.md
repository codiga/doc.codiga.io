---
id: dependencies
title: Codiga Code Dependencies Analysis
sidebar_label: Code Dependencies Analysis
description: Analyze your dependencies. Detect any oudated dependency that might be unsafe or insecure and get notification to upgrade them.
keywords:
  - code analysis
  - technical debt
  - dependency
  - dependency analysis
  - outdated dependency
  - static analysis
  - configuration
  - code reviews
  - git
---

Codiga detects and analyzes your software dependencies. It reports
what dependency should be updated by keeping a history of all dependencies
available online.

## Why should you specify a dependency version

Some languages or package managers do not require to specify a version.
Codiga recommends specifying a version number, which avoids headaches
in the future. In particular, when not specifying a version, you do not
have any guarantee on what version will be used. When installing your software,
you might pull a new version that breaks your code.

For more details, we recommend you have a look at this
[Stackoverflow post](https://stackoverflow.com/questions/55052434/does-python-requirements-file-have-to-specify-version)
about this topic.

## How do you consider a version as "old"?

Current thresholds are configured as follows:

- The analysis engine considers a warning if there are five (5) new versions
  of a library.
- The analysis engine considers a critical issue if there are ten (10) new
  versions of a given library.

## What languages are considered for dependency management?

The Codiga engine is configured to handle the following languages:

- Python (at the `requirements.txt` file)
- Java (at the `pom.xml` file)
- Ruby (at the `Gemfile` file)
- Javascript (at the `package.json` file)

## My dependencies are specified in a custom file, how can I configure the engine?

You can change the path to the file that contains your dependencies.
For each language, the preferences panel contain an entry to change the path
to the dependency file.

**Note**: the path of the dependency file is relative to your repository.

![Dependencies Preferences](/img/dependencies-preferences.png)
