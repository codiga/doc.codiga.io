---
id: api-coding-assistant
title: Codiga GraphQL API for Coding Assistant
sidebar_label: Coding Assistant API
description: Codiga API to access Code Snippets, Cookbooks and other resources from Codiga.
keywords:
  - coding assistant
  - code snippets
  - code snippet
  - code snippet API
---

:::info
If you have any questions about the API, please join [our Slack channel](https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ),
we provide direct support on our channel.
:::

:::tip
This section of the documentation is focused on the API for the Coding Assistant. You can learn about how to access
the API and how to authenticate on [this page](/docs/api).
:::

## Generalities

:::info
In the API, a Code Snippet is called Recipe. When reading the documentation you can change/switch `Code Snippet`
for `Recipe` and `Recipe` for `Code Snippet`.
:::

### Authentication

Authentication is discussed in the commonalities of the [GraphQL API here](/docs/api).

### Fingerprint

In order to improve the recommendation system, we need to know what search the user is doing and what snippets
they are using. In order to do so, we used an anonymized fingerprint system. Some requests require a unique
fingerprint to be sent. This fingerprint must be generated locally and must be unique.

This fingerprint is not used to track nor identify users (e.g. the API works if users are not authenticated). It
is used to improve the recommendation system.

## Types

Below are all the GraphQL types returned by the API for the Coding Assistant.

### AssistantRecipe

The `AssistantRecipe` type has the following attributes:

- `id`: unique identifier (a number)
- `name`: name of the recipe
- `description`: description stored in the `Markdown` format
- `isPublic`: boolean indicating if the recipe is public or not
- `filenamePatterns`: list of patterns a file must match so that the snippet applies.
- `keywords`: list of keywords to improve the recipe search
- `tags`: list of tags to simplify the organization of the snippet
- `code`: code of the snippet encoded in Base64. This is the RAW format of the snippet with all variables. You can learn more about the [variables system here](/docs/coding-snippets/snippets-variables/)
- `imports`: list of imports for the snippet (e.g. `import java.util.*` for Java or `from datetime import datetime` for Python)
- `language`: language of the snippet. This is an enumeration, see below for the list of supported languages and their enumeration values.
- `creationTimestampMs`: when the recipe was created.
- `isSubscribed`: indicates if the user favorited the recipe/snippet. Returns false if the user is not authenticated.
- `groups`: list of groups the recipe is shared with.
- `commentsCount`: number of comments on the recipe.
- `comments`: list of comments on the recipe (each has the type `AssistantRecipeComment`).
- `cookbook`: a cookbook (type `AssistantCookbook`) if the snippet is associated with a cookbook. `null` otherwise.
- `upvotes`: number of upvotes received (note: only public recipes receive upvotes).
- `downvotes`: number of downvotes received (note: only public recipes receive downvotes).
- `isUpVoted`: returns true if the current logged in user upvoted the recipe. Returns false if the user is not authenticated or did not upvote.
- `isDownVoted`: returns true if the current logged in user downvoted the recipe. Returns false if the user is not authenticated or did not downvote.

### AssistantRecipeWithStats

The `AssistantRecipeWithStats` type has the same attributes as `AssistantRecipe` except that it adds
one attribute:

- `uses`: the number of time the recipe has been used.

### AssistantCookbook

The `AssistantCookbook` type has the following attributes:

- `id`: unique identifier (a number)
- `name`: name of the cookbook
- `description`: description stored in the `Markdown` format
- `isPublic`: boolean indicating if the cookbook is public or not
- `createdTimestampMs`: when the cookbook was created.
- `isSubscribed`: indicates if the user favorited the cookbook. Returns false if the user is not authenticated.
- `recipes`: list of recipes (type `AssistantRecipeWithStats`) in the cookbook. This query has sub-selection filter values.
- `recipesCount`: count of recipes. This query has sub-selection filter values.
- `languages`: list of languages supported by the cookbook. It's the list of all languages from all recipes in the cookbook.
- `dependendencies`: list of dependencies of the cookbook. It's the list of all dependencies from all recipes in the cookbook.
- `groups`: list of groups the cookbook is shared with.
- `upvotes`: number of upvotes received (note: only public cookbooks receive upvotes).
- `downvotes`: number of downvotes received (note: only public cookbooks receive downvotes).
- `isUpVoted`: returns true if the current logged in user upvoted the cookbook. Returns false if the user is not authenticated or did not upvote.
- `isDownVoted`: returns true if the current logged in user downvoted the cookbook. Returns false if the user is not authenticated or did not downvote.

### AssistantRecipeComment

The `AssistantRecipeComment` type has the following attributes:

- `id`: unique identifier (a number)
- `creationTimestampMs`: when the comment was created.
- `author`: the author of the comment (a `User` type). The value is `null` if the user does not share their profile
- `comment`: the comment value stored in the `Markdown` format.
- `upvotes`: number of upvotes received (note: only public cookbooks receive upvotes).
- `downvotes`: number of downvotes received (note: only public cookbooks receive downvotes).
- `isUpVoted`: returns true if the current logged in user upvoted the comment. Returns false if the user is not authenticated or did not upvote.
- `isDownVoted`: returns true if the current logged in user downvoted the comment. Returns false if the user is not authenticated or did not downvote.

## Enumeration

Below are all the GraphQL enumerations returned by the API for the Coding Assistant.

### LanguageEnumeration

The `LanguageEnumeration` represents the language of a snippet. It has the following values: `Docker`, `Objectivec`, `Terraform`, `Json`, `Yaml`, `Typescript`, `Swift`, `Solidity`, `Sql`, `Shell`, `Scala`, `Rust`, `Ruby`, `Php`, `Python`, `Perl`, `Kotlin`, `Javascript`, `Java`, `Html`, `Haskell`, `Go`, `Dart`, `Csharp`, `Css`, `Cpp`, `C`, `Apex`

## Queries

### User queries

When the user is authenticated, you can query the recipes from the user. This queries **only** recipes
and cookbooks the user created.

For example, the following recipes returns the first 100 recipes created by the user for Python.

```graphql
{
  user {
    assistantRecipes(howmany: 100, skip: 0, language: Python) {
      id
      name
      code
    }
  }
}
```

To get the total count of recipes created by the user, you can use the following query

```graphql
{
  user {
    assistantRecipesCount(language: Python)
  }
}
```

Similarly, you can get the cookbooks created by the logged in user

```graphql
{
  user {
    assistantCookbooks(howmany: 100, skip: 0) {
      name
      recipes(howmany: 100, skip: 0) {
        id
        name
        code
      }
    }
  }
}
```

And also the count of cookbooks created by this user

```graphql
{
  user {
    assistantCookbooksCount
  }
}
```

### Recipes shared with your group

:::info

This query only works when the user is logged in.
:::

The `sharedRecipes` query returns the recipes with the users in their groups.

The following query returns the first 100 recipes shared with the users groups.

```graphql
{
  sharedRecipes(howmany: 100, skip: 0) {
    id
    name
    code
    groups {
      id
      name
    }
  }
}
```

### Shared Recipes Count

:::info

This query only works when the user is logged in.
:::

The `sharedRecipesCount` query returns the count of recipes shared with your groups.
It helps for pagination (e.g. how many recipes can you expect).

```graphql
{
  sharedRecipesCount
}
```

### Shared Cookbooks

:::info

This query only works when the user is logged in.
:::

The `sharedCookbooks` query returns cookbooks being shared with the current user groups.

```graphql
{
  sharedCookbooks(howmany: 100, skip: 0) {
    id
    name
    groups {
      id
      name
    }
  }
}
```

### Get the count of shared cookbooks

:::info

This query only works when the user is logged in.
:::

The `sharedCookbooksCount` query returns how many cookbooks are shared with your groups.

It helps for pagination (e.g. how many recipes can you expect).

```graphql
{
  sharedCookbooksCount
}
```

### Get a recipe/snippet

The `assistantRecipe` takes an identifier as a parameter and return the recipe.

- If the recipe is public, it is returned even if the user is not logged.
- If the recipe is private, it returns the recipe if the user has access to it. Otherwise, it returns `null`.

#### Example of query

```graphql
{
  assistantRecipe(id: 52) {
    id
    name
    code
    filenamePatterns
    keywords
    tags
    isPublic
    creationTimestampMs
  }
}
```

### Get a public recipe/snippet

#### Example of query

```graphql
{
  assistantPublicRecipe(id: 52) {
    id
    name
    code
    filenamePatterns
    keywords
    tags
    isPublic
    creationTimestampMs
  }
}
```

### Get Public Recipes

The `assistantPublicRecipes` query returns public recipes according to filters.

List of filters:

- `howmany` (required): how many recipes to take (used for pagination)
- `skip` (required): how many recipes to skip (used for pagination)
- `language` (optional): languages of the recipes (list of `LanguageEnumeration`)
- `keyword` (optional): if entered, the recipe must have this keyword
- `tag` (optional): if entered, the recipe must have this tag

Example of query

```graphql
{
  assistantPublicRecipes(
    languages: [Javascript]
    howmany: 100
    skip: 0
    name: "react"
    keyword: "react"
  ) {
    name
  }
}
```

### Count of Public Recipes

To count the number of public recipes, you can use the `assistantPublicRecipesCount` query. This
query takes the same parameters as the `assistantPublicRecipes` query except the `howmany` and `skip`
parameters. This is used for pagination.

Example of query

```graphql
{
  assistantPublicRecipesCount(
    languages: [Javascript]
    name: "react"
    keyword: "react"
  )
}
```

### Semantic Search

The `assistantRecipesSemanticSearch` query is doing a semantic search on all queries.
This is what is used on our main app and in the IDE when searching for a recipe.

This query takes the following parameters:

- `languages`: list of languages to search (list of `LanguageEnumeration`)
- `howmany` (required): how many recipes to take (used for pagination)
- `skip` (required): how many recipes to skip (used for pagination)
- `onlyPublic` (optional): if `true`, only public recipes are returned
- `onlyPrivate` (optional): if `true`, only private recipes are returned
- `filename` (optional): list of the file the search is initiated from. Will apply this filename to check if it matches with some recipes using the `filenamePatterns` attribute of a recipe.
- `dependencies` (optional): list of packages used by the client (got from `requirements.txt`, `package.json`, etc)

Example of query

```graphql
{
  assistantRecipesSemanticSearch(
    languages: [Javascript]
    howmany: 100
    skip: 0
    onlyPublic: false
    onlyPrivate: false
    term: "react component"
    dependencies: ["react"]
    filename: ""
  ) {
    id
    name
    code
  }
}
```

### Get a cookbook

The `assistantCookbook` query takes an identifier as a parameter and returns the cookbook.

- If the cookbook is public, it is returned even if the user is not logged.
- If the cookbook is private, it returns the cookbook if the user has access to it. Otherwise, it returns `null`.

Example of query

```graphql
{
  assistantCookbook(id: 100) {
    id
    name
    recipes(howmany: 100, skip: 0) {
      name
    }
  }
}
```

### Get a public cookbook

The `assistantPublicCookbook` query works exactly as `assistantCookbook` except that
it returns only public cookbooks.

### Get a list of public cookbooks

The `assistantPublicCookbooks` query look for public cookbooks.

It requires the following attributes:

- `name` (optional): name of the cookbook
- `howmany` (required): how many cookbooks to take (used for pagination)
- `skip` (required): how many cookbooks to skip (used for pagination)
- `languages` (optional): languages of the cookbook (list of `LanguageEnumeration`)

Example of query:

```graphql
{
  assistantPublicCookbooks(howmany: 100, skip: 0, languages: [Python]) {
    id
    name
  }
}
```

### Get the list of public cookbooks

The `assistantPublicCookbookCount` query gives you the list of public cookbooks.
It takes the same arguments as `assistantPublicCookbooks` except the `howmany` and `skip` parameters.

Example of query

```graphql
{
  assistantPublicCookbooksCount
}
```

## Mutations

### Create a Recipe

The mutation `createAssistantRecipe` creates a new recipe. You need to pass
the following required attributes:

- name: name of the recipe
- description: description of the recipe (Markdown format)
- language: language of the recipe
- isPublic: boolean to indicate if the recipe is public
- code: code of the recipe/snippet in base64.

```
mutation{
  createAssistantRecipe(name:"", description:"", language:Scala,
                        tags:[], imports:[],code:"", isPublic:false,
                        cookbookId: <cookbook-id>) {
    id
    name
    description
    ...
  }
}
```

### Create a Cookbook

The mutation `createAssistantCookbook` creates a new cookbook. You need to pass
the following required attributes:

- name: name of the recipe
- description: description of the recipe (Markdown format)
- isPublic: boolean to indicate if the recipe is public

```
mutation{
  createAssistantCookbook(name:"cookbook", description:"super cookbook", isPublic:true){
    id
    name
    isPublic
  }
}
```

### Delete a Recipe

```graphql
mutation {
  deleteAssistantRecipe(id: 1)
}
```

### Delete a Cookbook

```graphql
mutation {
  deleteAssistantCookbook(id: 1)
}
```

### Add a recipe to a cookbook

The mutation `addRecipeToCookbook` adds a recipe to a cookbook. It checks that the user owns
the recipe and has access to the cookbook. It returns `ok` if the recipe is added to the cookbook.
Otherwise, it returns an error.

```
graphql
mutation{
  addRecipeToCookbook(recipeId: XXX, cookbookId: YYYY)
}
```

### Remove a recipe from a cookbook

The mutation `removeRecipeFromCookbook` removes a recipe from a cookbook. It checks that the recipe is
in the cookbook and that the user has access to the cookbook. It returns `ok` if the recipe is added to the cookbook.
Otherwise, it returns an error.

```
graphql
mutation{
  removeRecipeFromCookbook(recipeId: XXX, cookbookId: YYYY)
}
```

## Common Queries and Mutations

### Create a new assistant cookbook

The following request creates a new cookbook. The query returns a AssistantCookbook object that
can be queried later.

The cookbook is associated with the user.

**IMPORTANT**: the visibility of a cookbook cannot be changed later.

```
mutation{
  createAssistantCookbook(name:"cookbook", description:"super cookbook", isPublic:true){
    id
    name
    isPublic
  }
}
```

### Update a cookbook

This query updates an assistant cookbook. The identifier must be passed as parameter.

Only users that own the cookbook can update it.

```
mutation{
  updateAssistantCookbook(id: <cookbook-id>, name:"new cookbook", description:"cookbook for python pandas"){
    id
    name
    isPublic
  }
}
```

### Create a new assistant recipe

Create a new assistant recipe. The recipe is then owned by the user
issuing the request. This query returns the new recipe.

Required parameters (other are optional and can be omitted):

- name: name of the recipe (string)
- description: description of the recipe (Markdown format)
- code: code of the recipe (encoded in base64)
- language: language of the recipe (enumeration)
- keywords: list of keywords (list of strings)
- isPublic: boolean to indicate if the recipe is public or not

**IMPORTANT**: the visibility of a recipe cannot be changed later.

```
mutation{
  createAssistantRecipe(name:"", description:"", language:Scala,
                        tags:[], imports:[],code:"", isPublic:false,
                        cookbookId: <cookbook-id>) {
    id
    name
    description
    ...
  }
}
```

### Update a recipe

Update a recipe and returns it. The recipe must be owned by the user
issuing the request.

Required parameters (other are optional and can be omitted):

- name
- description
- language
- keywords

```
  updateAssistantRecipe(id: <recipe-id>, name:"my recipe updated", description:"foobar", keywords:["create", "csv", "file"], tags: ["tags"],
                        filenamePatterns:[], language:C, cookbookId: 2){
    id
    name
    description
  }
```

### Add a dependency on a recipe

Add a dependency to a recipe.

Required parameters (other are optional and can be omitted):

- id (identifier to the recipe we add the constraint)
- name: name of the dependency

```
   addDependencyConstraint(id:<recipe-id>, name: "react", minVersion:"1.2.0", maxVersion:"2.1.0")
```

### Remove a dependency constraint

Remove a dependency to a recipe.

All parameters are required.

```
   removeDependencyConstraint(id:1, name:"")
```

### List all public recipes

List all public recipes based on search terms/criteria.

Required parameters (other are optional and can be omitted):

- howmany
- skip

```
{
  assistantPublicRecipes(howmany:100, skip:0, languages:[Python, C], tag:"", keyword:"", dependency:""){
    id
    name
    comments{
      id
      comment
      rating
      securityFlag
      author{
        username
      }
    }
  }
}
```

### Get a public recipe

Get a public recipe using its identifier. If the recipe does not exist
or is not public, the request returns null.

Required parameters (other are optional and can be omitted):

- id

```
{
  assistantPublicRecipe(id: <recipe-id>) {
    id
    name
    comments{
      id
      comment
      rating
      securityFlag
      author{
        username
      }
    }
  }
}
```

### Get a public cookbook

Get a public cookbook using its identifier. If the cookbook does not exist
or is not public, the request returns null.

Required parameters (other are optional and can be omitted):

- id

```
{
  assistantPublicCookbook(id: <cookbook-id>) {
    id
    name
  	description
    recipes{
      name
      code
    }
  }
}
```

### Post a comment on a public recipe

Post a comment and the logged-in user will be the author of the comment.

All parameters are required

```
mutation{
  createAssistantRecipeComment(id: <recipe-id>, comment:"bla", rating: 5, securityFlag:false)
}
```

### Remove a comment from a public recipe

Delete a comment. The user issuing the request must be the author of the comment.

All parameters are required

```
mutation{
  deleteAssistantRecipeComment(id: <comment-id>)
}
```

### Get recipes owned by the logged in user

You need to query the `assistantRecipes` on the user object as is.

```
{
  user{
    assistantRecipes{
      id
      name
      code
    }
  }
}
```

### Get a recipe owned by the logged in user

```
{
  user{
    assistantRecipe(id: <recipe-id>{
      id
      name
      code
    }
  }
}
```

### Get cookbooks owned by the logged in user

```
{
  user{
    assistantCookbooks{
      id
      name
      code
    }
  }
}
```

### Get a recipe owned by the logged in user

```
{
  user{
    assistantCookbook(id: <cookbook-id>{
      id
      name
      code
    }
  }
}
```

### List all recipes for a client

This is the request used by clients to get code recipes.

It returns a list of recipes that are relevant based on the request.
The list of items being returned is sorted by relevance.

Required parameters (other are optional and can be omitted):

- language
- keywords
- fingerprint (if the user is not authenticated)

```
{
  getRecipesForClient(fingerprint:"<user-fingerprint-generated-by-client>", keywords:["read", "csv", "file"],dependencies:[],parameters:"",language:Python){
    code
    keywords
    description
    id
  }
}
```

### Add upvote/downvote on recipe, cookbook and comment

To add an upvote or downvote, the user must use the `addVote` mutation.

The `addVote` query takes the following parameters:

- `entityId`: identifier of the entity to upvote/downvote
- `entityType`: type of the entity to upvote/downvote. It's an enumeration with the following values: `Recipe`, `Cookbook` or `Comment`.
- `isUpvote`: boolean to indicate if the user wants to upvote or downvote (`true` for upfvote, `false` for downvote).

**Notes**

- if the user already upvoted the recipe and issue a new upvote or downvote, the previous vote will be removed.
- if the user is not logged, the mutation returns an error with the code `user-not-logged`.

Example of query.

```graphql
mutation {
  addVote(entityId: 1, entityType: Cookbook, isUpvote: true)
}
```

### Delete upvote/downvote on recipe, cookbook and comment

To remove an upvote or downvote, use the `deleteVote` mutation.

The `deleteVote` query takes the following parameters:

- `entityId`: identifier of the entity to upvote/downvote
- `entityType`: type of the entity to upvote/downvote. It's an enumeration with the following values: `Recipe`, `Cookbook` or `Comment`.

```graphql
mutation {
  deleteVote(entityId: 1, entityType: Cookbook)
}
```

**Notes**

- if the user is not logged, the mutation returns an error with the code `user-not-logged`.

### Get the number of upvotes/downvotes on an element

To get the number of upvotes or downvotes on an element, query the `upvotes` and `downvotes` attribute of this element (recipe, cookbook or comment).

Example of query for a recipe

```graphql
{
  assistantRecipe(id: 1) {
    upvotes
    downvotes
  }
}
```

### Know if a user put an upvote/downvote on an element

If you want to know if the current logged-in user upvoted an element, query the `isUpVoted` or `isDownVoted` attribute of the element.

Example of query for a recipe

```graphql
{
  assistantRecipe(id: 1) {
    isUpVoted
    isDownVotes
  }
}
```

**Notes**

- if the user is not logged, these attributes will always be `false`.
