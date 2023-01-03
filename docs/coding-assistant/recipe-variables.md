---
id: coding-assistant-recipe-variables
sidebar_label: Snippets Variables
title: Codiga Code Snippets User Variables
description: Create reusable code snippets for your IDE using variables. Inter-operable variable system across all IDEs.
keywords:
  [
    coding assistant,
    smart coding assistant,
    jetbrains,
    clion,
    datagrip,
    code snippets,
    secure code,
    safe code,
    dataspell,
    fleet,
    goland,
    phpstorm,
    rider,
    rubymine,
    webstorm,
    intellij,
  ]
---

import ReactPlayer from 'react-player'

## What Are Variables?

Variables are a powerful feature in snippet definition, but the lack of
standardized variable definition across IDEs makes it difficult to create code
recipes that can be shared across editors, team members, or not be locked with
one IDE only. Each IDE have a set of defined variables to return values or
behave in a specific way once they are in place and loaded.

Recipes in Codiga's Coding Assistant are here to solve variable definition,
reusability of code across IDEs and introduce the concept of _"Define once,
works everywhere"_. You'll not worry again
about which and what variables are supported in the IDE where the Coding
Assistant will run or your coworkers IDE of choose, this is how a recipe
will look like with a variable supported across the multiple IDE integrations we
have available.

## Variables In Action

Consider inserting this recipe in a file named `FrontPage.jsx`, you can use the
`&[GET_FILENAME_NO_EXT]` to dynamically create a React Component with the Class
name to be the same as the name of the file where is being inserted. The recipe
definition in the Coding Assistant panel would look like the following:

```javascript
class &[GET_FILENAME_NO_EXT] extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The result across all the IDE integrations after inserting:

```javascript
class FrontPage extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## User Defined Variables

You can define variable/placeholder the user will be asked to fill when importing
the recipe. For that, use `&[USER_INPUT:<order>:<default_value]`.

Where

- `order` specify the order to which we will ask the value from the user
- `default_variable` if the default value we pre-fill in the IDE

In the snippet below, we first ask a first variable, a second one. The first value asked
to the user is initialized with the value `val1`, the second is initialized with the value `val2`.

```python
&[USER_INPUT:1:val1], &[USER_INPUT:2:val2] = &[USER_INPUT:2:val2], &[USER_INPUT:1:val1]
```

You can see below a video when this snippet is imported in VS Code:

<ReactPlayer playing controls url='/videos/swap-variables.mp4' />

## Available Variables

Start to use one or multiple of the following variables while defining
the code of the Recipe, the behavior and value will be the same across all our
IDE Integrations.

| Variable                        | Description                                                                                   |
| ------------------------------- | --------------------------------------------------------------------------------------------- |
| **&[USER_INPUT:idx:default]**   | Ask for a user-defined value. This will ve the `idx` first asked with default value `default` |
| **&[GET_SELECTED_TEXT]**        | Return the selected text in the current editor view                                           |
| **&[GET_LINE_NUMBER]**          | Return a one-index based line number where the cursor is in the editor view                   |
| **&[GET_FILENAME]**             | Return the filename of the current document                                                   |
| **&[GET_FILENAME_NO_EXT]**      | Return the filename of the current document without its extensions                            |
| **&[GET_DIRECTORY]**            | Return the directory of the current document                                                  |
| **&[GET_FILEPATH]**             | Return the full file path of the current document                                             |
| **&[GET_FILEPATH_RELATIVE]**    | Return the relative (to the opened workspace or folder) file path of the current document     |
| **&[GET_CLIPBOARD]**            | Return the contents of your clipboard                                                         |
| **&[GET_PROJECT_WORKSPACE]**    | Return the name of the opened workspace or folder or top-level folder in the project          |
| **&[GET_PROJECT_DIRECTORY]**    | Return the path of the opened workspace or folder or top-level folder in the project          |
| **&[DATE_DAY_NAME]**            | Return the name of day                                                                        |
| **&[DATE_MONTH_NAME]**          | Return the full name of the month                                                             |
| **&[DATE_DAY_NAME_SHORT]**      | Return the short name of the day                                                              |
| **&[DATE_MONTH_NAME_SHORT]**    | Return the short name of the month                                                            |
| **&[DATE_MONTH_TWO_DIGITS]**    | Return the month as two digits                                                                |
| **&[DATE_CURRENT_DAY]**         | Return the day of the month                                                                   |
| **&[DATE_CURRENT_YEAR]**        | Return the current year                                                                       |
| **&[DATE_CURRENT_YEAR_SHORT]**  | Return the current year's last two digits                                                     |
| **&[DATE_CURENT_HOUR]**         | Return the current hour in 24-hour clock format                                               |
| **&[DATE_CURRENT_MINUTE]**      | Return the current minute                                                                     |
| **&[DATE_CURRENT_SECOND]**      | Return the current second                                                                     |
| **&[DATE_CURRENT_SECOND_UNIX]** | Return seconds since the Unix epoch                                                           |
| **&[RANDOM_BASE_10]**           | Return a random 6 digit Base-10 number                                                        |
| **&[RANDOM_BASE_16]**           | Return a random 6 digit Base-16 number                                                        |
| **&[RANDOM_UUID]**              | Return a UUIDv4 string                                                                        |
