// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Codiga Documentation",
  tagline: "Coding Assistant and Automated Code Reviews",
  url: "https://doc.codiga.io",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/favicon.png",
  organizationName: "xcoding",
  projectName: "codiga",
  scripts: ["https://buttons.github.io/buttons.js"],
  trailingSlash: true,

  staticDirectories: ["static"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: "og:type",
          content: "article",
        },
      ],
      image: "img/opengraph_image.png",
      navbar: {
        title: "Codiga",
        logo: {
          alt: "Codiga Logo",
          src: "img/logo-header.png",
        },
        items: [
          {
            to: "docs/getting-started/",
            label: "Code Analysis",
            position: "left",
          },

          {
            to: "docs/rosie/rosie-introduction/",
            label: "Custom Rules",
            position: "left",
          },

          {
            to: "docs/coding-assistant/coding-assistant-getting-started/",
            label: "Code Snippets",
            position: "left",
          },
          {
            to: "docs/api/",
            label: "API",
            position: "left",
          },
          {
            to: "docs/faq",
            label: "FAQ",
            position: "left",
          },
        ],
      },
      footer: {
        logo: {
          src: "img/favicon.png",
          alt: "Codiga Logo",
        },
        links: [
          {
            title: "About Codiga",
            items: [
              {
                label: "Website",
                to: "https://www.codiga.io",
              },
              {
                label: "Status",
                to: "https://codiga.statuspage.io/",
              },
              {
                label: "Jobs",
                to: "https://codiga.applytojob.com/",
              },
            ],
          },
          {
            title: "Integrations",
            items: [
              {
                label: "GitHub",
                to: "https://github.com/apps/codiga",
              },
              {
                label: "VS Code",
                to: "https://marketplace.visualstudio.com/items?itemName=codiga.vscode-plugin",
              },
              {
                label: "JetBrains",
                to: "https://plugins.jetbrains.com/plugin/17969-codiga",
              },
              {
                label: "Visual Studio",
                to: "https://marketplace.visualstudio.com/items?itemName=codiga.vsextension",
              },
              {
                label: "Chrome",
                to: "https://chrome.google.com/webstore/detail/codiga/dbkhkhonmelajjempmoadocgneoadjge",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                to: "https://join.slack.com/t/codigahq/shared_invite/zt-9hvmfwie-9BUVFwZDwvpIGlkHv2mzYQ",
              },
              {
                label: "Twitter",
                to: "https://twitter.com/getcodiga",
              },
              {
                label: "Dev.to",
                to: "https://dev.to/codiga",
              },
              {
                label: "Youtube",
                to: "https://www.youtube.com/channel/UCbJIY9DBVajfTcRmhWgErqg",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XCoding labs, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "Y38E5PBP7U",
        apiKey: "d53ab77e8cc34e860d226276347bddb7",
        indexName: "code-inspector",
        algoliaOptions: {},
      },
    }),
};
