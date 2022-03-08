---
id: coding-assistant-vscode
title: VS Code Integration
description: Coding Assistant to write faster code in VS Code and find safe and secure code within seconds. Work for 15+ languages.
keywords:
  [
    coding assistant,
    smart coding assistant,
    vs code,
    vscode,
    code snippets,
    secure code,
    safe code,
  ]
---

## Compatibility

The VS Code plugin is compatible with VS Code desktop and GitHub codespaces.

## How to get the VS Code extension

You can get it directly from the VS Code marketplace within your VS Code installation.
The extension is available on the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=codiga.vscode-plugin)

## Using a recipe

You can use a recipe by opening the command `Codiga: Use Recipe` (ctrl + shift + p and search for "Codiga") or by
directly using the shortcut ctrl + shit + C.

In vscode, you can also type your keywords on a single line and suggestions from Codiga will automatically appear.

If you did not link your Codiga account, the extension will use only the default recipes. To use the recipes you
subscribed to and your own private recipes, you need to link your codiga account (see below).

![Using recipe in VS Code](/img/coding-assistant/vscode-use-recipe.gif)

## Creating a recipe

To create a recipe in VS Code, select the code you want to share, click right and select `"Create Codiga Recipe"`.

Your browser opens with the code and its language directly initialized.

![Create Recipe](/img/coding-assistant/vscode-create-recipe.gif)

## Linking your Codiga account

If you want to use the recipes, you need to link your Codiga account using an API token.

First, create your token on the platform as shown below.

![Generating API token](/img/coding-assistant/api-token-creation.gif)

Then, go into the VS Code settings and enter your API Token in the Codiga configuration section.

![Using API token](/img/coding-assistant/vscode-configuration.png)

## Reporting an issue

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)

You can report an issue on the VS Code plugin [directly on GitHub](https://github.com/codiga/vscode-plugin/issues).

## Resources

- [Source Code](https://github.com/codiga/vscode-plugin)
- [Issue Tracker](https://github.com/codiga/vscode-plugin/issues)
