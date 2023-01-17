---
id: vscode-spec
title: Codiga VS Code Plugin Specification
sidebar_label: VS Code Specifications
description: Specification for the Coding Assistant's VSCode plugin to document queries, authentication, and recipes management
keywords:
  [
    coding assistant,
    smart coding assistant,
    vs code,
    vscode,
    code snippets,
    spec,
    documentation,
  ]
---

## Introduction

This is a document describing the general features of the VSCode plugin from an implementation perspective, so other developers can easily create their own plugins for any other IDEs.

## Where is it?

The VSCode plugin is an open-source project located in a [public GitHub repository](https://github.com/codiga/vscode-plugin/).

## VSCode documentation

All information related to VSCode plugin development and the VSCode API can be found [here](https://code.visualstudio.com/api).

## Structure

The root structure of the project source (e.g `/src`) is:

- **extension.ts**: Entry file for the extension which has two exported functionalities:

  - `activate()`: When the extension is activated this is run, it initializes the features of the plugin such as:

    - Initialize GraphQL client
    - Initialize local storage. Used to save cached recipes for example.
    - Creates a status bar item such that the state of the plugin is shown at the bottom of the IDE
    - Register all commands to be used in the plugin. These will be described below in detail.
    - Fetches user information (If the user is authenticated). If the user is not signed in it shows a message
    - Shows message explaining the general functionality of the plugin
    - Starts polling process for the recipes and shortcuts. Explained with details below.

  - `deactivate()`: When the extension is deactivated this is run, it stops the shortcut/recipes polling.

- **constants.ts**: Shared file with all constants that are shared between components of the plugin.

- **/utils**: Set of functionalities that are used by commands to manipulate the editor, clean data, generate custom information, etc.

  - **configurationUtils.ts**: Contains function to generate, and store in local storage, a random 10 characters string that we call a `fingerprint` which is necessary to communicate with the Codiga API.
  - **fileUtils.ts**: Utilities for analysis of a VSCode file information (e.g. does the file have imports, what's its indentation, etc.) and metadata information (e.g. what is the language given a specific extension). Some of the features in this file are:
    - Get a programming language given a file or a document. Using the extension of the file. In `getLanguageForDocument`, `EXTENSION_TO_LANGUAGE` and `getLanguageForFile`.
    - Check if a document has a specific import in `hasImport`.
    - Check what's the first line to add the imports. This depends on there being more imports, package definition or a license comment on the top of the file in which case is added after these, this works for `Python`, `Java`, `JavaScript` and `TypeScript`. See `firstLineToImport`, `firstLineToImportPython` and `firstLineToImportJavaLike`.
  - **indentationUtils.ts**: This has indentation related functionalities, useful to accommodate indentation the specific settings the user has in the IDE. When a recipe is created, all indentation is replaced by the value `&[CODIGA_INDENT]`. So in this file are the functionalities to check what's the current indentation for the document and adapt the `&[CODIGA_INDENT]` blocks to this, replacing it by the number of spaces or tabs.
  - **localStorage.ts**: Provides local storage functionalities to add, remove and update values. And also a functionality to get all stored keys from the local storage. This is useful when cleaning up recently used recipes in the `remove-recently-used-recipes` command.
  - **snippetUtil.ts**: Provides functionalities to insert (See `insertSnippet` and `addRecipeToEditor`) and remove (See `deleteInsertedCode`) code from the recipes, this is used when selecting and accepting one of the suggested recipes. For example, when the user searches for a specific recipe, we show the code of the current recipe directly in the editor, and when they explore the different suggestions we replace them. That's why this file has functionalities to add and remove code from a file.
  - **StatusBarUtils.ts**: Provides the functionality `showUser` that allows to show the status of Codiga and the username in the status bar of the editor.
  - **textUtils.ts**: Set of functionalities for text manipulation or analysis. Contains a set of useful functionalities for managing shortcuts or code:
    - Given a line and a position, return the search term (shortcut used to search recipes in Codiga) if it's a valid shortcut. See `getSearchTerm`, `isCharacterAlphaNumeric`.
    - Remove the starting dot or slash for a give shortcut. See `removeStartingSlashOrDot`. This is useful because for example, if a recipe has the shortcut `for.each`, the user can start by typing `.` or `/`, as in `.for.each` or `/for.each`. This is useful for quick access to Codiga recipes (as soon as you type `.` or `/` a set of suggestions will show up). But when doing the search in the backend the initial dot or slash has to be removed because the shortcut doesn't contain them.
    - We verify if a line is a comment, so we don't suggest shortcuts in this case. See `shouldSkipSuggestions`.
  - **uriHandler.ts**: Functionality to save the token passed by the URL in the configuration. URL is in the form of `vscode://codiga.vscode-plugin/auth?<api-token>`

- **/test**: Set of Mocha tests for code-completion, utils, variable transformation, etc.

- **/graphql-api**: Note the GraphQL API endpoint is: "https://api.codiga.io/graphql". Defined in `constants.ts` and used by the client initialization.The Codiga API works completely through GraphQL, this is where all the graphql mutations, queries and settings are:

  - **client.ts**: Where the client is initialized (See `initializeClient`) and set up through a set of functionalities.
    - In `generateHeaders` we add the header `X-Api-Token` that is used by all queries and mutations when set. This is an optional header as a user that is not authenticated can also use the Codiga extension with no problem.
    - `doQuery` and `doMutation` are the common functionalities for all API GraphQL interaction, here are injected the headers from above.
  - **configuration.ts**: Provides a function `getApiToken` that gets the API Token from the workspace configuration. For more information on the token generation refer to the [VSCode plugin user documentation](/docs/code-snippets/vscode/#linking-your-codiga-account)
  - **queries.ts**: All queries required to run the VSCode extension, there are two major ways of looking for recipes at the moment. Semantic search and shortcuts. _Semantic search_ is done by a set of words that have to match somehow the `description`, `keywords` or `name` of the recipe in order for it to be retrieved. This is used by the `codiga.recipeUse`, that pops up an input field where the user can browser snippets in a similar way of the google search bar. _Shortcuts_ are defined by the user when creating a recipe, have the form `this.is.a.shorcut`, and can be accessed in the IDE by typing `.` or `/`.
    - `GET_RECIPES`: Uses the GraphQL API `getRecipesForClient` which given `keywords`, `fingerprint`, `dependencies`, `parameters`, `language` and `filename` returns a set of available recipes.
    - `GET_RECIPES_BY_SHORTCUT`: Uses the GraphQL API `getRecipesForClientByShortcut`. Given a `term` (shortcut typed by the user which contains a `.` or a `/` to be triggered), and some extra parameters, returns the list of recipes which match the shortcut. This is used by the command `get-recipes-for-client.ts` in the `getRecipesForClientByShorcut` function.
    - `GET_RECIPES_SEMANTIC`: Given a `term`, which is a text written by the user, a `language` and pagination parameters `howmany` and `skip`, it uses the API query `assistantRecipesSemanticSearch` to return the set of matching recipes.
    - `GET_RECIPE_BY_SHORTCUT_LAST_TIMESTAMP`: Uses the query `getRecipesForClientByShortcutLastTimestamp` from the API to receive the last timestamp of the shortcuts given a language, this is useful for cache. We should fetch if and only if there was no data before OR there are new recipes available by shortcut.
  - **mutations.ts**: All mutations for the GraphQL API:
    - `recordAccess` is a mutation that lets the backend know if a recipe was used, this is useful for recipe analytics.
  - **shortcut-cache.ts**: Handles all the logic for the shortcut polling (See `fetchPeriodicShortcuts`, `fetchShortcuts`, `disableShortcutsPolling` and `enableShortcutsPolling`), and shortcut caching (See `getShortcutCache`, `garbageCollection` and `fetchShotcuts`).
  - **types.ts**: All types mapped from Graphql queries results.
  - **use-recipe.ts**: Logic for recipe usage record access.
  - **get-recipes-for-client.ts**: API to retrieve recipes by shortcut or by semantic search.

- **/commands**: All logic for creation of commands accessible by VSCode.
  - **create-recipe.ts**: Exports the command `createRecipe`, which creates a recipe by redirecting the user to the recipe creation page. Gets the code from the editor, encode it in `base64` format and calls the browser to show the recipe.
  - **list-shortcuts.ts**: Shortcut commands for fetching or listing.
    - `fetchShortcuts` update the quickpick results by doing a GraphQL query and showing the results. Uses the `getRecipesForClientByShorcut` functionality.
    - `listShortcuts`: Shows the dropdown selector to use a Codiga recipe given a shortcut. Main entry point of this command.
  - **remove-recently-used-recipes**: Remove all recently used recipes which are listed before non-used recipes. These recipes are recognized in the `localStorage` by the prefix `recently-added-recipe`.
  - **use-recipe.ts**: When opening the search quick pick menu, this command is in charge of showing the code of the focused recipe, removing it when exploring other options and inserting it to the document when user selects it. All the logic for the quick pick, insertion and update management is inside `useRecipe`.
