import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { filterHidedNodes, parseUrlSearchParams } from 'src/_common/utils';
import { HeadingTitle } from 'src/components/typography';
import { usePaginatedData } from 'src/hooks/use-paginated-data';
import { type MdxNode } from 'src/types';
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
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          tags
          hide
        }
        excerpt(pruneLength: 200)
        fields {
          slug
        }
      }
    }
  }
`;

const PostsPage = ({ data: { allMdx }, location }: PageProps<DataType>) => {
  const filteredNodes = filterHidedNodes(allMdx.nodes);
  const { paginatedData, currPage, lastPage, setPage } = usePaginatedData(filteredNodes, {
    initialPage: parseUrlSearchParams(location.search).page,
    withRouting: true,
  });

  return (
    <Layout>
      <HeadingTitle>전체 글 (총 {filteredNodes.length}건)</HeadingTitle>
      <PostList nodes={paginatedData} referrer={location.href} />
      <Pagination currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default PostsPage;
