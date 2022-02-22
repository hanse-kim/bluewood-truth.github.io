import React from 'react';
import {graphql, Link, navigate, PageProps} from 'gatsby';
import {Layout} from 'src/views/layout';
import {MdxNode} from 'src/types';
import {PostList} from 'src/views/postList';
import {usePagination} from 'src/hooks/usePagination';
import {PageNav} from 'src/views/pageNav';
import _ from 'lodash';
import {HeadingTitle} from 'src/components/typography';

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

const BlogPage = ({data: {allMdx}}: PageProps<DataType>) => {
  const {paginatedData, currPage, lastPage, setPage} = usePagination(
    allMdx.nodes
  );

  return (
    <Layout>
      <HeadingTitle>전체 글 (총 {allMdx.nodes.length}건)</HeadingTitle>
      <PostList nodes={paginatedData} />
      <PageNav currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default BlogPage;
