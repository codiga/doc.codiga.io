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
      label: "Coding Assistant",
      link: { type: "generated-index" },
      items: [
        "coding-assistant/coding-assistant-getting-started",
        "coding-assistant/coding-assistant-recipes-cookbooks",
        "coding-assistant/coding-assistant-recipe-variables",
        "coding-assistant/coding-assistant-recipes-share",
      ],
    },
    {
      type: "category",
      label: "IDE Integrations",
      link: { type: "generated-index" },
      items: [
        "coding-assistant/coding-assistant-vscode",
        "coding-assistant/coding-assistant-jetbrains",
        "coding-assistant/coding-assistant-chrome",
      ],
    },
    {
      type: "category",
      label: "Plugin Specification",
      link: { type: "generated-index" },
      items: [
        "coding-assistant/coding-assistant-your-own-plugin",
        "coding-assistant/coding-assistant-vscode-spec",
      ],
    },
  ],
  code_analysis: [
    {
      type: "category",
      label: "Code Analysis",
      link: { type: "generated-index" },
      items: [
        "getting-started",
        "create-user",
        "create-group",
        "create-project",
        "add-badge",
      ],
    },
    {
      type: "category",
      label: "Metrics and Dashboard",
      link: { type: "generated-index" },
      items: [
        "metrics",
        "analysis-results",
        "dashboard",
        "technical-debt",
        "dependencies",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      link: { type: "generated-index" },
      items: [
        "integration-intro",
        "integration-github",
        "integration-gitlab",
        "integration-bitbucket",
        "integration-slack",
        "integration-ci",
        "integration-aws-codebuild",
        "integration-circle-ci",
        "integration-github-action",
        "git-hooks",
      ],
    },
    {
      type: "category",
      label: "Rules",
      link: { type: "generated-index" },
      items: ["rules/rules"],
    },
    {
      type: "category",
      label: "Public Profile",
      link: { type: "generated-index" },
      items: ["public-profiles"],
    },
    {
      type: "category",
      label: "Configuration",
      link: { type: "generated-index" },
      items: ["project-preferences", "ignore-files", "branches"],
    },
    {
      type: "category",
      label: "Pricing and Billing",
      link: { type: "generated-index" },
      items: ["pricing", "billing"],
    },
    {
      type: "category",
      label: "Troubleshooting",
      link: { type: "generated-index" },
      items: ["troubleshooting/too-many-lines-of-code"],
    },
  ],
  custom_rules: [
    {
      type: "category",
      link: { type: "generated-index" },
      label: "Rosie",
      items: ["rosie/rosie-introduction"],
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
      link: { type: "generated-index" },
      label: "Write a Rule",
      items: [
        "rosie/rosie-write-rule",
        "rosie/rosie-write-rule-programming-interface",
        "rosie/rosie-pattern",
        "rosie/python/rosie-python-ast",
        "rosie/rosie-troubleshoot-slow-rules",
      ],
    },
    {
      type: "category",
      link: { type: "generated-index" },
      label: "AST Common Objects",
      items: [
        "rosie/ast/common/rosie-ast-common-aststring",
        "rosie/ast/common/rosie-ast-common-astelement",
        "rosie/ast/common/rosie-ast-common-position",
        "rosie/ast/common/rosie-ast-common-context",
      ],
    },
    {
      type: "category",
      link: { type: "generated-index" },
      label: "AST Python Objects",
      items: [
        "rosie/ast/python/rosie-ast-python-assignment",
        "rosie/ast/python/rosie-ast-python-functioncall",
        "rosie/ast/python/rosie-ast-python-functioncallargument",
        "rosie/ast/python/rosie-ast-python-functioncallarguments",
        "rosie/ast/python/rosie-ast-python-functiondefinition",
        "rosie/ast/python/rosie-ast-python-forstmt",
        "rosie/ast/python/rosie-ast-python-ifcondition",
        "rosie/ast/python/rosie-ast-python-import",
        "rosie/ast/python/rosie-ast-python-importstatementpackage",
        "rosie/ast/python/rosie-ast-python-importfrom",
        "rosie/ast/python/rosie-ast-python-importfromelement",
        "rosie/ast/python/rosie-ast-python-pythonexpression",
        "rosie/ast/python/rosie-ast-python-tryblock",
        "rosie/ast/python/rosie-ast-python-node-context",
        "rosie/ast/python/rosie-ast-python-functioncallargument",
        "rosie/ast/python/rosie-ast-python-functioncallarguments",
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
