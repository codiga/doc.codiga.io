/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  coding_assistant: [
    {
      type: "category",
      label: "Code Snippets",
      link: {
        type: "doc",
        id: "code-snippets/getting-started",
      },
      items: [
        ,
        "code-snippets/code-snippets-cookbooks",
        "code-snippets/snippets-variables",
        "code-snippets/snippets-share-group",
      ],
    },
    {
      type: "category",
      label: "IDE Integrations",
      link: { type: "generated-index" },
      items: [
        "code-snippets/vscode",
        "code-snippets/jetbrains",
        "code-snippets/chrome",
      ],
    },
    {
      type: "category",
      label: "Plugin Specification",
      link: { type: "generated-index" },
      items: ["code-snippets/your-own-plugin", "code-snippets/vscode-spec"],
    },
  ],
  code_analysis: [
    {
      type: "category",
      label: "Code Analysis",
      link: { type: "doc", id: "code-analysis/getting-started" },
      items: [
        "code-analysis/create-user",
        "code-analysis/create-group",
        "code-analysis/create-project",
        "code-analysis/add-badge",
      ],
    },
    {
      type: "category",
      label: "Metrics and Dashboard",
      link: { type: "doc", id: "code-analysis/metrics" },
      items: [
        "code-analysis/metrics",
        "code-analysis/analysis-results",
        "code-analysis/dashboard",
        "code-analysis/technical-debt",
        "code-analysis/dependencies",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: { type: "doc", id: "code-analysis/integration/intro" },
      items: [
        "code-analysis/integration/github",
        "code-analysis/integration/gitlab",
        "code-analysis/integration/bitbucket",
        "code-analysis/integration/slack",
        "code-analysis/integration/generic",
        "code-analysis/integration/aws-codebuild",
        "code-analysis/integration/circleci",
        "code-analysis/integration/github-action",
        "code-analysis/integration/git-hooks",
        "code-analysis/integration/cli",
      ],
    },
    {
      type: "category",
      label: "IDE Integrations",
      link: { type: "generated-index" },
      items: [
        "code-analysis/ide/vscode",
        "code-analysis/ide/jetbrains",
        "code-analysis/ide/visualstudio",
        "code-analysis/ide/jupyterlab",
      ],
    },
    {
      type: "category",
      label: "Rules",
      link: { type: "doc", id: "code-analysis/rules/rules" },
      items: ["code-analysis/rules/rules"],
    },
    {
      type: "category",
      label: "Configuration",
      link: { type: "generated-index" },
      items: [
        "code-analysis/project-preferences",
        "code-analysis/ignore-files",
        "code-analysis/branches",
      ],
    },
    {
      type: "category",
      label: "Pricing and Billing",
      link: { type: "doc", id: "code-analysis/pricing" },
      items: ["code-analysis/pricing", "code-analysis/billing"],
    },
    {
      type: "category",
      label: "Troubleshooting",
      link: { type: "generated-index" },
      items: ["code-analysis/troubleshooting/too-many-lines-of-code"],
    },
    {
      type: "category",
      label: "Language Server Protocol",
      link: { type: "generated-index" },
      items: [
        "code-analysis/language-server-protocol/rosie-language-server",
      ],
    },
  ],
  custom_rules: [
    {
      type: "category",
      link: { type: "doc", id: "rosie/rosie-introduction" },
      label: "Rosie",
      items: [
        "rosie/rosie-introduction",
        "rosie/rosie-codiga-yml-setup",
        "rosie/rosie-codiga-yml",
      ],
    },
    {
      type: "category",
      link: { type: "generated-index" },
      label: "Tutorials",
      items: [
        "rosie/tutorials/analysis-rule-tutorial-pattern",
        "rosie/tutorials/analysis-rule-tutorial-python-ast",
      ],
    },

    {
      type: "category",
      link: { type: "doc", id: "rosie/rosie-write-rule" },
      label: "Write a Rule",
      items: [
        "rosie/rosie-write-rule",
        "rosie/rosie-write-rule-programming-interface",
        "rosie/rosie-pattern",
        "rosie/python/rosie-python-ast",
        "rosie/rosie-troubleshoot-slow-rules",
        "rosie/rosie-helper-functions",
      ],
    },
    {
      type: "category",
      link: { type: "generated-index" },
      label: "AST Common Objects",
      items: [
        "rosie/ast/common/rosie-ast-common-aststring",
        "rosie/ast/common/rosie-ast-common-astelement",
        "rosie/ast/common/rosie-ast-common-assignment",
        "rosie/ast/common/rosie-ast-common-context",
        "rosie/ast/common/rosie-ast-common-forstatement",
        "rosie/ast/common/rosie-ast-common-functiondefinitionparameters",
        "rosie/ast/common/rosie-ast-common-functiondefinitionparameter",
        "rosie/ast/common/rosie-ast-common-ifstatement",
        "rosie/ast/common/rosie-ast-common-position",
        "rosie/ast/common/rosie-ast-common-switch",
        "rosie/ast/common/rosie-ast-common-switch-case",
      ],
    },
    {
      type: "category",
      link: { type: "doc", id: "rosie/ast/python/rosie-ast-python-index" },
      label: "AST Python Objects",
      items: [
        "rosie/ast/python/rosie-ast-python-assignment",
        "rosie/ast/python/rosie-ast-python-argument",
        "rosie/ast/python/rosie-ast-python-classdefinition",
        "rosie/ast/python/rosie-ast-python-comparison",
        "rosie/ast/python/rosie-ast-python-decorator",
        "rosie/ast/python/rosie-ast-python-except",
        "rosie/ast/python/rosie-ast-python-finally",
        "rosie/ast/python/rosie-ast-python-forstmt",
        "rosie/ast/python/rosie-ast-python-functioncall",
        "rosie/ast/python/rosie-ast-python-functioncallargument",
        "rosie/ast/python/rosie-ast-python-functioncallarguments",
        "rosie/ast/python/rosie-ast-python-functiondefinition",
        "rosie/ast/python/rosie-ast-python-ifcondition",
        "rosie/ast/python/rosie-ast-python-import",
        "rosie/ast/python/rosie-ast-python-importstatementpackage",
        "rosie/ast/python/rosie-ast-python-importfrom",
        "rosie/ast/python/rosie-ast-python-importfromelement",
        "rosie/ast/python/rosie-ast-python-node-context",
        "rosie/ast/python/rosie-ast-python-pythonexpression",
        "rosie/ast/python/rosie-ast-python-tryblock",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "rosie/ast/javascript/rosie-ast-javascript-index",
      },
      label: "AST JavaScript/TypeScript Objects",
      items: [
        "rosie/ast/javascript/rosie-ast-javascript-assignment",
        "rosie/ast/javascript/rosie-ast-javascript-aststringwithspread",
        "rosie/ast/javascript/rosie-ast-javascript-htmlelement",
        "rosie/ast/javascript/rosie-ast-javascript-htmltag",
        "rosie/ast/javascript/rosie-ast-javascript-htmlattribute",
        "rosie/ast/javascript/rosie-ast-javascript-classdefinition",
        "rosie/ast/javascript/rosie-ast-javascript-functioncall",
        "rosie/ast/javascript/rosie-ast-javascript-functioncallargument",
        "rosie/ast/javascript/rosie-ast-javascript-functioncallarguments",
        "rosie/ast/javascript/rosie-ast-javascript-functiondefinition",
        "rosie/ast/javascript/rosie-ast-javascript-import",
        "rosie/ast/javascript/rosie-ast-javascript-importedname",
        "rosie/ast/javascript/rosie-ast-javascript-node-context",
        "rosie/ast/javascript/rosie-ast-javascript-variabledeclaration",
        "rosie/ast/javascript/rosie-ast-javascript-try-block",
        "rosie/ast/javascript/rosie-ast-javascript-catch",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "rosie/ast/typescript/rosie-ast-typescript-index",
      },
      label: "AST TypeScript Specific Objects",
      items: [
        "rosie/ast/typescript/rosie-ast-typescript-typeoperation",
        "rosie/ast/typescript/rosie-ast-typescript-type",
        "rosie/ast/typescript/rosie-ast-typescript-interface",
        "rosie/ast/typescript/rosie-ast-typescript-interface-property",
        "rosie/ast/typescript/rosie-ast-typescript-interface-index-signature",
      ],
    },
    {
      type: "category",
      link: { type: "generated-index" },
      label: "Developers",
      items: ["rosie/ide-specification"],
    },
  ],
  api: [
    {
      type: "category",
      label: "Codiga API",
      link: { type: "generated-index" },
      items: ["api", "api/api-coding-assistant", "api/api-code-analysis"],
    },
  ],
};

module.exports = sidebars;
