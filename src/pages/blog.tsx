import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { HeadingTitle } from 'src/components/typography';
import { usePaginatedData } from 'src/hooks/use-paginated-data';
import { type MdxNode } from 'src/types';
import { parseUrlSearchParams } from 'src/_common/utils';
import { Layout } from 'src/views/layout';
import { Pagination } from 'src/views/pagination';
import { PostList } from 'src/views/post-list';

interface DataType {
  allMdx: {
    nodes: MdxNode[];
  };
}

export const pageQuery = graphql`
  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { hide: { eq: false } } }
    ) {
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
  const { paginatedData, currPage, lastPage, setPage } = usePaginatedData(allMdx.nodes, {
    initialPage: parseUrlSearchParams(location.search).page,
    withRouting: true,
  });

  return (
    <Layout>
      <HeadingTitle>전체 글 (총 {allMdx.nodes.length}건)</HeadingTitle>
      <PostList nodes={paginatedData} referrer={location.href} />
      <Pagination currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default BlogPage;
