---
id: coding-assistant-recipes-cookbooks
title: Codiga - Snippets and Cookbooks
description: Coding Assistant to define and use a collection of code snippets for your IDE. Work for 15+ languages.
---

## Recipes

### What is a recipe?

A recipe is a reusable block of code shared on the platform.

- A **name**: how you call your recipe (e.g. `Read a CSV file`)
- A **description**, optional (e.g. `Recipe that read a CSV file from the local filesystem`)
- A set of **tags**, optional, to organize your recipes
- A block of **reusable code** that is what is being stored on the platform and reused by other developers.
- A set of **imports**, optional, that are imports being automatically when importing the recipe.
- A set of **keywords** that are used to trigger the recipe.

### How to create a recipe?

You can create recipes on the platform, using the web interface.

![Creating Recipes](/img/coding-assistant/creating-recipes.gif)

You can also create a recipe directly from your IDE by selecting the text and selecting to create a recipe.

### How to share a recipe?

You can share a recipe using a direct link or embed a badge on your website. On the public recipe page, you
can share the recipe directly using a badge.

### Visibility

A recipe can be either public or private. You cannot change the recipe visbility once created.

When a recipe is created as public, it's automatically shared and reusable by anybody on the platform.

When a recipe is created as private, only you can reuse it.

### Using a recipe

To use a recipe, you need to subscribe to it. You can subscribe to the recipe on the recipe marketplace, once you are logged.

### How a recipe get selected in my IDE?

You can search for a recipe directly within your IDE. When looking for a recipe, the matching engine
fetch recipes that matches the user requests and recipes keywords.

The matching engine uses the following parameters to select recipes:

- **keywords**: the engine checks that the keywords from the user request and the keywords from recipes.
- **popularity**: the engine surfaces recipes that are used and popular.
- **rating**: the engine avoids unsafe recipes (e.g. recipes flagged as unsafe).
- **language**: the langauge of the recipe must match the language of the file edited in the IDE.
- **libraries**: the recipe must be usable with the libraries and language used within the IDE.

## Cookbooks

### What is a cookbook?

A cookbook is a collection of recipes. You can add multiple recipes in the same cookbook.

When a user subscribe to a cookbook, they automatically subscribe to all public recipes within that cookbook.

### How to share a cookbook?

You can share a cookbook using a direct link or embed a badge on your website. On the public recipe page, you
can share the cookbook directly using a badge.
