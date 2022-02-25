const path = require('path');
const repoUrl = 'https://github.com/single-spa/fr.single-spa.js.org';
const libRepoUrl = 'https://github.com/single-spa/single-spa';

const versions = require('./versions.json');

module.exports = {
  title: 'single-spa',
  tagline: 'Un router javascript pour les microservices côté client',
  url: 'https://fr.single-spa.js.org',
  baseUrl: '/',
  projectName: 'single-spa',
  favicon: 'img/single-spa-mark-magenta.svg',
  organizationName: 'single-spa',
  customFields: {
    repoUrl,
    libRepoUrl,
    // replace this with own!
    githubTokenAccess: '57317aeaa31d4221296b9252c61b355bb2a98f6c',
  },
  scripts: [
    'https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js',
    'https://cdn.jsdelivr.net/npm/racial-equity-banner@1.0.4/racial-equity-banner-bottom.js',
    '/js/index.js',
  ],
  themeConfig: {
    algolia: {
      apiKey: '113e711177d63ab1ff28ef858cbcffa5',
      indexName: 'single_spa',
      algoliaOptions: {},
    },
    footer: {
      logo: {
        alt: 'single-spa',
        src: 'img/single-spa-logo-magenta.svg',
      },
      copyright: `Copyright © ${new Date().getFullYear()} single-spa.`,
      style: 'dark',
      links: [
        {
          title: "Cours",
          items: [
            {
              label: "Ateliers Single-Spa",
              to: "https://single-spa-workshop.com"
            },
            {
              label: "Fonndamentaux des Microfrontends",
              to: "https://single-spa-workshop.com"
            },
          ]
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'FAQ',
              to: 'docs/faq/',
            },
            {
              label: 'Introduction',
              to: 'docs/getting-started-overview/',
            },
            {
              label: 'API',
              to: 'docs/api/',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Sponsors',
              to: 'sponsors/',
            },
            {
              label: 'Utilisateurs',
              to: 'users/',
            },
            {
              label: 'Contributeurs',
              to: 'contributors/',
            },
            {
              label: 'Rejoingnez-nous sur Slack',
              href:
                'https://join.slack.com/t/single-spa/shared_invite/zt-yxfqpl2u-PNx3uZtS3pgAXbOBWsdwOA',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Single_spa/',
            },
          ],
        },
        {
          title: 'Plus',
          items: [
            {
              label: 'GitHub',
              href: libRepoUrl,
            },
            {
              label: 'Donate',
              href: 'https://opencollective.com/single-spa',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
          ],
        },
      ],
    },
    image: 'img/docusaurus.png',
    navbar: {
      title: 'single-spa',
      logo: {
        alt: 'Logo de single-spa',
        src: 'img/single-spa-mark-magenta.svg',
      },
      items: [
        {
          to: 'versions',
          label: versions[0],
          style: {
            whiteSpace: 'nowrap',
            padding: '0.25rem 0.5rem 0.2rem 0.25rem',
            fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
            textDecoration: 'underline',
          },
        },
        { to: 'docs/faq/', label: 'FAQ' },
        { to: 'docs/', label: 'Documentation' },
        { to: 'https://single-spa-workshop.com', label: 'Cours' },
        { to: 'help/', label: 'Aide' },
        { to: 'blog/', label: 'Blog' },
        { href: 'https://opencollective.com/single-spa', label: 'Faire Un Don' },
        { href: 'https://github.com/single-spa/single-spa', label: 'GitHub' },
        { to: 'languages', label: 'Langues' },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-138683004-1',
    },
    prismTheme: require('prism-react-renderer/themes/vsDark'),
  },
  plugins: [
    [
      path.resolve(__dirname, './src/plugins/docusaurus-plugin-redirects'),
      {
        excludedPaths: ['/'],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl: `${repoUrl}/blob/master/website/`,
          // sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
};
