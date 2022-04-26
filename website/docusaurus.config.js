module.exports = {
  title: "Codiga Documentation",
  tagline: "Coding Assistant and Automated Code Reviews",
  url: "https://doc.codiga.io",
  baseUrl: "/",
  organizationName: "xcoding",
  projectName: "codiga",
  scripts: ["https://buttons.github.io/buttons.js"],
  favicon: "img/favicon.png",
  trailingSlash: true,
  customFields: {
    users: [
      {
        caption: "User1",
        image: "/img/undraw_open_source.svg",
        infoLink: "https://www.facebook.com",
        pinned: true,
      },
    ],
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          path: "../docs",
          sidebarPath: "../website/sidebars.json",
        },
        blog: false,
        theme: {
          customCss: "../src/css/customTheme.css",
        },
      },
    ],
  ],
  plugins: [],
  themeConfig: {
    metadata: [
      {
        name: "og:type",
        content: "article",
      },
    ],
    navbar: {
      title: "Codiga",
      logo: {
        src: "img/logo-header.png",
        alt: "Codiga Logo",
      },
      items: [
        {
          to: "docs/coding-assistant/coding-assistant-getting-started",
          label: "Coding Assistant",
          position: "left",
        },
        {
          to: "docs/getting-started",
          label: "Code Analysis",
          position: "left",
        },
        {
          to: "docs/api",
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
    image: "img/opengraph_image.png",
    footer: {
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
              label: "Chrome",
              to: "https://chrome.google.com/webstore/detail/codiga/dbkhkhonmelajjempmoadocgneoadjge",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              to: "https://discord.com/invite/5b9bGDtvnc",
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
      copyright: "Copyright © 2022 XCoding labs, Inc",
      logo: {
        src: "img/favicon.png",
        alt: "Codiga Logo",
      },
    },
    algolia: {
      apiKey: "518bce9a6dfb3bbf0f04bac2f129d095",
      indexName: "code-inspector",
      algoliaOptions: {},
    },
  },
};
