---
id: api
title: Codiga GraphQL API - Introduction
sidebar_label: Introduction
description: Everything you need to know about how to find and authenticate GraphQL on Codiga.
keywords:
  - cyclomatic complexity
  - function complexity
  - function length
  - code quality
  - software quality
  - github
  - gitlab
  - github actions
  - bitbucket
  - codiga
  - static analysis
  - static code analysis
  - continuous integration
  - ci/cd pipeline
  - code verification
  - security analysis
  - CWE
  - CVE
---

:::info
If you have any question about the API, please join [our discord channel](https://discord.com/invite/5b9bGDtvnc),
we provide direct support on our channel.
:::

:::info

Codiga API is completely implemented in [GraphQL](https://graphql.org/).

:::

## What is GraphQL?

GraphQL is a new way to interact between system. It exposes a typed API to the client that can
structure his own query and decide exactly what data to query and receive.

There are many advantages for using GraphQL, such as query optimization but also
a strong tool ecosystem and libraries in many languages. If you do not know
GraphQL, we encourage you to learn more on [graphql.org](https://graphql.org).

We have an accessible API to empower developers and let them develop new tools
around our eco-system. By giving access to the data, we believe developers
can extract the data they need and integrate the analysis data into their own
development process (CI jobs, dashboard, etc.).

## Accessing the GraphQL API

The API endpoint: `https://api.codiga.io/graphql`. You submit `POST` queries to this
API endpoint.

## Authentication

To query the API, you need to be authenticated. There are two ways to do this:

- **API token**: useful for programmatic access (such as CI jobs)
- **JWT (Json Web Token)**: useful for frontend access (this is how app.codiga.io queries the API)

### API Token (new method, recommended)

:::info

An API token is what you need if you want to start an integration with Codiga. It relies on tokens
provided by the user.

:::

Go on the [API tokens page](https://app.codiga.io/api-tokens) and generate a new token. You can create multiple tokens
and associate a description to them (for example, if you want to have one token for VS Code, one for your CI pipeline, etc.).

To access the API using the access and secret key, you need to specify two new headers:

- `X-Api-Token`: the token that has been generated for you.

The following command set the appropriate headers and get the list of all projects you own
on Codiga.

```bash
curl -i -H 'Content-Type: application/json' \
        -H "X-Api-Token: <YOUR-TOKEN>"
        -X POST -d '{"query": "query {projects(howmany: 10, skip:0){name}}"}' \
        https://api.codiga.io/graphql
```

When you use the API programmatically, make sure you set these headers when you send a GraphQL request.

### JWT

:::warning

JWT are short-lived token, used for the web application at app.codiga.io. They are not recommended
for any custom-integration.
:::

A Json Web Token is a lightweight authentication mechanism that provide a token to authenticate
within a given period of time.

The JWT authentication works in two passes:

1.  Generation of the token
2.  Use the API with the token

To generate the JWT, you need to invoke a mutation that will produce the token. The mutation will contain
the real username and password of the user to authenticate.

```
mutation{
  authentication(identifier:"<username>", password: "<password>"){
    token
    error
  }
}
```

The mutation returns either the JWT (if the credentials are correct) or an error. This is the example
of a successful authentication

```
{
   "data": {
     "authentication": {
       "token": "eyJ1eXAiOiLKV1QPLCJhbGEiOiJIUzI1NiJ9.eyJleJAiOjE1FzkwNTk8NjUsKmlhqCI6MTU3ODk3MzM2NSwidXNlcklkIjogMn0.22AMf6y5Dyj3tzWVMw3eJPijkjS2sLOmt_O2VLvvafl",
       "error": null
     }
   }
 }
```

This is an example of a failed authentication attempt.

```
{
  "data": {
    "authentication": {
      "token": null,
      "error": "invalid-credentials"
    }
  }
}
```

To use the token, call the API as with any other library with an additional `Authorization` header
that contains the value of your JWT.

## Querying the API with third-party libraries

GraphQL has a rich eco-system with [multiple clients written in different languages](https://graphql.org/code/#graphql-clients).
We show the use of such libraries for two languages: Python and Javascript.

### Python

There is a simple query example using the [sgqlc](https://github.com/profusion/sgqlc) client
for Python. In the following code snippet, we authenticate using the couple of access and secret keys
and print the username.

```python
from sgqlc.endpoint.http import HTTPEndpoint

url = 'https://api.codiga.io/graphql'
headers = {
    'X-Api-Token': '<your-token-here>'
}

query = '{user {username} }'
variables = {}

endpoint = HTTPEndpoint(url, headers)
data = endpoint(query, variables)

print(data.user.username)
```

The code below authenticates a user and get a JWT to send a
request to the API to get the actual username

```python
from sgqlc.endpoint.http import HTTPEndpoint

url = 'https://api.codiga.io/graphql'

# Getting the JWT first
query = '''
mutation{
  authentication(identifier:"<USERNAME>", password: "PASSWORD"){
    token
    error
  }
}
'''
variables = {}

endpoint = HTTPEndpoint(url)
data = endpoint(query, variables)
token = data['data']['authentication']['token']


# Querying with the JWT
query = '''
{
   user {
      username
   }
}
'''

headers = {
    'Authorization': token
}

endpoint = HTTPEndpoint(url, headers)
data = endpoint(query, variables)

print(data)
```

## Pagination

When a query or sub-query may potentially return a large number of results, the user has to specify two parameters
to limit the number of results:

- `skip`: specify how many elements we skip before we start returning elements.
- `howmany`: specify how many elements we want to return.

If the `howmany` argument is too high, the query will be considered as too expensive and therefore, rejected.

These two argument can be used to implement pagination. For example, to show the first ten element of an object, you
will first call with `skip` set to 0 and `howmany` set to 10. To see the next 10 elements, you will set `skip` to 10 and `howmany`
still to 10.
