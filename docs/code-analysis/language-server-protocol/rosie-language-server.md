---
id: rosie-language-server
title: Language Server Based Code Analysis Integration with IDEs
sidebar_label: Rosie Language Server
description: Integration of the Codiga Code Analysis platform with various IDEs using Codiga's Rosie Language Server.
keywords: [
    language server,
    language client,
    LSP,
    language server protocol,
    IDE,
    text editor,
    vs code
]
---

Codiga's Rosie Language Server enables users and vendors to integrate Codiga's code analysis platform into
text editors and IDEs that haven't had such integration yet.  

The Rosie Language Server is not yet available as a separate npm package, for now it lives as a part of the Codiga [VS Code extension's GitHub repository](https://github.com/codiga/vscode-plugin),
but as a separate Node module in the `server` directory.

Please note that configuration of the language client and the server launch can differ greatly between client applications (i.e. text editors, IDEs)
depending on in what way they provide integration with language servers.

## Prerequisites

The language server is implemented in NodeJS + TypeScript, thus you must have Node JS 14+ to be able to launch the server.

Therefore, please make sure to inform users in the integration's documentation that they must have NodeJS installed
(if not already provided by the client application) in order to be able to use the new integration.

## Advantages

The great advantage of having a language server, and the reason why we at Codiga switched to one, is this way
we can have a single, central implementation of diagnostics, quick fixes, caching, etc. integrated with Rosie.

This makes it possible to integrate Rosie with text editors and IDEs quickly, without having to re-implement anything.

## Integration architecture

There are multiple ways a language server can be implemented, as for what relationship the language server is in with the client application.

One way is that the language server sources, or the configuration to download and install those sources, are stored as part of the client application plugin.
This is the case with for instance VS Code and Sublime Text.

![Rosie Language Server within plugin](/img/rosie/language-server-protocol/rosie-language-server-within-plugin.png)

Another way, when no plugin, but only configuration, is needed for integration, the language server may be installed in a
project or workspace, not as a global resources for the whole text editor. This is the case for instance with Jupyter Lab.

![Rosie Language Server outside plugin](/img/rosie/language-server-protocol/rosie-language-server-outside-plugin.png)

### Communication with the outside world

The chart below demonstrates how the Rosie Language Server communicates with the client application and Codiga's remote services.

![Rosie Language Server's communication](/img/rosie/language-server-protocol/rosie-language-server-communication.png)

## Client Configuration

There are two configuration options that one has to take into account when integrating with the Rosie Language Server:
- Codiga API token
- User fingerprint

### Codiga API Token

This API token is available for users who have Codiga Hub accounts registered. Setting this token in the IDE/text editor settings makes it
possible for users to access and use their private rulesets during code analysis.

The language server looks for the configuration called `codiga.api.token` to retrieve the token value, and whose value must satisfy
the following criteria:
- **type**: string
- **min. length**: 32
- **max. length**: 50
- If the IDE/text editor has multi-level/-scope settings, it should be set as application-level, so that every open workspace/project uses the
same API token.

Of course, if a client application doesn't provide a way to apply/validate these restrictions, they can be omitted when specifying the configuration.

Example from VS Code extension's [package.json](https://github.com/codiga/vscode-plugin/blob/main/package.json#L58):

```json
"contributes": {
    "configuration": [
        {
            "title": "Codiga",
            "properties": {
                "codiga.api.token": {
                    "type": "string",
                    "default": "<API-TOKEN>",
                    "description": "Your Codiga API Token",
                    "minLength": 32,
                    "maxLength": 50,
                    "scope": "application"
                }
            }
        }
    ]
```

### User Fingerprint

The fingerprint is used for telemetry to improve the user experience. It is anonymized, and does not disclose the user identity.
It is in place to know what rulesets are being used, and if they are used by the same user without sending the exact user identifier.

Ideally, this value is generated when an IDE/text editor plugin is installed, and that is also stored and kept between subsequent
client application launches.

The language server provides logic to generate this value, but for now it is re-generated on each new server launch.

You can implement the generation of the fingerprint on client side, and if you do so, you must pass it in, in a command line argument
called `fingerprint`, for the server, like for example:

```
fingerprint=<generated value>
```

Example from VS Code extension's [extension.ts](https://github.com/codiga/vscode-plugin/blob/main/client/src/extension.ts#L300):

```typescript
const serverOptions: ServerOptions = {
    run: { ..., args: [`fingerprint=${getUserFingerprint()}`] },
    debug: { ..., args: [`fingerprint=${getUserFingerprint()}`] }
  };
```

The VS Code implementation of the fingerprint generation can be found at [codiga/vscode-plugin: configurationCache.ts](https://github.com/codiga/vscode-plugin/blob/main/server/src/utils/configurationCache.ts). 


## Configure the Language Client

### Supported file types

When integrating with a client application, make sure to enable languages/file types/mime types that are supported by Rosie,
so that they actually get analyzed by the language server. Please note that this might not be necessary in all client implementations. 

Example from the Codiga VS Code extension's [extension.ts](https://github.com/codiga/vscode-plugin/blob/main/client/src/extension.ts#L306):

```typescript
const clientOptions: LanguageClientOptions = {
    documentSelector: [
      { scheme: 'file', language: 'javascript' },
      { scheme: 'file', language: 'javascriptreact' },
      { scheme: 'file', language: 'typescript' },
      { scheme: 'file', language: 'typescriptreact' },
      { scheme: 'file', language: 'python' }
    ]
};
```

**Notes:**
- the language identifiers, mime types may differ in different client applications.
- list of supported languages: JavaScript, JavaScript+React, TypeScript, TypeScript+React, Python (including Jupyter notebooks)

See the related [DocumentFilter](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#documentFilter) section in the LSP Specification.

### Communication kind

Depending on the modes (`--node-ipc`, `--stdio`, etc.) the client application supports, you will have to use either one
of them passed in as a command line argument for the server.

The vscode-languageserver-node uses the [`TransportKind`](https://github.com/microsoft/vscode-languageserver-node/blob/main/client/src/node/main.ts#L28) enum
to specify this mode (see example below). In other text editor, where, for instance, a command line command must be specified to execute the compiled server,
these modes have to passed in as string command line arguments, as `--node-ipc`, `--stdio`, etc.

Example from the Codiga VS Code extension's [extension.ts](https://github.com/codiga/vscode-plugin/blob/main/client/src/extension.ts#L300):

```typescript
const serverOptions: ServerOptions = {
    run: { module: ..., transport: TransportKind.ipc, args: ... },
    ...
  };
```

Example from Sublime Text plugin (`rosie_language_server.sublime-settings`):

```json
//This invokes the compiled server.js with the local NodeJS installation with --stdio passed in as argument
"command": ["${node_bin}", "${server_path}", "--stdio"],
```

## Launch the Language Server

Since the language server cannot simply be installed as an npm package for now, the following steps must be performed:
- clone the [Codiga VS Code](https://github.com/codiga/vscode-plugin) repository
- step into the `server` directory and execute `npm i` and `npm run compile`: this installs and compiles the language server 
- copy the compiled sources from `/server/out`, the dependencies from `/server/node_modules`, and if necessary (like in case of Sublime Text)
`/server/package.json`  and `/server/package-lock.json`, as well into your integration project. (Make sure to respect the VS Code extension's licencing terms)

**Note**: some LSP related Sublime Text plugins either store the compiled sources in the plugin repository ([sublimelsp/LSP-eslint](https://github.com/sublimelsp/LSP-eslint/tree/master/language-server)),
or they only a package.json to install the language server package, and its dependencies ([sublimelsp/LSP-graphql](https://github.com/sublimelsp/LSP-graphql/tree/master/language-server)). 

After all this is done, you must point your language client to launch `server.js` found in the aforementioned `out` directory.

Example from the Codiga VS Code extension's [extension.ts](https://github.com/codiga/vscode-plugin/blob/main/client/src/extension.ts#L293):

```typescript
//'context' is type of vscode.ExtensionContext
const serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
const serverOptions: ServerOptions = {
    run: { module: serverModule, ... },
    debug: { module: serverModule, ... }
};
const clientOptions: LanguageClientOptions = { ... }

client = new LanguageClient('codigaLanguageServer', 'Codiga Language Server', serverOptions, clientOptions);
client.start();
```

### Launch the server once

If launching a server is not handled automatically by the text editor/IDE you are integrating with (like in VS Code, where it is launched
from `extension.ts`, the extension's entry point),
make sure the Rosie Language Server is launched only once, regardless of the number of open files, projects or workspaces.

### Stopping the server

At the moment, there is no logic in the language server itself that requires explicit disposal or shut-down
when the server is being shut down. Regardless, if the text editor/IDE you are integrating with, or the plugin being implemented,
themselves require logic to be handled during shut-down, make sure to implement that.

## Troubleshooting

Here are some resources for investigating issues with language server launch and behaviour:
- Jupyter Lab forum: [Configuring a custom local language server](https://discourse.jupyter.org/t/configuring-a-custom-local-language-server/17995/2)
- Sublime Text LSP: [Troubleshooting](https://lsp.sublimetext.io/troubleshooting/)