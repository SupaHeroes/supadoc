// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Supaheroes Docs',
  tagline: 'Helping projects everyday',
  url: 'https://docs-supaheroes.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/SUPALOGOXBG.png',
  organizationName: 'Supaheroes', // Usually your GitHub org/user name.
  projectName: 'Supaheroes', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: 'https://github.com/SupaHeroes/supadoc/tree/main/docs',
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
        title: 'Supaheroes Docs',
        logo: {
          alt: 'Supaheroes Logo',
          src: 'img/SUPALOGOXBG.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          
          {
            href: 'https://github.com/SupaHeroes',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/cbsRDZ8z',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'Supaheroes.fund',
                href: 'https://supaheroes.fund',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/cbsRDZ8z',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SupaheroesFund',
              },
            ],
          },
          {
            title: 'Build',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/SupaHeroes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Supaheroes.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
