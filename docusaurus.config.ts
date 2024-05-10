import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
let theme = prismThemes.vsDark;
theme.plain.backgroundColor = '#201b23';
// theme.plain.background = '#201b23';

const config: Config = {

  title: 'BotWithUs Wiki',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.botwithus.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  staticDirectories: ['public', 'static'],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BotWithUs', // Usually your GitHub org/user name.
  projectName: 'BwuWiki', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
scripts:[
{
  src:'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js',
  async: true
}
],
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ["docusaurus-plugin-less"],
  presets: [
    [
      'classic',
      {
        // gtag: {
        //   trackingID: 'G-YM97NPBVRX',
        //   anonymizeIP: false,
        // },
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          admonitions: {
            keywords: ['hidden'],
            extendDefaults: true,
          },
        },
        blog: false,
        // blog: {
        //           routeBasePath: '/guides',
        //           showReadingTime: true,
        //         },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    image: 'img/logo.png',
    navbar: {
      hideOnScroll: true,
      title: 'BotWithUs Wiki',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'rulesSidebar',
          position: 'left',
          label: 'Rules',
        },
        {
          href: 'https://discord.com/channels/973830420858810378/1176469822964510760',
          label: 'Purchase',
          position: 'right',
        },
        {
          href: 'https://botwithus.net/sdn',
          label: 'Script Marketplace',
          position: 'right',
        },
        {
          href: 'https://github.com/BotWithUs',
          label: 'Github',
          position: 'right',
        },
        {
          href: 'https://botwithus.net/javadoc/net.botwithus.rs3/module-summary.html',
          label: 'Javadoc',
          position: 'right',
        },
        {
          href: 'https://botwithus.net',
          label: 'Website',
          position: 'right',
        }
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} BotWithUs Wiki. This website is not affiliated with, endorsed by, or sponsored by Jagex Limited. We do not claim ownership of the trademark "RuneScape" or any associated intellectual property rights. The references to "RuneScape" on this website are for informational purposes only. They are used to provide context, commentary, or discussions related to the game. We acknowledge that all intellectual property rights for "RuneScape" belong to Jagex Limited.`,
      links: [
        {
          title: 'BotWithUsLinks',
          items: [
            {
              html:`<a style="display:flex; align-tems:flex-end;" href='https://discord.gg/botwithus' target='_blank'>
              <svg width="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
              <path fill="#3498db" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              <span style="margin-left:8px">Discord</span>
              </a>`
            },
            {
              html:`<a style="display:flex; align-tems:flex-end;" href='https://discord.com/channels/973830420858810378/1176469822964510760' target='_blank'><svg width="26px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48">
              <path fill="#3498db" d="M37.972 13.82c.107-5.565-4.485-9.837-10.799-9.837H14.115a1.278 1.278 0 0 0-1.262 1.079L7.62 37.758a1.038 1.038 0 0 0 1.025 1.2h7.737l-1.21 7.572a1.038 1.038 0 0 0 1.026 1.2H22.5c.305 0 .576-.11.807-.307.231-.198.269-.471.316-.772l1.85-10.885c.047-.3.2-.69.432-.888.231-.198.433-.306.737-.307H30.5c6.183 0 11.43-4.394 12.389-10.507.678-4.34-1.182-8.287-4.916-10.244Z"/>
              <path fill="#045389" d="m18.056 26.9-1.927 12.22-1.21 7.664a1.038 1.038 0 0 0 1.026 1.2h6.67a1.278 1.278 0 0 0 1.261-1.079l1.758-11.14a1.277 1.277 0 0 1 1.261-1.078h3.927c6.183 0 11.429-4.51 12.388-10.623.68-4.339-1.504-8.286-5.238-10.244-.01.462-.05.923-.121 1.38-.959 6.112-6.206 10.623-12.389 10.623h-6.145a1.277 1.277 0 0 0-1.261 1.077Z"/>
              <path fill="#73b9e9" d="M16.128 39.12h-7.76a1.037 1.037 0 0 1-1.025-1.2l5.232-33.182a1.277 1.277 0 0 1 1.262-1.078h13.337c6.313 0 10.905 4.595 10.798 10.16-1.571-.824-3.417-1.295-5.44-1.295H21.413a1.278 1.278 0 0 0-1.261 1.078L18.057 26.9l-1.93 12.22Z"/>
            </svg>
            <span style="margin-left:8px">Purchase</span>
              </a>
            `
            },
            {
              html: `<a style="display:flex; align-tems:flex-end;" target='_blank'>
              <svg width="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
              <path fill="#3498db" d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              <span style="margin-left:8px">Shoutout Discord user @dea.d for the wiki framework.</span>
              </a>`
            }
          ]
        }
      ],
    },
    prism: {
      additionalLanguages: ['java',  'diff'],
      theme: prismThemes.github,
      darkTheme: theme,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
