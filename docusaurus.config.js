const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Decrypt Support Docs',
  tagline: "Support documentation for Decrypt's applications, token, and community.",
  url: 'https://docs.decrypt.co',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  trailingSlash: 'true',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'DecryptMedia', // Usually your GitHub org/user name.
  projectName: 'decryptmedia.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Decrypt',
      logo: {
        alt: 'Decrypt Logo',
        src: 'img/decrypt-mark.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'decrypt-token/faq',
          position: 'left',
          label: 'Docs',
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
              label: 'Decrypt Token',
              to: '/docs/decrypt-token/faq',
            },
            {
              label: 'Mobile App',
              to: '/docs/mobile-app/faq',
            },
            {
              label: 'Community Resources',
              to: '/docs/community-resources',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://decrypt.co/discord-invite',
            },
            {
              label: 'Snapshot',
              href: 'https://vote.decrypt.co',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/DecryptMedia/decryptmedia.github.io',
            },
            {
              label: 'Help',
              href: '/docs/community-resources',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Decrypt News',
              href: 'https://decrypt.co',
            },
            {
              label: 'Decrypt Learn',
              href: 'https://decrypt.co/learn',
            },
            {
              label: 'About Decrypt',
              href: 'https://decrypt.co/about-us',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms',
              href: 'https://decrypt.co/terms-of-service',
            },
            {
              label: 'Privacy',
              href: 'https://decrypt.co/privacy-policy',
            },
            {
              label: 'Disclosures',
              href: 'https://decrypt.co/financial-disclosures',
            }
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
  plugins: ['@docusaurus/plugin-ideal-image'],
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
