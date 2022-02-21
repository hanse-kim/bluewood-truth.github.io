import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Layout} from 'src/views/layout';
import {MdxNode} from 'src/types';
import { PostLayout } from 'src/views/postLayout';

interface DataType {
  mdx: MdxNode;
}

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
      body
    }
  }
`;

const PostPage = ({ data: { mdx } }: PageProps<DataType>) => {
  console.log(`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
      body
    }
  }
`);
  return (
    <Layout title={mdx.frontmatter.title}>
      <PostLayout backUrl='/blog' post={mdx} />
    </Layout>
  );
};

export default PostPage;
