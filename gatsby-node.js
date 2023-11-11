const path = require('path');
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.onPostBuild = ({ reporter }) => reporter.info('Page build is done!');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const postsQuery = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            hide
          }
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (postsQuery.errors) {
    reporter.panicOnBuild(`Error while creating post pages.`);
    return;
  }

  const posts = postsQuery.data.allMdx.nodes;
  const postTemplate = path.resolve(`./src/templates/{post}.tsx`);

  posts.forEach((post) => {
    if (process.env.NODE_ENV === 'production' && post.frontmatter.hide) {
      return;
    }

    createPage({
      path: `/posts${post.fields.slug}`,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id },
    });
  });

  const tagsQuery = await graphql(`
    query {
      tagsGroup: allMdx(limit: 2000) {
        tags: group(field: { frontmatter: { tags: SELECT } }) {
          value: fieldValue
          totalCount
        }
      }
    }
  `);

  if (tagsQuery.errors) {
    reporter.panicOnBuild(`Error while creating tags pages.`);
    return;
  }

  const tags = tagsQuery.data.tagsGroup.tags;
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.value)}/`,
      component: path.resolve('src/templates/{tag}.tsx'),
      context: {
        tag: tag.value,
      },
    });
  });
};
