import dotenv from 'dotenv';
import { dirname } from 'path';
import remarkGfm from 'remark-gfm';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: `.env` });

/** @type {import('gatsby').GatsbyConfig} */
export default {
  pathPrefix: '/',
  siteMetadata: {
    title: `hanse-kim.dev`,
    description:
      '개발 과정에서 겪은 문제와 그것을 어떻게 해결했는지를 기록하기 위한 블로그입니다.',
    email: 'hansekim.dev@gmail.com',
    githubUrl: 'https://github.com/hanse-kim',
    githubName: 'hanse-kim',
    blogUrl: 'https://hanse-kim.github.io',
    publishYear: `2022-${new Date().getFullYear()}`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sharp',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/.posts/`,
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
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Noto Sans KR`,
            file: `https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap`,
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
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
  ],
};
