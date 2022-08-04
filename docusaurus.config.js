// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ThingsPanel',
  tagline: '物联网应用支撑平台',
  url: 'https://www.thingspanel.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ThingsPanel', // Usually your GitHub org/user name.
  projectName: 'thingspanel.io', // Usually your repo name.
  deploymentBranch:"main",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: [ 'zh-Hans','en', 'fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ThingsPanel/thingspanel.github.io/tree/source/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ThingsPanel/thingspanel.github.io/tree/source/',
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
        title: '首页',
        logo: {
          alt: 'ThingsPanel',
          src: 'img/dark.svg',
          srcDark: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          { to: '/blog', label: '博客', position: 'left' },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [
              // { to: '/docs/next/intro', label: 'v2', target: '_blank' },
              // { to: '/docs/next/intro', label: 'v1', target: '_blank' },
            ],
            // dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
            dropdownActiveClassDisabled: true,
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
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GitHub',
            items: [
              {
                logo: {
                  alt: 'ThingsPanel',
                  src: 'img/dark.svg',
                  srcDark: 'img/logo.svg',
                },
                label: 'GitHub',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Gitee',
            items: [
              {
                label: 'Gitee',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: '微信交流群',
            items: [
              {
                label: '微信交流群',
                to: '/blog',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
          {
            title: 'QQ交流群',
            items: [
              {
                label: 'QQ交流群',
                to: '/blog',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `Copyright © ${new Date().getFullYear()} 北京极益科技有限公司版权所有.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
