---
id: coding-assistant-vscode
title: Codiga VS Code Integration for Smart Code Snippets
sidebar_label: VS Code
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

## How to get the VS Code extension?

You can get it directly from the VS Code marketplace within your VS Code installation.
The extension is available on the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=codiga.vscode-plugin)

## Using a code snippet

<iframe width="560" height="315" src="https://www.youtube.com/embed/wrMy6hQWCrs?start=193" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can use a code snippet by opening the command `Codiga: Use Snippet` (`CTRL + SHIFT + P` and search for "Codiga") or by
directly using the shortcut `CTRL + SHIFT + C`.

We have multiple shortcuts that can help you while using Codiga:

**For Mac**

- `CMD + SHIFT + C` opens Codiga Coding Assistant to find snippets based on a search like a google search.

- `CMD + SHIFT + S` opens the list of all shortcuts

**For Windows**

- `CTRL + ALT + C` opens Codiga Coding Assistant to find snippets based on a search like a google search.

- `CTRL + ALT + S` opens the list of all shortcuts

In vscode, you can also type your keywords on a single line and suggestions from Codiga will automatically appear.

If you did not link your Codiga account, the extension will use only the default code snippets. To use the code snippets you
subscribed to and your own private code snippets, you need to link your codiga account (see below).

![Using code snippet in VS Code](/img/coding-assistant/vscode-use-recipe.gif)

## Shortcuts in VS Code

In order to use shortcuts in python file. Please follow the below steps:

<iframe width="560" height="315" src="https://www.youtube.com/embed/wrMy6hQWCrs?start=245" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Step 1**: Open the file you want to code.

**Step 2**: Make sure you have opened up a python form.

**Step 3**: Type the library you want to use, e.g. "aws" followed by a ‘.’ to get a recommendation.

**Step 4**: Select from the suitable recommendation

![Python Shortcut Demo](/img/shortcuts-vs-code/pydemo.gif)

Done! That's it. Your code snippet is directly imported & populated to your IDE.

Similarly, follow the below steps if you want to use this in your javascript file.

**Step 1**: Open the file you want to code.

**Step 2**: Make sure you have opened up a python form .

**Step 3**: Type the library you want to use, e.g. "react" followed by a ‘.’ to get a recommendation.

**Step 4**: Select from the suitable recommendation.

![JS Shortcut Demo](/img/shortcuts-vs-code/jsdemo.gif)

You can also make your code snippets and shortcuts from our dashboard. You can find detailed information on our [documentation](https://doc.codiga.io).

## Creating a code snippet

<iframe width="560" height="315" src="https://www.youtube.com/embed/wrMy6hQWCrs?start=307" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

To create a code snippet in VS Code, select the code you want to share, click right and select `"Create Codiga snippet"`.

![Create code snippet](/img/coding-assistant/vscode-create-snippet-01.png)

Your browser opens with the code and its language directly initialized.

![Code snippet details](/img/coding-assistant/vscode-create-snippet-02.png)

## Linking your Codiga account

<iframe width="560" height="315" src="https://www.youtube.com/embed/wrMy6hQWCrs?start=110" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you want to use the code snippets, you need to link your Codiga account using an API token.

:::info

An API token is what you need if you want to start an integration with Codiga. It relies on tokens
provided by the user.

:::

Go on the [API tokens page](https://app.codiga.io/api-tokens) and generate a new token. You can create multiple tokens
and associate a description to them (for example, if you want to have one token for VS Code, one for your CI pipeline, etc.).

Then, go into the VS Code settings and enter your API Token in the Codiga configuration section.

![Using API token](/img/coding-assistant/vscode-configuration.png)

## Reporting an issue

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)

You can report an issue on the VS Code plugin [directly on GitHub](https://github.com/codiga/vscode-plugin/issues).

## Resources

- [Source Code](https://github.com/codiga/vscode-plugin)
- [Issue Tracker](https://github.com/codiga/vscode-plugin/issues)
