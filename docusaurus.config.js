// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ThingsPanel IoT Platform',  // 改为英文
  tagline: "Open Source IoT Application Platform",  // 改为英文
  url: 'https://www.thingspanel.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'ThingsPanel',
  projectName: 'thingspanel.io',
  deploymentBranch: "main",

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3936883179210897',
      async: true,
      crossorigin: 'anonymous',
    },
  ],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["zh", "en"],
        docsRouteBasePath: "/docs",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-18JL3B13JT',
        anonymizeIP: true,
      },
    ],
  ],

  presets: [
    [ 
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ThingsPanel/thingspanel.github.io/tree/source/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/ThingsPanel/thingspanel.github.io/tree/source/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',  // 改为英文
        logo: {
          alt: 'ThingsPanel',
          src: 'img/dark.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'Docs',  // 改为英文
          },
          { to: '/blog', label: 'Blog', position: 'left' },  // 改为英文
          {
            href: 'https://aichat.thingspanel.cn/',
            label: 'AI Chat',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'icon-link language navbar__item',
          },
          {
            href: 'https://github.com/ThingsPanel',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      }
    }),
};

module.exports = config;
