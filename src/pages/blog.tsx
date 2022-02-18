import React from 'react';
import {graphql, Link, navigate, PageProps} from 'gatsby';
import Layout from 'src/views/layout';
import {MdxNode} from 'src/types';
import PostList from 'src/components/postList';
import usePagination from 'src/hooks/usePagination';
import PageNav from 'src/components/pageNav';
import SearchModal from 'src/views/searchModal';
import _ from 'lodash';

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
      <SearchModal />
      <Link to='tags'>tags</Link>
      <h1>Posts</h1>
      <PostList nodes={paginatedData} />
      <PageNav currPage={currPage} lastPage={lastPage} setPage={setPage} />
    </Layout>
  );
};

export default BlogPage;
