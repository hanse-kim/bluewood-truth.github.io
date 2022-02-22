import React from 'react';
import _ from 'lodash';
import {graphql, PageProps} from 'gatsby';
import {Layout} from 'src/views/layout';
import {MdxNode} from 'src/types';
import {PostList} from 'src/views/postList';
import {usePagination} from 'src/hooks/usePagination';
import {PageNav} from 'src/views/pageNav';
import {HeadingTitle} from 'src/components/typography';
import {parseUrlSearchParams} from 'src/utils/common';

interface DataType {
  allMdx: {
    nodes: MdxNode[];
  };
}

export const pageQuery = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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

const BlogPage = ({data: {allMdx}, location}: PageProps<DataType>) => {
  const {paginatedData, currPage, lastPage, setPage} = usePagination(
    allMdx.nodes,
    {
      initialPage: parseUrlSearchParams(location.search)['page'],
      withRouting: true,
    }
  );

  return (
    <Layout>
      <HeadingTitle>전체 글 (총 {allMdx.nodes.length}건)</HeadingTitle>
      <PostList nodes={paginatedData} referrer={location.href} />
      <PageNav currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default BlogPage;
