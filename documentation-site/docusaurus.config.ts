import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const ensureTrailingSlash = (value: string): string =>
  value.endsWith('/') ? value : `${value}/`;

const config: Config = {
  title: 'Retail Intelligence Platform',
  tagline: 'Architecture, implementation roadmap, and engineering playbooks',
  favicon: 'img/logo.svg',

  url: process.env.DOCS_URL ?? 'http://localhost:3000',
  baseUrl: ensureTrailingSlash(process.env.DOCS_BASE_URL ?? '/'),

  organizationName: process.env.DOCS_ORGANIZATION ?? 'Agi-Learning',
  projectName:
    process.env.DOCS_PROJECT_NAME ?? 'retail-intelligence-ecommerce',

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    metadata: [
      {
        name: 'keywords',
        content:
          'retail architecture, micro frontends, Spring Boot, Kafka, Databricks, data mesh, MLflow, RAG, agentic AI',
      },
    ],
    navbar: {
      title: 'Retail Intelligence',
      logo: {
        alt: 'Retail Intelligence Platform logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'platformSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/architecture/retail-intelligence-platform-architecture-and-roadmap',
          label: 'Architecture',
          position: 'left',
        },
        {
          to: '/docs/roadmap/all-120-lessons',
          label: '120 lessons',
          position: 'left',
        },
        {
          to: '/search',
          label: 'Search',
          position: 'right',
        },
        {
          href:
            process.env.DOCS_REPOSITORY_URL ??
            'https://github.com/Agi-Learning/retail-intelligence-ecommerce',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Build',
          items: [
            {label: 'Getting started', to: '/docs/getting-started/'},
            {label: 'Architecture', to: '/docs/architecture/'},
            {label: 'Roadmap', to: '/docs/roadmap/'},
          ],
        },
        {
          title: 'Operate',
          items: [
            {label: 'Security', to: '/docs/security/'},
            {label: 'Testing', to: '/docs/testing/'},
            {label: 'Runbooks', to: '/docs/runbooks/'},
          ],
        },
        {
          title: 'Reference',
          items: [
            {label: 'Data products', to: '/docs/data-products/'},
            {label: 'Contracts', to: '/docs/contracts/'},
            {label: 'Sources', to: '/docs/references'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Retail Intelligence Ecommerce.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'java',
        'json',
        'kotlin',
        'python',
        'sql',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
