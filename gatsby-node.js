const path = require('path');
const _ = require('lodash');

exports.onPostBuild = ({reporter}) => reporter.info('Page build is done!');
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(`
    query {
      tagsGroup: allMdx(limit: 2000) {
        tags: group(field: frontmatter___tags) {
          value: fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const tags = result.data.tagsGroup.tags;
  tags.forEach((tag) => {
    createPage({
      path: `/tag/${_.kebabCase(tag.value)}/`,
      component: path.resolve('src/templates/{tag}.tsx'),
      context: {
        tag: tag.value,
      },
    });
  });
};
