/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: '개발하고 기록하기',
  },
  plugins: [
    'gatsby-plugin-emotion',
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
        gatsbyRemarkPlugins: [],
      },
    },
  ],
};
