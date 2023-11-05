import { graphql, type PageProps } from 'gatsby';
import React, { useMemo } from 'react';
import { parseUrlSearchParams } from 'src/_common/utils';
import { HeadingTitle } from 'src/components/typography';
import { usePaginatedData } from 'src/hooks/use-paginated-data';
import { type MdxNode } from 'src/types';
import { Layout } from 'src/views/layout';
import { Pagination } from 'src/views/pagination';
import { PostList } from 'src/views/post-list';

interface PageContextType {
  tag: string;
}

interface DataType {
  allMdx: {
    edges: Array<{ node: MdxNode }>;
    totalCount: number;
  };
}

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, hide: { eq: false } } }
    ) {
      totalCount
      edges {
        node {
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
  }
`;

const TagPage = ({
  pageContext,
  data,
  location,
}: PageProps<DataType, PageContextType, { referrer: string }>) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMdx;
  const nodes = useMemo(() => edges.map((edge) => edge.node), [edges]);

  const { paginatedData, currPage, lastPage, setPage } = usePaginatedData(nodes, {
    initialPage: parseUrlSearchParams(location.search).page,
    withRouting: true,
  });

  return (
    <Layout>
      <HeadingTitle>
        태그: {tag} (총 {totalCount}건)
      </HeadingTitle>
      <PostList nodes={paginatedData} referrer={location.href} />
      <Pagination currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default TagPage;
