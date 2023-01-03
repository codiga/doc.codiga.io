---
id: coding-assistant-recipes-cookbooks
sidebar_label: Snippets and Cookbooks
title: Codiga - Snippets and Cookbooks
description: Coding Assistant to define and use a collection of code snippets for your IDE. Work for 15+ languages.
---

## Smart Code Snippets

### What is a Code Snippet?

A Code Snippet is a reusable block of code shared on the platform.

### How to create a Code Snippet?

You can create code snippets at [app.codiga.io](https://app.codiga.io). Go to the Code Snippets section in the main navigation, click the Add new snippet button.

![Add a new code snippet](/img/coding-assistant/add-new-snippet-02.png)

Add the following information for your code snippet:

- **Name**: how you call your code snippet (e.g. `Read a CSV file`)
- **Language**: specify the language of code snippet.
- **Library**: specify the libraries to use with your code snippet.
- **Snippet privacy**: set the privacy of your code snippet. A code snippet can be either public or private. You cannot change the code snippets visibility once created. When a code snippet is created as public, it's automatically shared and reusable by anybody on the platform. Only you or shared groups can reuse a code snippet when created as private.


![Code snippet information](/img/coding-assistant/add-new-snippet-01.png)

 Now, you can edit the metadata for your code snippet:

- **Description**: details about your code snippet (optional) (e.g. `code snippet that read a CSV file from the local filesystem`)
- **Keywords**: a set of keywords that are used to trigger the code snippet.
- **Tags**: a set of tags to organize your code snippets.
- **Filename pattern**: this snippet only applies to a file that matches this pattern. 
- **Shortcut**: a string to type in your IDE and import your code snippet.

You can also add the new code snippet to an existing cookbook.

![Code snippet metadata](/img/coding-assistant/add-new-snippet-03.png)

You can create new code snippets directly from your IDE by selecting the text and clicking the create a code snippet option.

### How to share a public code snippets?

You can go to the public code snippet you want to share and click on the Share button in the options on the right. You can share code snippets on social media, a direct link, and as markdown or HTML. To share private code snippets, go to [Group Sharing](./share-recipes-groups.md)

![Share a public code snippets](/img/coding-assistant/share-snippet-01.png)

### Using a code snippet

Use public code snippets directly in your IDE and browser. Install the plugin for [VS Code](./coding-assistant-vscode.md), [JetBrains](./jetbrains.md) and [Google Chrome](./chrome.md).


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

A cookbook is a collection of code snippets. You can add multiple code snippets in the same cookbook. Cookbooks can be either public or private and you cannot change the cookbook visibility once created. When a cookbook is created as public, it's automatically shared and reusable by anybody on the platform. Only you or shared groups can reuse a code snippet when created as private.

![Cookbooks list](/img/coding-assistant/cookbook-01.png)

### How to share a public cookbook?

You can go to the public cookbook you want to share and click on the Share button in the options on the right. To share private cookbooks, go to [Group Sharing](./share-recipes-groups.md)

![Cookbook details](/img/coding-assistant/cookbook-02.png)