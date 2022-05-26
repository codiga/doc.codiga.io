---
id: coding-assistant-recipes-cookbooks
title: Codiga - Snippets and Cookbooks
description: Coding Assistant to define and use a collection of code snippets for your IDE. Work for 15+ languages.
---

## Smart Code Snippets

### What is a Code Snippet?

A Code Snippet is a reusable block of code shared on the platform.

- A **name**: how you call your code snippet (e.g. `Read a CSV file`)
- A **description**, optional (e.g. `code snippet that read a CSV file from the local filesystem`)
- A set of **tags**, optional, to organize your code snippets
- A block of **reusable code** that is what is being stored on the platform and reused by other developers.
- A set of **imports**, optional, that are imports being automatically when importing the code snippet.
- A set of **keywords** that are used to trigger the code snippet.

### How to create a Code Snippet?

You can create code snippets on the platform, using the web interface.

![Creating Code snippets](/img/coding-assistant/creating-recipes.gif)

You can also create a code snippets directly from your IDE by selecting the text and selecting to create a code snippet.

### How to share a code snippets?

You can share a code snippets using a direct link or embed a badge on your website. On the public code snippets page, you
can share the code snippets directly using a badge.

### Visibility

A code snippet can be either public or private. You cannot change the code snippets visbility once created.

When a code snippet is created as public, it's automatically shared and reusable by anybody on the platform.

When a code snippet is created as private, only you can reuse it.

### Using a code snippet

To use a code snippet, you need to subscribe to it. You can favor a code snippet on Codiga Hub, once you are logged.

### How a code snippet get selected in my IDE?

You can search for a code snippet directly within your IDE. When looking for a code snippet, the matching engine
fetch code snippets that matches the user requests and code snippets keywords.

The matching engine uses the following parameters to select code snippets:

- **keywords**: the engine checks that the keywords from the user request and the keywords from code snippets.
- **popularity**: the engine surfaces code snippets that are used and popular.
- **rating**: the engine avoids unsafe code snippets (e.g. code snippets flagged as unsafe).
- **language**: the langauge of the code snippet must match the language of the file edited in the IDE.
- **libraries**: the code snippet must be usable with the libraries and language used within the IDE.

## Cookbooks

### What is a cookbook?

A cookbook is a collection of code snippets. You can add multiple code snippets in the same cookbook.

When a user subscribe to a cookbook, they automatically subscribe to all public code snippets within that cookbook.

### How to share a cookbook?

You can share a cookbook using a direct link or embed a badge on your website. On the public code snippet page, you
can share the cookbook directly using a badge.
