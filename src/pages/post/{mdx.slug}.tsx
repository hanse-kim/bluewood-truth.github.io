import React from 'react';
import {graphql, Link, PageProps} from 'gatsby';
import {Layout} from 'src/views/layout';
import {MdxNode} from 'src/types';
import {MDXRenderer} from 'gatsby-plugin-mdx';

interface DataType {
  mdx: MdxNode;
}

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
      body
    }
  }
`;

const PostPage = ({data: {mdx}}: PageProps<DataType>) => {
  return (
    <Layout title={mdx.frontmatter.title}>
      <Link to='/blog'>목록으로 가기</Link>
      <h1>{mdx.frontmatter.title}</h1>
      <div>작성일: {mdx.frontmatter.date}</div>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default PostPage;
