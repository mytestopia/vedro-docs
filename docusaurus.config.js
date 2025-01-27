// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Vedro',
  tagline: 'Pragmatic Testing Framework',
  url: 'https://vedro.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: false,
        },
        blog: {
          blogTitle: 'What\'s New',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'img/vedro-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'quick-start',
            position: 'left',
            label: 'Docs',
          },
          {
            href: '/plugins',
            label: 'Plugins',
            position: 'left',
          },
          {
            to: 'blog',
            label: 'What\'s New',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quick-start',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial/api/chapter1-first-steps',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/vedro_universe',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vedro_universe',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/vedro_universe',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vedro-universe/vedro',
              },
              {
                label: 'PyPi',
                href: 'https://pypi.org/project/vedro/',
              },
            ],
          },
        ],
        copyright: `Made in the middle of nowhere with ❤️<br/>© 2015-${new Date().getFullYear()}`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/oceanicNext'),
      },
    }),
});
