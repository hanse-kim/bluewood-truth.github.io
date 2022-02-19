import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {MdxNode} from 'src/types';
import {PostHeader} from './postHeader';
import {PostContentWrapper, PostLayoutWrapper} from './styled';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  OrderedList,
  UnorderedList,
  Paragraph,
  Strong,
  Anchor,
  Blockquote,
  ListItem,
  Code,
} from 'src/components/markdown';

interface Props {
  backUrl?: string;
  post: MdxNode;
}

const components = {
  p: Paragraph,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  strong: Strong,
  a: Anchor,
  inlineCode: Code,
  blockquote: Blockquote,
};

export const PostLayout = ({post, backUrl}: Props) => {
  return (
    <PostLayoutWrapper>
      <PostHeader backUrl={backUrl} {...post.frontmatter} />
      <PostContentWrapper>
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </PostContentWrapper>
    </PostLayoutWrapper>
  );
};
