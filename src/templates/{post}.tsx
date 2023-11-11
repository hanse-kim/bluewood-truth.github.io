import { graphql, type PageProps } from 'gatsby';
import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { type MdxNode } from 'src/types';
import { Layout } from 'src/views/layout';
import { PostLayout } from 'src/views/post-layout';

interface DataType {
  mdx: MdxNode;
}

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`;

export const Head = ({ data }: PageProps<DataType>) => {
  return <title>{data.mdx.frontmatter.title}</title>;
};

const PostPage = ({
  data: { mdx },
  location,
  children,
}: PageProps<DataType, object, { referrer: string }>) => {
  return (
    <Layout>
      <PostLayout backUrl={location.state?.referrer ?? routes.home} post={mdx}>
        {children}
      </PostLayout>
    </Layout>
  );
};

export default PostPage;
