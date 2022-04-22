---
id: coding-assistant-your-own-plugin
title: Implement a Plugin
description: Plugin specification for the Codiga coding assistant. Implement your own Codiga Integration.
keywords:
  [
    coding assistant,
    smart coding assistant,
    plugin,
    code snippets,
    secure code,
    safe code,
  ]
---

# Codiga's official plugin specifications

In this documentation you'll find everything you need to know to create your own plugin for Codiga's coding assistant in any IDE. Taking as a reference the [VSCode plugin specification](/docs/coding-assistant/coding-assistant-vscode-spec/).

:::note

All Codiga API is public and you can integrate all our Code Snippets in any product. Codiga should be seen as a platform for Code Snippets you can reuse in any product.

:::

## Overview

Codiga's coding assistant is a tool for developers to move faster, and remove friction in their development experience. This is done by creating, and using Smart Code Snippets directly in any IDE so they can save time while coding in any of our supported languages.

A Smart Code Snippet is a piece of code that you can share and reuse. In Codiga you can add some metadata to a code snippet:

- **Name**: Short name that describes the snippet.
- **Description (Optional)**: The description of the snippet in markdown.
- **Keywords (Optional)**: A set of words that help indexing this piece of code
- **Language**: The programming language this recipe is written on. This is useful so we can show in the IDE only recipes that are relevant to the file the user is on. So, for example, if we're in a `Python` file we don't suggest `JavaScript` recipes.
- **Library (Optional)**: What framework/library does the code snippet use? This is useful when searching code snippets in the IDE as you only show the ones relevant to the libraries that are installed in the project.
- **Shortcut (Optional)**: A shortcut is an expression that the user can type in their IDE to import a specific code snippet, directly in the code editor. For example, `for.each` can be a shortcut to import the snippet `array.forEach((currentItem) => {});` in JavaScript.
- **Tags (Optional)**: A set of words that help as a mean to organize code by labeling it.
- **Filename pattern**: A [glob](<https://en.wikipedia.org/wiki/Glob_(programming)>) pattern to describe in what files should the snippet be imported.
- **Imports (Optional)**: The piece of code that has the imports required for the recipe to work. For example: `import React from 'react'` would be a value import value. These imports are added to the file when importing the snippet.
- **Cookbook (Optional)**: Cookbooks are a group of snippets that are related, they're used to organize snippets and make it easy to find them. For example `Django snippets` could be a cookbook for Python. Or `React snippets` could be a cookbook for JavaScript.
- **Privacy**: Sets the snippet to be publicly accessible or for personal use.

A Codiga plugin is a tool for users to create and use these snippets easy from their IDE of choice.

To learn more about Code Snippets you can go to our [Snippets 101 page](https://www.snipt.dev/snippets-101)

## Getting Started

Let's see how you can interact with the Codiga API.

1. Go to the [API playground](https://api.codiga.io/graphql/playground)
2. Enter the GraphQL query below.
3. See the result and the `code` and `presentableFormat`
4. Decode the `code` and `presentableFormat` on [https://www.base64decode.org/](https://www.base64decode.org/).

```graphql
{
  assistantPublicRecipe(id: 52) {
    id
    name
    code
    presentableFormat
    owner {
      username
    }
    comments(howmany: 100, skip: 0) {
      id
      comment
    }
  }
}
```

You now know how to query a public snippet in our API! Congratulations, this is a huge step forward!

## Codiga GraphQL API

:::info

Internally we call code snippets `recipes`. Take this into account when reading the rest of the document and consuming the API.

:::

The Codiga API is implemented with [GraphQL](https://spec.graphql.org/June2018/). You can explore the Codiga API GraphQL in the [Playground](https://api.codiga.io/graphql/playground). There you'll have access to all queries and mutations that you can use to implement any client. Below we're going to explain more the relevant parts of the API, specifically for plugin creation.

There are some queries that are publicly accessible, for example `assistantPublicRecipes`. But there are others that require the user to be authenticated, for example `assistantRecipes`. The authentication process for a plugin is done by adding an API token to the header of any query or mutation.

You can see how to generate an API token in our [VS Code Integration documentation](/docs/coding-assistant/coding-assistant-vscode/#linking-your-codiga-account).
This token has to be assigned to the `X-Api-Token` header.

In the playground you can click on `HTTP HEADERS` and add the `X-Api-Token` so you can test the API directly from there.

## Snippet/Recipe Creation

There are different ways to create a snippet in Codiga, first of all and the most common is [directly from the platform](https://app.codiga.io/assistant/recipe/create).

The current standard way to create a recipe from a plugin is by redirecting the user to the [snippet creation page](https://app.codiga.io/assistant/recipe/create) with some extra parameters taken from the IDE. You can see in [this blog post](https://www.codiga.io/blog/share-code-snippets-2022/) how recipe creation works.

The query params that you can add to the creation url `https://app.codiga.io/assistant/recipe/create` are:

- **code**: The code snippet encrypted in `Base64` format.
- **imports**: The imports encrypted in `Base64` format.
- **language**: Name of the programming language for the snippet. For example `Java`, `Python`, `Javascript`, etc.
- **library**: Name of the library for the snippet. e.g `React`, `Django`, `Flask`, etc.
- **visibility**: `private` or `public`.

For example if you want to create a [snippet in Javascript to create a React component with props](https://app.codiga.io/hub/recipe/226/view) redirect to the following URL:

`https://app.codiga.io/assistant/recipe/create/?name=Copy%20of%20React%20component%20with%20props&language=Javascript&library=React&code=ZnVuY3Rpb24gJltVU0VSX0lOUFVUOjE6Q29tcG9uZW50TmFtZV0ocHJvcHMpIHsKJltDT0RJR0FfSU5ERU5UXXJldHVybiA8ZGl2PiZbVVNFUl9JTlBVVDowXTwvZGl2PjsKfQomW1VTRVJfSU5QVVQ6MTpDb21wb25lbnROYW1lXS5wcm9wVHlwZXMgPSB7fTsKZXhwb3J0IGRlZmF1bHQgJltVU0VSX0lOUFVUOjE6Q29tcG9uZW50TmFtZV07&imports=aW1wb3J0IFJlYWN0IGZyb20gInJlYWN0Ijs=&visibility=public`

For the current implementation of the plugins we're just sending `code` and `language` parameters, as that is the only information we have available and we know is relevant when creating the snippet.

The language parameter is a GraphQL enumeration with the following values: `Docker`, `Objectivec`, `Terraform`, `Json`, `Yaml`, `Typescript`, `Swift`, `Solidity`, `Sql`, `Shell`, `Scala`, `Rust`, `Ruby`, `Php`, `Python`, `Perl`, `Kotlin`, `Javascript`, `Java`, `Html`, `Haskell`, `Go`, `Dart`, `Csharp`, `Css`, `Cpp`, `C`, `Apex`.

## Snippet variables

There are relevant variables that you can add to a code snippet that will help injecting relevant contextual information in the plugins. A variable is a placeholder that is being replaced by a value from the user.
The snippet variables are being shown in the RAW reprepsentation of the snippet (attribute `code` of the GraphQL object). When using the `presentableFormat`, we show default values for the placeholder (see the format section below).

For more information refer to the [recipe variables documentation](https://doc.codiga.io/docs/coding-assistant/coding-assistant-recipe-variables/).

## Snippet formats

There are multiple snippets formats exposed by the GraphQL API. The biggest two of interest are `presentableFormat` and `code`:

- `code` represent the raw code as stored in the Codiga data store. No manipulation is done on the snippet at all.
- `presentableFormat`: represents the presentable format of the snippet

When querying

Go in the [GraphQL playground](https://api.codiga.io/graphql/playground) and execute the following query: to see the different formats.

```graphql
{
  assistantPublicRecipe(id: 52) {
    id
    name
    code
    presentableFormat
  }
}
```

You can then notice both formats being returned. These formats are being base64 encoded, use a decoder to get the text result.

## Snippet/Recipe usage

Besides being able to create snippets and recipes, you are also able to search them and use them from the IDEs with different methods such as: `shortcuts`, `semantic search`.

## Fingerprint

A fingerprint in Codiga is a random string or signature that represents a session in any editor, it is usually stored in the local storage of the snippet or the browser and it's used for tracking purposes. Many of the graphql queries require it as a parameter. The Codiga API uses a fingerprint to make better recommendations to the user and track what snippets are being used by the user.

As a reference, you can see the current [VSCode fingerprint implementation](https://github.com/codiga/vscode-plugin/blob/616eed6bc04336148f44989585a643aa509ce1a7/src/utils/configurationUtils.ts)

## Shortcuts

Shortcuts, above, are an expression that the user can type in the editor and will pop up a set of suggestions in the IDE. For a reference you can see how they work in VS Code in our official [Shortcuts are now Available on VS Code](https://www.codiga.io/blog/shortcuts-in-vscode/) blog post.

Shortcuts are triggered by typing `.` or `/` at the beginning of a line. Or by typing `.` at any position. Suggested recipes by shortcut will only be shown if they match:

- `language` (Required): which is taken by the file extension
- `dependencies`: Can be an empty list. Which is taken from the relevant package manager. In the case of `Javascript` for example, it is the `package.json` file, or in the case of Python, it is the `requirement.txt` file. These will be matched if any `library` is set in the snippet.
- `term` (Optional): which is whatever the user types after the triggers (`.` or `/`). If nothing is sent here all shortcuts relevant to the `language` and `dependencies` are listed. If something else is typed after the trigger, it will match the `shortcut` field of the snippets. One important thing is that the shortcut shouldn't include the first character if this is `.` or `/`.
- `filename` (Optional): which is the relative path of the current file, for example `project/components/component.java`. This will match with the specific `filename patterns` set on the metadata of the snippets.

These shortcuts can be implemented by using the following GraphQL API query:

```graphql
getRecipesForClientByShortcut(
    fingerprint: String
    term: String
    dependencies: [String!]!
    parameters: String
    onlyPrivate: Boolean
    onlyPublic: Boolean
    language: LanguageEnumeration!
    filename: String
): [AssistantRecipe!]!
```

Go to the [GraphQL playground](https://api.codiga.io/graphql/playground) and execute the following request (do not forget to replace the fingerprint by a UUID):

```graphql
{
  getRecipesForClientByShortcut(
    fingerprint: <YOUR-FINGERPRINT>
    term: "react"
    dependencies: []
    language: Javascript
  ) {
    id
    code
    owner {
      username
    }
  }
}
```

There are some extra parameters apart from the described above which might be useful in this query:

- `fingerprint` (required): Random string useful to track a session.
- `onlyPrivate` (optional): Return only private recipes. API Token header has to be set in order to retrieve private user recipes.
- `onlyPublic` (optional): Return only public recipes.

## Detect when new shortcuts are available

Most implementation caches the shortcuts in the local storage or memory. However, you want to reload shortcuts when new shortcuts are available.

Do do so, clients are polling when a new shortcut is available using the `getRecipesForClientByShortcutLastTimestamp`.

Go to the GraphQL playground and try this query:

```graphql
{
  getRecipesForClientByShortcutLastTimestamp(
    fingerprint: "owiejfowiejf"
    dependencies: []
    language: Javascript
  )
}
```

It returns the timestamp of the last recipe/snippet created for this `language` and `dependencies`.

The current implementation of shortcuts for the VS Code extension uses a polling system to have always a `cache` of relevant shortcuts. This is useful to avoid querying the API everytime the user looks for a shortcut and increase speed of the suggestions showing up.

For a reference you can see our current polling [VSCode implementaion](https://github.com/codiga/vscode-plugin/blob/616eed6bc04336148f44989585a643aa509ce1a7/src/graphql-api/shortcut-cache.ts#L199)

So the query `getRecipesForClientByShortcutLastTimestamp` is used in the current implementations for `cache management`. The timestamp is stored in local storage, and if we do a request and this timestamp has changed, it means there are new relevant shortcuts and we should fetch them again.

## Semantic search: Completions on comment, or quick pick menu

When doing a semantic search, we get a list of recipes based on what the user asks (for example `create react component` or `read a file`).
This search can be triggered either using comments (like GitHub CoPilot does) or using a search box.

Try the following query in the [GraphQL playground](https://api.codiga.io/graphql/playground)

```graphql
{
  assistantRecipesSemanticSearch(
    howmany: 100
    skip: 0
    languages: [Javascript]
    term: "react"
    dependencies: ["react"]
    onlyPublic: false
    onlyPrivate: false
  ) {
    id
    name
    code
  }
}
```

Where:

- `languages`: Set of relevant languages. Usually from a plugin it's just a single item depending on the file extension.
- `term` (Optional): If a value is set, this is the text that will match snippets by their `description`, `name` or `keywords`. This is the text that the user types in the comment or in the quick pick menu.
- `onlyPrivate`(Optional): flag to retrieve only private recipes. The API Token header has to be set and valid in order to fetch private user recipes.
- `onlyPublic` (Optional): flag to retrieve only public recipes.
- `howmany`: Pagination argument, describes the number of recipes that have to be retrieved.
- `skip`: Pagination argument, describes the number of recipes that have to be skipped.
- `dependencies`: Can be an empty list. Which is taken from the relevant package manager. In the case of `Javascript` for example, it is the `package.json` file, or in the case of Python, it is the `requirement.txt` file. These will be matched if any `library` is set in the snippet.
- `filename`(Optional): which is the relative path of the current file, for example `project/components/component.java`. This will match with the specific `filename patterns` set on the metadata of the snippets.

### Comments

The idea of this is to bring an experience to Codiga similar to the one from [GitHub Copilot](https://copilot.github.com/), where you type a comment in the editor, and you recieve an inline code suggestion, also you can explore different suggestions with a relevant command or button that shows up.

Right now we use for VS Code the [VSCode proposed inline suggestions API](https://code.visualstudio.com/updates/v1_60#_inline-suggestions-in-autocomplete) to accomplish this same "ghosted text" effect that Copilot uses. But as it's not officially available yet, but it's just a proposed beta API, we have not been able to publish this feature to the marketplace.

### Snippet selection menu

A quick pick menu is just an input that shows up in the IDE where you can do a google-like search, and see the results in real time. For more information you can check our current documentation for semantic search in [VSCode](https://doc.codiga.io/docs/coding-assistant/coding-assistant-vscode/#using-a-recipe) and [JetBrains](https://doc.codiga.io/docs/coding-assistant/coding-assistant-jetbrains/#using-a-recipe).

## Record access

When a user search, or selects a recipe, in order to have relevant metrics, we have a GraphQL mutation to record any of these interactions:

```
Mutation.recordAccess(
    accessType: AccessType!
    actionType: ActionType!
    metadata: String
    recipeId: Long
    userFingerprint: String
): String!
```

Where `AccessType` is an enum describing where was this access from:

```
enum AccessType {
    Cli
    Sublime
    Firefox
    Chrome
    VsCode
    IntelliJ
    Frontend
    Api
    Web
}
```

and `ÀctionType`, whose values relevant for search and usage of recipes are:

```
enum ActionType {
    AssistantRecipeSearchShortcut
    AssistantRecipeSearch
    AssistantRecipeUse
}
```

- `metadata`: is just optional set of extra information relevant to the event.
- `recipeId`: if a recipe is used/selected, this should be the `id` of that recipe.
- `fingerprint`: fingerprint of the session, described above.

## Dependencies argument

All queries (`assistantRecipesSemanticSearch`, `getRecipesForClientByShortcut`, `getRecipesForClientByShortcutLastTimestamp`, etc.) all support
a `dependencies` argument. This is a list of strings.

This `dependencies` argument limits the search to recipes that have an **explicit** dependency on the given list of libraries.

To fill the list of `dependencies`, scan the dependency file of the project. For example, if you are in a JavaScript project, read the
`package.json` file, extract the name of dependencies and pass them as the `dependencies` argument. If you are in a Python project,
read the `requirements.txt` file, extract the dependencies and pass them to the `dependencies` argument. This will ensure that snippets being
returned are the one corresponding to the dependencies of the project.

## Filename argument

Some queries (`assistantRecipesSemanticSearch`, `getRecipesForClientByShortcut`, etc.) requires a `filename` argument. This argument must be
the file path relative to the project. For example, if you request snippet in a file name `src/mypackage/foobar.py`, you should pass
`src/mypackage/foobar.py` as the filename argument.

Some snippet are designed to only match a given filename (for example, snippet for testing in JavaScript must match the pattern `**/*.test.js`). Passing
the `filename` argument will ensure that the snippet is returned if it matches the pattern.
