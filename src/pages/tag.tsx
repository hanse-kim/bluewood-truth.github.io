import React from 'react';
import {Link, graphql, PageProps} from 'gatsby';
import Layout from 'src/components/layout';
import {getTagUrl} from 'src/utils/common';

interface DataType {
  tagsGroup: {
    tags: {
      value: string;
      totalCount: number;
    }[];
  };
}

export const pageQuery = graphql`
  query {
    tagsGroup: allMdx(limit: 2000) {
      tags: group(field: frontmatter___tags) {
        value: fieldValue
        totalCount
      }
    }
  }
`;

const TagsPage = ({
  data: {
    tagsGroup: {tags},
  },
}: PageProps<DataType>) => (
  <Layout>
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.value}>
            <Link to={getTagUrl(tag.value)}>
              {tag.value} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default TagsPage;
