---
id: ide-integration-jetbrains
title: Code Analysis Integration for JetBrains IDEs
sidebar_label: JetBrains IDEs
description: Integration of the Codiga Code Analysis platform for JetBrains IDEs.
keywords:
  [
    jetbrains,
    clion,
    datagrip,
    secure code,
    safe code,
    dataspell,
    goland,
    phpstorm,
    rider,
    rubymine,
    webstorm,
    intellij,
    android studio
    pycharm
  ]
---

The Codiga JetBrains IDE plugin provides integration of Codiga's Rosie Code Analysis platform.

You can find the plugin on:
- [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/17969-codiga/) - you can also find the list of supported IDEs and versions here
- GitHub at [codiga/jetbrains-plugin](https://github.com/codiga/jetbrains-plugin)

## Analyzed Languages

The Rosie platform and the integration in JetBrains IDEs support the following languages and file extensions for code analysis:

| Language   | File Extensions  |
|------------|------------------|
| Python     | .py. py3, .ipynb |
| JavaScript | .js, .jsx        |
| TypeScript | .ts, .tsx        |

## Enable Code Analysis

Codiga code analysis can be enabled by creating a `codiga.yml` configuration file in the root directory of your project,
and specifying the rulesets you'd like to use.

This file can be created and populated with configuration in different ways that we'll detail in the sections below.

NOTE: The file must have the `.yml` extension. Creating the file as `codiga.yaml` is not supported.

### API Token

Configuring the API Token is not mandatory at the moment, but if you'd like to use your private rulesets and rules,
you must configure it in the IDE Settings under the `Tools > Codiga` page. 

![Codiga API Token Configuration](/img/rosie/ide-integration/jetbrains/codiga_api_token.PNG)

### Manually via NPM

At the root of your project, invoke the following command:

```bash
npx @codiga/cli@latest ruleset-add
```

**Note**: you must have `npx` installed (available with `npm`).

### Manually with Handpicked Rulesets

Visit the [Codiga Hub](https://app.codiga.io/hub/rulesets) and select the rulesets to use in your project.

Then, create a `codiga.yml` **at the root of your project** with the list of rulesets you picked from Codiga Hub.

### Default Configuration Suggestions

When a project doesn't contain a `codiga.yml` file, the plugin inspects the project's type and the types of files contained in the project.
Upon a match with one of the languages/file extensions supported by Rosie, a notification popup is displayed to let users know
that the project could benefit from Codiga code analysis.

![Default Rulesets Suggestion Notification](/img/rosie/ide-integration/jetbrains/default_rulesets_suggestion_notification.png)

There are two options on this notification:
- **Create codiga.yml**: creates the configuration file in the project root with a default list of rulesets for the found language.
- **Never for this project**: it saves your choice for this project, and won't remind you again about creating a `codiga.yml` file.

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

### Validation of Rulesets

The plugin provides two mechanisms to make sure that the configuration file has the proper format and content.

There is a JSON/YAML schema, [called `Codiga Config`](https://github.com/codiga/jetbrains-plugin/blob/main/src/main/resources/schema/codiga-config.yaml),
bound to `codiga.yml` files. It provides basic ruleset name validation like min and max length,
ruleset name pattern, unique names in the `rulesets` property and so on.

![Rulesets Schema Validation](/img/rosie/ide-integration/jetbrains/rulesets_schema_validation.png)

There is also an inspection to validate whether the specified rulesets actually exist on Codiga Hub, and if
they exist, whether they are empty, as in contain any rule.

![Rulesets Existence Validation](/img/rosie/ide-integration/jetbrains/rulesets_existence_validation.png)

### External Links for Rulesets

The plugin also provides an easy way to let you navigate to the ruleset on Codiga Hub right from the `codiga.yml` file.

You can simply Ctrl+Click on a ruleset name, and the given ruleset, for example https://app.codiga.io/hub/ruleset/python-security/request-verify,
is opened in your default web browser.

## Code Annotations

Highlighting of code violations found by Rosie is made possible via the Annotation feature of IntelliJ-based IDEs,
in a similar fashion you would expect regular code Inspections to be highlighted in the editor.

Highlighting types are mapped to the Rosie severities as per the following:

| Rosie Severity          | Highlighting in the Editor                                                                   |
|-------------------------|----------------------------------------------------------------------------------------------|
| CRITICAL                | ![Critical Violation](/img/rosie/ide-integration/jetbrains/critical_violation.png)           |
| ERROR                   | ![Error Violation](/img/rosie/ide-integration/jetbrains/error_violation.png)                 |
| WARNING                 | ![Warning Violation](/img/rosie/ide-integration/jetbrains/warning_violation.png)             |
| INFORMATIONAL / UNKNOWN | ![Informational Violation](/img/rosie/ide-integration/jetbrains/informational_violation.png) |

### Quick Fixes

There are three types of quick fixes that you can use on an annotation:
1. **Fix: &lt;fix description>**: applies an actual code fix for the violation
2. **Remove error '&lt;rule name>'**: disables Codiga code analysis for the line on which the violation occurred
3. **See rule '&lt;rule name>' on the Codiga Hub**: opens the related rule on Codiga Hub

#### Code Fixes

Code fixes/edits are code modifications that are meant to provide a solution for fixing or optimizing a code violation.
They can be implemented and configured in each individual rule implementation on Codiga Hub, but they are not mandatory.

If there is a fix for a given rule, you'll see a quick fix like the following appear when you invoke the Alt+Enter menu
on the annotation:

![Quick Fix Options](/img/rosie/ide-integration/jetbrains/quick_fix_options.png)

There are also some ways in the plugin, to prevent introducing code fixes when the edits, edit start/end offsets
are incorrect, i.e. negative values, beyond document length, the end offset is less than the start offset, etc.

If a fix could not be applied, an error hint lets you know about that:

![Cannot Apply Fix](/img/rosie/ide-integration/jetbrains/cannot_apply_fix.png)

### Disable Code Analysis

The Rosie platform provides a way to exclude individual lines from code analysis. This is done by having added the `codiga-disable` comment
above the line in which the analysis must be disabled, e.g.:

```python
# codiga-disable
request = get('https://some.url', verify=False)
```

You can add this comment either by invoking the **Remove error ...** quick fix on a violation, or add it manually.
In the latter case  make sure that:
- there is a whitespace between the comment sign and the `codiga-disable` text, for example `# codiga-disable` and not `#codiga-disable`, otherwise the exclusion is not applied,
- also, that the indentation of the comment matches the line's below it, that it is supposed to exclude.

## Internal Rules Cache

This section is a slightly technical insight into the plugin's internals.

The plugin incorporates an internal cache of all the rules from the rulesets that are specified in the `rulesets` property in `codiga.yml`,
along with a periodic update mechanism. This caching makes it possible to provide better plugin performance.

The periodic update is executed in every 10 seconds for each open project, and updates the cache if either the `codiga.yml` file
has changed, or the configured rulesets (or underlying rules) have changed on Codiga Hub.

If you modify something at either location, and you cannot see the change immediately in your project, you'll just have to wait a few seconds for
the cache update to execute, and the open editors to be updated.
