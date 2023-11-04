import React from 'react';
import { graphql, type PageProps } from 'gatsby';
import { Layout } from 'src/views/layout';
import { HeadingTitle } from 'src/components/typography';
import { TagList } from 'src/views/tag-list';

interface DataType {
  tagsGroup: {
    tags: Array<{
      value: string;
      totalCount: number;
    }>;
  };
}

export const pageQuery = graphql`
  query {
    tagsGroup: allMdx(limit: 2000, filter: { frontmatter: { hide: { eq: false } } }) {
      tags: group(field: frontmatter___tags) {
        value: fieldValue
        totalCount
      }
    }
  }
`;

const TagsPage = ({
  data: {
    tagsGroup: { tags },
  },
}: PageProps<DataType>) => (
  <Layout>
    <HeadingTitle>모든 태그 (총 {tags.length}개)</HeadingTitle>
    <TagList tags={tags} />
  </Layout>
);

export default TagsPage;
