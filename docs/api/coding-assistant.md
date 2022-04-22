---
id: api-coding-assistant
title: GraphQL API for Coding Assistant
sidebar_label: Coding Assistant API
description: Codiga API to access Code Snippets, Cookbooks and other resources from Codiga.
keywords:
  - coding assistant
  - code snippets
  - code snippet
  - code snippet API
---

:::tip
This section of the documentation is focused on the API for the Coding Assistant. You can learn about how to access
the API and how to authenticate on [this page](/docs/api).
:::

## Generalities

### Authentication

Authentication is discussed in the commonalities of the [GraphQL API here](/docs/api).

### Fingerprint

In order to improve the recommendation system, we need to know what search the user is doing and what snippets
they are using. In order to do so, we used an anonymzed fingerprint system. Some requests requires a unique
fingerprint to be sent. This fingerprint must be generated locally and must be unique.

This fingerprint is not used to track nor identify users (e.g. the API works if users are not authenticated). It
is used to improve the recommendation system.

## Types

Below are all the GraphQL types returned by the API for the Coding Assistant.

### AssistantRecipe

### AssistantRecipeWithStats

### AssistantCookbook

## Enumeration

Below are all the GraphQL enumerations returned by the API for the Coding Assistant.

## Queries

### User queries

### `assistantRecipe`

The `assistantRecipe` takes an identifier as a parameter and return the recipe. If the recipe is public, it

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

### `assistantPublicRecipe`

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

### `assistantPublicRecipes`

### `assistantPublicRecipesCount`

### `assistantRecipesSemanticSearch`

### `assistantCookbook`

### `assistantPublicCookbook`

### `assistantPublicCookbooks`

### `assistantPublicCookbookCount`

### `recommendedAssistantCookbook`

## Common Queries

### Create a new assistant cookcook

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

Only users that own the cookcook can update it.

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

Required parameters (other are optional and can be ommitted):

- name
- description
- language
- keywords
- isPublic

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

Required parameters (other are optional and can be ommitted):

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

Required parameters (other are optional and can be ommitted):

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

Required parameters (other are optional and can be ommitted):

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

Get a public recipe using its identifier. If the recipe does not exists
or is not public, the request returns null.

Required parameters (other are optional and can be ommitted):

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

Get a public cookbook using its identifier. If the cookbook does not exists
or is not public, the request returns null.

Required parameters (other are optional and can be ommitted):

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

Required parameters (other are optional and can be ommitted):

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
