---
id: ide-integration-visual-studio
title: Code Analysis Integration for Visual Studio
sidebar_label: Visual Studio
description: Integration of the Codiga Code Analysis platform for Visual Studio.
keywords: [vs, visual studio, secure code, safe code]
---

The Codiga Visual Studio extension provides integration of Codiga's Rosie Code Analysis platform.

You can find the plugin on:

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=codiga.vsextension) - you can also find the list of supported versions here
- GitHub at [codiga/visualstudio-extension](https://github.com/codiga/visualstudio-extension)

## Analyzed Languages

The Rosie platform and the integration in Visual Studio support the following languages and file extensions for code analysis:

| Language   | File Extensions  |
| ---------- | ---------------- |
| Python     | .py. py3, .ipynb |
| JavaScript | .js, .jsx        |
| TypeScript | .ts, .tsx        |

## Enable Code Analysis

Codiga code analysis can be enabled by creating a `codiga.yml` configuration file in the root directory of your solution,
or in case of Open Folder Mode, directly in the opened folder, and specifying the rulesets you'd like to use.

This file can be created and populated with configuration in different ways that we'll detail in the sections below.

NOTE: The file must have the `.yml` extension. Creating the file as `codiga.yaml` is not supported.

### API Token

Configuring the API Token is not mandatory at the moment, but if you'd like to use your private rulesets and rules,
you must configure it in the IDE Options under the `Tools > Options > Codiga` page.

![Codiga API Token Configuration](/img/rosie/ide-integration/visual-studio/codiga_api_token.png)

### Manually via NPM

At the root of your solution, invoke the following command:

```bash
npx @codiga/cli@latest ruleset-add
```

**Note**: you must have `npx` installed (available with `npm`).

### Manually with Handpicked Rulesets

Visit the [Codiga Hub](https://app.codiga.io/hub/rulesets) and select the rulesets to use in your solution.

Then, create a `codiga.yml` **at the root of your solution** with the list of rulesets you picked from Codiga Hub.

### Default Configuration Suggestions

When a solution doesn't contain a `codiga.yml` file, the plugin inspects the solution's type and the types of files contained in the solution.
Upon a match with one of the languages/file extensions supported by Rosie, an Info Bar is displayed in the Solution Explorer to let users know
that the solution could benefit from Codiga code analysis.

![Default Rulesets Suggestion Info Bar](/img/rosie/ide-integration/visual-studio/default_rulesets_suggestion_info_bar.png)

There are two options on this info bar:

- **Create codiga.yml**: creates the configuration file in the solution root with a default list of rulesets for the found language.
- **Never for this solution**: it saves your choice for this solution, and won't remind you again about creating a `codiga.yml` file.

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

If you want a rule not to be analysed in any file in your solution, you can specify the rule the following way:

```yaml
rulesets:
  - python-security
ignore:
  - python-security:
      - request-verify
```

#### Ignore a rule for specific path prefixes

If you want a rule not to be analysed in specific files and/or directories, you can use the `prefix` property.

The value(s) of the `prefix` property are relative paths from the solution's root directory. They don't have to be exact matches
of files or folders, they can be partially matching, thus called a `prefix`.

```yaml
rulesets:
  - python-security
ignore:
  - python-security:
      - request-verify:
          # Ignores 'request-verify' in any file in any folder whose relative path starts with this prefix.
          - prefix: /Source/Some/Solution/Path
      - requests-timeout:
          # Ignores 'requests-timeout' in files whose relative paths start with at least one of the listed prefixes.
          - prefix:
              - Source/Some/Solution/Path # The leading slash is optional
              - Source/Some/Solution/Path/python_file.py # Exact matching for a file path
```

The prefix paths must be specified with forward slashes (/), the plugin handles OS specific file system paths under the hood.

Currently, there is no support for:

- Ignoring entire rulesets. If you'd like to do so, simply comment out or remove the given ruleset from the `rulesets` property.
- `.`, `..` or other wildcard characters or pattern matching. The prefix is processed as a literal value.

#### Troubleshooting

In order for the ignore functionality to work properly, make sure that:

- the ruleset names in the `ignore` section are all specified in the `rulesets` section as well,
- the rule names specified under the ruleset names target rules that actually exist in those rulesets.

## Code Squiggles

Underlining of code violations found by Rosie is made possible via the Tagging feature (squiggles) of Visual Studio.

Squiggle types are mapped to the Rosie severities as per the following:

| Rosie Severity          | Squiggles in the Editor                                                                         |
| ----------------------- | ----------------------------------------------------------------------------------------------- |
| CRITICAL                | ![Critical Violation](/img/rosie/ide-integration/visual-studio/critical_squiggle.png)           |
| ERROR                   | ![Error Violation](/img/rosie/ide-integration/visual-studio/error_squiggle.png)                 |
| WARNING                 | ![Warning Violation](/img/rosie/ide-integration/visual-studio/warning_squiggle.png)             |
| INFORMATIONAL / UNKNOWN | ![Informational Violation](/img/rosie/ide-integration/visual-studio/informational_squiggle.png) |

### Lightbulb Actions

There are three types of lightbulb actions that you can use on a squiggle:

1. **Fix: &lt;fix description>**: applies an actual code fix for the violation
2. **Remove error '&lt;rule name>'**: disables Codiga code analysis for the line on which the violation occurred
3. **See rule '&lt;rule name>' on the Codiga Hub**: opens the related rule on Codiga Hub

#### Code Fixes

Code fixes/edits are code modifications that are meant to provide a solution for fixing or optimizing a code violation.
They can be implemented and configured in each individual rule implementation on Codiga Hub, but they are not mandatory.

If there is a fix for a given rule, you'll see a lightbulb action like the following appear when you invoke the Alt+Enter or Ctrl+. menu on the squiggle:

![Lightbulb Actions](/img/rosie/ide-integration/visual-studio/lightbulb_actions.png)

There are also some ways in the plugin, to prevent introducing code fixes when the edits, edit start/end offsets
are incorrect, i.e. negative values, beyond document length, the end offset is less than the start offset, etc.

### Disable Code Analysis

The Rosie platform provides a way to exclude individual lines from code analysis. This is done by having added the `codiga-disable` comment
above the line in which the analysis must be disabled, e.g.:

```python
# codiga-disable
request = get('https://some.url', verify=False)
```

You can add this comment either by invoking the **Remove error ...** lightbulb action on a violation, or add it manually.
In the latter case make sure that:

- there is a whitespace between the comment sign and the `codiga-disable` text, for example `# codiga-disable` and not `#codiga-disable`, otherwise the exclusion is not applied,
- also, that the indentation of the comment matches the line's below it, that it is supposed to exclude.

## Internal Rules Cache

This section is a slightly technical insight into the plugin's internals.

The plugin incorporates an internal cache of all the rules from the rulesets that are specified in the `rulesets` property in `codiga.yml`,
along with a periodic update mechanism. This caching makes it possible to provide better plugin performance.

The periodic update is executed in every 10 seconds for the open solution, and updates the cache if either the `codiga.yml` file
has changed, or the configured rulesets (or underlying rules) have changed on Codiga Hub.

If you modify something at either location, and you cannot see the change immediately in your solution, you'll just have to wait a few seconds for
the cache update to execute, and the open editors to be updated.
