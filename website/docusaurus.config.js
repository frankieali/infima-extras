// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer'
import playground from './src/remark/playground.js'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Infima Extras',
  tagline: 'Input component styles and more for Infima',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://infima-extras.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/infima-extras/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'frankieali', // Usually your GitHub org/user name.
  projectName: 'infima-extras', // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [playground]
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: ['../packages/core/dist/css/default/default.css'],
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig:({
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Infima Extras',
      // logo: false,
      items: [
        {to: '/docs/getting-started/introduction', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/frankieali/infima-extras',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/getting-started/introduction', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/frankieali/infima-extras',
          label: 'GitHub',
          position: 'right',
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Frank Ali. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  }),
};

export default config;
