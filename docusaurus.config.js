const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Decrypt Docs',
  tagline: 'Documentation for Decrypt Media, Inc',
  url: 'https://decrypt.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: 'true',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'DecryptMedia', // Usually your GitHub org/user name.
  projectName: 'decryptmedia.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Decrypt Docs',
      logo: {
        alt: 'Decrypt Logo',
        src: 'img/decrypt-mark.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'token-faq',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/DecryptMedia/decryptmedia.github.io',
          label: 'GitHub',
          position: 'right',
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
              label: 'Token FAQ',
              to: '/docs/token-faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Snapshot',
              href: 'https://snapshot.org/#/decrypt-media.eth',
            },
            {
              label: 'Discord',
              href: 'https://decrypt.co/discord-invite',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/decryptmedia',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DecryptMedia',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Decrypt Media, Inc. A media company for the Web 3.0 age.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/DecryptMedia/decryptmedia.github.io/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
