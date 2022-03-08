---
id: coding-assistant-getting-started
title: Getting Started
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

The Codiga coding assistant helps you create, share and import in your IDE reusable code blocks (known as recipes).

In just entering a few words in a box, a recipe is imported in your IDE, which makes you write safe and secure code faster.

![Use Recipe in Jetbrains](/img/coding-assistant/jetbrains-use-recipe.gif)

## How it works

This is a collaborative platform. Users create recipe and share them on the platform. Any other
developer can look for recipes and reuse them in their IDE.

![How the coding assistant works](/img/coding-assistant/howitworks.gif)

## Recipe

A recipe is defined on the Codiga platform and can be shared with anybody. It is defined by:

- A **name**: how you call your recipe (e.g. `Read a CSV file`)
- A **description**, optional (e.g. `Recipe that read a CSV file from the local filesystem`)
- A set of **tags**, optional, to organize your recipes
- A block of **reusable code** that is what is being stored on the platform and reused by other developers.
- A set of **imports**, optional, that are imports being automatically when importing the recipe.

## Cookbook

A cookbook is a set of recipes. It helps you group all your recipes for a particular framework, library or languages.
For example, if you write a set of recipes for the React library, you will group them into a cookbook called `"My React recipes"`.
Any developer can then subscribe to this cookbook and use recipes from this cookbook.

## Recipe Visibility

A recipe is either public or private:

- When a recipe is marked **public**, any user on the platform can reuse the recipe. A user needs to subscribe to the recipe or to the cookbook that contains this recipe.
- When a recipe is marked **private**, only you can use this recipe.

![How the coding assistant works](/img/coding-assistant/visibility.png)

## Recipes available by default

When users are not authenticated, a set of recipes are proposed by default for all languages.
These sets of recipes are being moderated by the Codiga team and are considered as safe and secure to use.

## IDE compatibility

The Coding Assistant is compatible with the following IDE:

- [VS Code](/docs/coding-assistant/coding-assistant-vscode)
- [Jetbrains IDEs](/docs/coding-assistant/coding-assistant-jetbrains): IntelliJ, PyCharm, PHPStorm, etc.
- [Chrome](/docs/coding-assistant/coding-assistant-chrome)

## Platform safety

Users can rate recipe and flag them as unsafe. When being flagged as unsafe, they are removed from the suggestions in your IDE.
It guarantees that all recipes are safe and secure to use.

## Note on recipe reusability

When sharing recipes and code blocks on the platform, you agree that other developers can reuse the code block
under any license, even commercial products.

## Privacy

When you look for a recipe, we only send the following elements to our servers:

- the language you are using
- the list of dependencies (packages) you are using (some recipes depend on specific packages)
- the keywords you typed that triggers the recipe

Our server returns the list of recipes that matches your criteria.

![How the coding assistant works](/img/coding-assistant/using-recipe.png)

## Getting help

You can get help by joining our [Slack Community](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ)
