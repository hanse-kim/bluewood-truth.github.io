import React from 'react';
import {graphql, Link, PageProps} from 'gatsby';
import {MdxNode} from 'src/types';
import Layout from 'src/components/layout';
import PostList from 'src/components/postList';

interface PageContextType {
  tag: string;
}

interface DataType {
  allMdx: {
    edges: {node: MdxNode}[];
    totalCount: number;
  };
}

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
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
        }
      }
    }
  }
`;

const TagPage = ({pageContext, data}: PageProps<DataType, PageContextType>) => {
  const {tag} = pageContext;
  const {edges, totalCount} = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <PostList nodes={edges.map((edge) => edge.node)} />
      <Link to='/tag'>All tags</Link>
    </Layout>
  );
};

export default TagPage;
