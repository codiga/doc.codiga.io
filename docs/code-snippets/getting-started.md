---
id: getting-started
title: Find Code Snippets in your IDE
description: Coding Assistant to write faster code in your IDE and find safe and secure code within seconds. Work for 15+ languages.
keywords:
  [
    coding assistant,
    smart coding assistant,
    vs code,
    vscode,
    jetbrains,
    pycharm,
    intellij,
    clion,
    datagrip,
    chrome,
    code snippets,
    secure code,
    safe code,
  ]
---

The Codiga coding assistant helps you create, share and import in your IDE reusable code blocks (known as code snippets).

In just entering a few words in a box, a code snippet is imported in your IDE, which makes you write safe and secure code faster.

![Use code snippets in Jetbrains](/img/coding-assistant/jetbrains-use-recipe.gif)

## How it works

This is a collaborative platform. Users create code snippet and share them on the platform. Any other
developer can look for code snippets and reuse them in their IDE.

![How the coding assistant works](/img/coding-assistant/howitworks.gif)

## Code snippet

A code snippet is defined on the Codiga platform and can be shared with anybody. It is defined by:

- A **name**: how you call your code snippet (e.g. `Read a CSV file`)
- A **description**, optional (e.g. `code snippet that read a CSV file from the local filesystem`)
- A set of **tags**, optional, to organize your code snippets
- A block of **reusable code** that is what is being stored on the platform and reused by other developers.
- A set of **imports**, optional, that are imports being automatically when importing the code snippet.

## Cookbook

A cookbook is a set of code snippets. It helps you group all your code snippets for a particular framework, library or languages.
For example, if you write a set of code snippets for the React library, you will group them into a cookbook called `"My React code snippets"`.
Any developer can then subscribe to this cookbook and use code snippets from this cookbook.

## Code snippet Visibility

A code snippet is either public or private:

- When a code snippet is marked **public**, any user on the platform can reuse the code snippet. A user needs to subscribe to the code snippet or to the cookbook that contains this code snippet.
- When a code snippet is marked **private**, only you can use this code snippet.

![Code snippets visibility](/img/coding-assistant/visibility.png)

## Code snippets available by default

When users are not authenticated, a set of code snippets are proposed by default for all languages.
These sets of code snippets are being moderated by the Codiga team and are considered as safe and secure to use.

## IDE compatibility

The Coding Assistant is compatible with the following IDE:

- [VS Code](/docs/code-snippets/vscode)
- [Jetbrains IDEs](/docs/code-snippets/jetbrains): IntelliJ, PyCharm, PHPStorm, etc.
- [Chrome](/docs/code-snippets/chrome)

## Platform safety

Users can rate code snippets and flag them as unsafe. When being flagged as unsafe, they are removed from the suggestions in your IDE.
It guarantees that all code snippets are safe and secure to use.

## Note on code snippet reusability

When sharing code snippets and code blocks on the platform, you agree that other developers can reuse the code block
under any license, even commercial products.

## Privacy

When you look for a code snippet, we only send the following elements to our servers:

- the language you are using
- the list of dependencies (packages) you are using (some code snippets depend on specific packages)
- the keywords you typed that trigger the code snippet

Our server returns the list of code snippets that matches your criteria.

![Using a code snippet](/img/coding-assistant/using-recipe.png)

## Getting help

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)
