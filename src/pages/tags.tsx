import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { SEO } from 'src/components/seo';
import { HeadingTitle } from 'src/components/typography';
import { Layout } from 'src/views/layout';
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
    tagsGroup: allMdx(limit: 2000) {
      tags: group(field: { frontmatter: { tags: SELECT } }) {
        value: fieldValue
        totalCount
      }
    }
  }
`;

export const Head = (props: PageProps) => <SEO title="Tags" {...props} />;

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
