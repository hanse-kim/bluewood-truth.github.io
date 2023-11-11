import { graphql, type PageProps } from 'gatsby';
import React, { useMemo } from 'react';
import { filterHidedNodes, parseUrlSearchParams } from 'src/_common/utils';
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
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
            hide
          }
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
  const { edges } = data.allMdx;
  const nodes = useMemo(() => filterHidedNodes(edges.map((edge) => edge.node)), [edges]);

  const { paginatedData, currPage, lastPage, setPage } = usePaginatedData(nodes, {
    initialPage: parseUrlSearchParams(location.search).page,
    withRouting: true,
  });

  return (
    <Layout>
      <title>태그: {tag}</title>
      <HeadingTitle>
        태그: {tag} (총 {nodes.length}건)
      </HeadingTitle>
      <PostList nodes={paginatedData} referrer={location.href} />
      <Pagination currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default TagPage;
