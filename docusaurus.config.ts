import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NamTelco Regulatory Portal',
  tagline: "Namibia's Official Telecommunications Gazette & Regulatory Archive",
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://namtelco.na',
  baseUrl: '/',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@getcanary/docusaurus-theme-search-pagefind',
  ],

  plugins: [
    [
      'docusaurus-plugin-llms',
      {
        generateLLMsTxt: true,
        generateLLMsFullTxt: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'NamTelco Regulatory Portal',
      logo: {
        alt: 'NamTelco Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/acts',
          label: 'Acts',
          position: 'left',
        },
        {
          to: '/docs/regulations',
          label: 'Regulations',
          position: 'left',
        },
        {
          to: '/docs/gazettes',
          label: 'Gazettes',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: 'NamTelco Regulatory Portal — Public Information Service',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
