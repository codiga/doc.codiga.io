---
id: ide-specification
title: Implementing an IDE plugin for analyzing custom rules
sidebar_label: IDE Specifications
description: Implement your own IDE plugin to integrate Codiga Custom Rules
keywords:
  - vscode
  - jetbrains
  - intellij
  - code analysis rules
  - sast
---

## How an analysis happens

### Sending a Query

When triggering an analysis, the IDE gets the list of rules for the current files.

It then sends a query to the service at `analysis.codiga.io` (HTTPS). The query is specified as is:

```json
{
  "filename": "myfile.py",
  "language": "python",
  "fileEncoding": "utf-8",
  "codeBase64": "<code-encoded-in-base64",
  "rules": [
    {
      "id": "ruleset/rulename",
      "language": "python",
      "type": "ast",
      "entityChecked": "functioncall",
      "contentBase64": "<rule-code-encoded-in-base64",
      "pattern": "pattern"
    }
  ],
  "logOutput": false
}
```

There is the details for every field:

- `filename`: the path of the file being analyzed. The path is relative to the project path.
- `language`: the programming language being analyzed
- `fileEncoding`: the file encoding in the IDE (`utf-8` works most of the time)
- `codeBase64`: the code in the IDE, encoded in Base 64
- `rules`: an array of rules, each one having the following attributes
  - `id`: full identifier of the rule
  - `language`: language of the rule. It must match the top-definition in the rule, otherwise, the rule is ignored
  - `type`: if the rule checks the Abstract Syntax Tree (`ast`) of a Pattern (`pattern`)
  - `entityChecked`: **ONLY FOR TYPE `ast`** the AST node/entity being checked (`functioncall`, `functiondefinition`, `exceptionblock`)
  - `contentBase64`: the JavaScript code of the rule
  - `pattern`: **ONLY FOR TYPE `pattern`** the pattern being checked in the code
- `logOutput`: if `true`, the rule output is being captured.

### Getting the results

The server response has the following schema:

```json
{
  "ruleResponses": [
    {
      "id": "ruleset/rulename",
      "violations": [
        {
          "message": "there is an important error!",
          "start": {
            "line": 1,
            "col": 10
          },
          "end": {
            "line": 1,
            "col": 10
          },
          "severity": "CRITICAL",
          "category": "SECURITY",
          "fixes": [
            {
              "description": "there is a fix for you",
              "edits": [
                {
                  "start": {
                    "line": 1,
                    "col": 10
                  },
                  "end": {
                    "line": 1,
                    "col": 10
                  },
                  "content": "myfix",
                  "editType": "update"
                }
              ]
            }
          ]
        }
      ],
      "errors": [],
      "executionError": null,
      "output": null
    }
  ],
  "errors": []
}
```

- `ruleResponses`
  - `errors`: contains the list of potential execution errors for this rule. Potential values are `invalid-pattern`, `error-unknown`, `error-execution`, `rule-timeout`, `invalid-rule-type`, `language-mismatch`
  - `violations`: the list of violations returned by the rule
  - `executionError`: if the error `error-execution` is set, the attribute contains a message that explains why the execution fails
  - `output`: if the request has `logOutput` is true, this attribute contains the output of the rule (e.g. what is written on `console.log`)
- `errors`: list of errors when processing the requests. These are the errors that apply to the request and not the rule. List of errors: `invalid-request`, `language-not-supported`, `code-not-base64`, `rule-not-base64`

## API Token

If the user has an API token specified, the token is specified with the `X-Api-Token` header.

## Getting the list of rules

## Preferences
