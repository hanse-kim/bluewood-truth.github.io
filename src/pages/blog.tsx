import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { HeadingTitle } from 'src/components/typography';
import { usePagination } from 'src/hooks/use-pagination';
import { type MdxNode } from 'src/types';
import { parseUrlSearchParams } from 'src/_common/utils';
import { Layout } from 'src/views/layout';
import { PageNav } from 'src/views/page-nav';
import { PostList } from 'src/views/post-list';

interface DataType {
  allMdx: {
    nodes: MdxNode[];
  };
}

export const pageQuery = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
        }
        rawBody
        excerpt(pruneLength: 200)
      }
    }
  }
`;

const BlogPage = ({ data: { allMdx }, location }: PageProps<DataType>) => {
  const { paginatedData, currPage, lastPage, setPage } = usePagination(allMdx.nodes, {
    initialPage: parseUrlSearchParams(location.search).page,
    withRouting: true,
  });

  return (
    <Layout>
      <HeadingTitle>전체 글 (총 {allMdx.nodes.length}건)</HeadingTitle>
      <PostList nodes={paginatedData} referrer={location.href} />
      <PageNav currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default BlogPage;
