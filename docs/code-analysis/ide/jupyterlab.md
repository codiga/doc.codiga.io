---
id: jupyterlab
title: Code Analysis for Jupyter Lab
sidebar_label: Jupyter Lab
description: Integration of the Codiga Code Analysis platform for Jupyter Lab.
keywords: [
    jupyter,
    jupyter lab,
    text editor,
    notebooks,
    ipynb,
    ipython
]
---

Codiga's Rosie Language Server can be configured in Jupyter Lab, so that one can use the Rosie Code Analysis platform there.

The language server can be found at [Codiga/vscode-plugin](https://github.com/codiga/vscode-plugin/server).

## Install the Language Server

TODO

## Enable Code Analysis

### codiga.yml

Codiga code analysis can be enabled by creating a `codiga.yml` configuration file in the root directory of your project,
and specifying the rulesets you'd like to use.

Visit the [Codiga Hub](https://app.codiga.io/hub/rulesets) and select the rulesets to use in your project.

Then, create a `codiga.yml` **at the root of your project** with the list of rulesets you picked from Codiga Hub.

NOTE: The file must have the `.yml` extension. Creating the file as `codiga.yaml` is not supported.

### Enable the language server

In order to have the Rosie Language Server initialized by Jupyter, you must also configure in under
`Settings > Advanced Settings Editor > Language Server > User Preferences`, in the JSON view:

```json
  "language_servers": {
      "rosie_language_server": {
          "serverSettings": {
              "codiga.api.token": ""
          }
      }
  }
```

![Language Server Configuration](/img/rosie/ide-integration/jupyter-lab/language_server_configuration.png)

If you also have a Codiga API token, you can use that by specifying it in the `codiga.api.token` property.

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

| Rosie Severity          | Highlighting in the Editor                                                                       |
|-------------------------|--------------------------------------------------------------------------------------------------|
| CRITICAL                | ![Critical Violation](/img/rosie/ide-integration/jupyter-lab/critical_diagnostics.png)           |
| ERROR                   | ![Error Violation](/img/rosie/ide-integration/jupyter-lab/error_diagnostics.png)                 |
| WARNING                 | ![Warning Violation](/img/rosie/ide-integration/jupyter-lab/warning_diagnostics.png)             |
| INFORMATIONAL / UNKNOWN | ![Informational Violation](/img/rosie/ide-integration/jupyter-lab/informational_diagnostics.png) |

### Quick Fixes

Jupyter Lab doesn't support quick fixes at the moment, thus only the diagnostics part that is available there.

### Disable Code Analysis

The Rosie platform provides a way to exclude individual lines from code analysis. This is done by having added the `codiga-disable` comment
above the line in which the analysis must be disabled, e.g.:

```python
# codiga-disable
request = get('https://some.url', verify=False)
```

You can add this comment manually, taking into account the following:
- there is a whitespace between the comment sign and the `codiga-disable` text, for example `# codiga-disable` and not `#codiga-disable`, otherwise the exclusion is not applied,
- also, that the indentation of the comment matches the line's below it, that it is supposed to exclude.

## Development guide

This section is for those who'd like to make changes in the Rosie Language Server, and want to try them out in Jupyter Lab.

First, clone the [codiga/vscode-plugin](https://github.com/codiga/vscode-plugin) repository, then `npm i` and `npm run compile` in its root directory.

Then, create a language server configuration based on the [Jupyter - Configuring backend](https://jupyterlab-lsp.readthedocs.io/en/latest/Configuring.html) guide.
You can find the location of the file in the [language_servers section](https://jupyterlab-lsp.readthedocs.io/en/latest/Configuring.html#language-servers).

You can list the configuration paths that are currently configured in Jupyter by executing the `jupyter --paths` and the command line.
One such location path may be `c:\Users\<username>\AppData\Local\Programs\Python\Python311\etc\jupyter\jupyter_server_config.d\` from the **config** category.

The file you create must be named **rosie_language_server.json**, and it should contain the following:

```json
{
  "LanguageServerManager": {
    "language_servers": {
      "rosie_language_server": {
        "version": 2,
        "argv": ["node", "<absolute path to server.js>", "--stdio"],
        "languages": ["python", "javascript", "jsx", "typescript", "typescript-jsx", "typescriptreact", "javascriptreact"],
        "mime_types": ["text/python", "text/x-ipython", "application/typescript", "text/typescript-jsx", "text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript", "text/jsx"],
        "display_name": "Rosie Language Server"
      }
    }
  }
}
```

where `<asbolute path to server.js>` should point to `server.js` in the compiled sources of the vscode-plugin, for example

```json
"argv": ["node", "D:\\vscode-plugin\\server\\out\\server.js", "--stdio"],
```

When this is done, launch Jupyter Lab in an arbitrary repository where Jupyter is installed (i.e. execute `jupyter-lab` from the terminal),
and add the necessary user preferences described above in the [Enable the language server](#enable-the-language-server) section.

Finally, restart Jupyter Lab.

Language and mime_type examples can be found at in Jupyter's [jupyter-lsp](https://github.com/jupyter-lsp/jupyterlab-lsp/tree/master/python_packages/jupyter_lsp/jupyter_lsp/specs) GitHub repository.
