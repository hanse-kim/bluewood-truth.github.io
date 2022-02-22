import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Layout} from 'src/views/layout';
import {MdxNode} from 'src/types';
import {PostLayout} from 'src/views/postLayout';

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

const PostPage = ({
  data: {mdx},
  location,
}: PageProps<DataType, object, {referrer: string}>) => {
  return (
    <Layout title={mdx.frontmatter.title}>
      <PostLayout backUrl={location.state?.referrer || '/blog'} post={mdx} />
    </Layout>
  );
};

export default PostPage;
