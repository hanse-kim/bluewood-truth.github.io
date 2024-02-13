import { resolve } from 'path';
import remarkGfm from 'remark-gfm';

const __dirname = resolve();

/** @type {import('gatsby').GatsbyConfig} */
export default {
  pathPrefix: '/',
  siteMetadata: {
    title: `hanse-kim.dev`,
    email: 'hansekim.dev@gmail.com',
    githubUrl: 'https://github.com/hanse-kim',
    githubName: 'hanse-kim',
    publishYear: '2022-2024',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              withWebp: true,
              quality: 80,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              showLineNumbers: false,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-L03MWQBJJC`,
        head: true,
      },
    },
  ],
};
