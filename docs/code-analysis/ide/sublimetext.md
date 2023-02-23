---
id: sublimetext
title: Code Analysis for Sublime Text
sidebar_label: Sublime Text
description: Integration of the Codiga Code Analysis platform for Sublime Text.
keywords: [
    sublime,
    sublime text,
    text editor,
    st
]
---

This Sublime Text plugin provides support for using Codiga's Rosie Code Analysis platform via its
Rosie Language Server implementation.

You can find the plugin and the language server at:

- on GitHub at [codiga/codiga-sublime](https://github.com/codiga/codiga-sublime)
- the language server at [codiga/vscode-plugin](https://github.com/codiga/vscode-plugin/server)

## Prerequisites and installation

- Install [**LSP**](https://packagecontrol.io/packages/LSP) and **Rosie Language Server** from Package Control.
- Restart Sublime Text.

The server requires v14 or later version of the Node runtime.

## Enable Code Analysis

Codiga code analysis can be enabled by creating a `codiga.yml` configuration file in the root directory of your project,
and specifying the rulesets you'd like to use.

This file can be created and populated with configuration in different ways that we'll detail in the sections below.

NOTE: The file must have the `.yml` extension. Creating the file as `codiga.yaml` is not supported.

### API Token

Configuring the API Token is not mandatory at the moment, but if you'd like to use your private rulesets and rules:
- open the configuration file via the command palette with the **Preferences: Rosie Language Server** command,
or via `Preferences > Package Settings > LSP > Servers > Rosie Language Server`
- specify your token in the `codiga.api.token` property

![Codiga API Token Configuration](/img/rosie/ide-integration/sublime-text/plugin-settings.png)

### Manually via NPM

At the root of your project, invoke the following command:

```bash
npx @codiga/cli@latest ruleset-add
```

**Note**: you must have `npx` installed (available with `npm`).

### Manually with Handpicked Rulesets

Visit the [Codiga Hub](https://app.codiga.io/hub/rulesets) and select the rulesets to use in your project.

Then, create a `codiga.yml` **at the root of your project** with the list of rulesets you picked from Codiga Hub.

## The Configuration File

### List of Rulesets

The most important part of the `codiga.yml` file is the property called `rulesets` in which you can specify the list of ruleset names
that you want to use for code analysis.

Its value must be a non-empty list of ruleset names, for example:

```yaml
rulesets:
  - python-security
  - python-best-practices
  - python-code-style
```

### Ignoring Rules

Optionally, you can also ignore specific rules, and on specific file system paths. Ignoring a rule means that files won't be analysed against that rule.

#### Ignore a rule for all files

If you want a rule not to be analysed in any file in your project, you can specify the rule the following way:

```yaml
rulesets:
  - python-security
ignore:
  - python-security:
      - request-verify
```

#### Ignore a rule for specific path prefixes

If you want a rule not to be analysed in specific files and/or directories, you can use the `prefix` property.

The value(s) of the `prefix` property are relative paths from the project's root directory. They don't have to be exact matches
of files or folders, they can be partially matching, thus called a `prefix`.

```yaml
rulesets:
  - python-security
ignore:
  - python-security:
      - request-verify:
          # Ignores 'request-verify' in any file in any folder whose relative path starts with this prefix.
          - prefix: /src/some/project/path
      - requests-timeout:
          # Ignores 'requests-timeout' in files whose relative paths start with at least one of the listed prefixes.
          - prefix:
              - src/some/project/path # The leading slash is optional
              - src/some/project/path/python_file.py # Exact matching for a file path
```

The prefix paths must be specified with forward slashes (/), the plugin handles OS specific file system paths under the hood.

Currently, there is no support for:

- Ignoring entire rulesets. If you'd like to do so, simply comment out or remove the given ruleset from the `rulesets` property.
- `.`, `..` or other wildcard characters or pattern matching. The prefix is processed as a literal value.

#### Troubleshooting

In order for the ignore functionality to work properly, make sure that:

- the ruleset names in the `ignore` section are all specified in the `rulesets` section as well,
- the rule names specified under the ruleset names target rules that actually exist in those rulesets.

## Diagnostics

Highlighting of code violations found by Rosie is made possible via diagnostics. Highlighting types are mapped to the Rosie severities as per the following:

| Rosie Severity          | Highlighting in the Editor                                                                        |
|-------------------------|---------------------------------------------------------------------------------------------------|
| CRITICAL                | ![Critical Violation](/img/rosie/ide-integration/sublime-text/critical_diagnostics.png)           |
| ERROR                   | ![Error Violation](/img/rosie/ide-integration/sublime-text/error_diagnostics.png)                 |
| WARNING                 | ![Warning Violation](/img/rosie/ide-integration/sublime-text/warning_diagnostics.png)             |
| INFORMATIONAL / UNKNOWN | ![Informational Violation](/img/rosie/ide-integration/sublime-text/informational_diagnostics.png) |

### Quick Fixes

There are two types of quick fixes that you can use on an annotation:

1. **Fix: &lt;fix description>**: applies an actual code fix for the violation
2. **Ignore rule &lt;rule name>**: disables Codiga code analysis for the line on which the violation occurred

#### Code Fixes

Code fixes/edits are code modifications that are meant to provide a solution for fixing or optimizing a code violation.
They can be implemented and configured in each individual rule implementation on Codiga Hub, but they are not mandatory.

If there is a fix for a given rule, you'll see quick fixes like the following ones appear when you open the Quick Fixes menu.

![Quick Fixes](/img/rosie/ide-integration/sublime-text/quick_fixes.png)

There are also some ways in the language server, to prevent introducing code fixes when the edits, edit start/end offsets
are incorrect, i.e. negative values, beyond document length, the end offset is less than the start offset, etc.

### Disable Code Analysis

The Rosie platform provides a way to exclude individual lines from code analysis. This is done by having added the `codiga-disable` comment
above the line in which the analysis must be disabled, e.g.:

```python
# codiga-disable
request = get('https://some.url', verify=False)
```

You can add this comment either by invoking the **Ignore rule ...** quick fix on a violation, or add it manually.
In the latter case make sure that:

- there is a whitespace between the comment sign and the `codiga-disable` text, for example `# codiga-disable` and not `#codiga-disable`, otherwise the exclusion is not applied,
- also, that the indentation of the comment matches the line's below it, that it is supposed to exclude.
