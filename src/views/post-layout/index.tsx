import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { type MdxNode } from 'src/types';
import { PostHeader } from './post-header';
import { Styled } from './styled';
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
  Image,
} from 'src/components/markdown';

interface Props {
  backUrl: string;
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
  img: Image,
};

export const PostLayout = ({ post, backUrl }: Props) => {
  return (
    <Styled.PostLayout>
      <PostHeader backUrl={backUrl} {...post.frontmatter} />
      <Styled.PostContent>
        <MDXProvider components={components}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </Styled.PostContent>
    </Styled.PostLayout>
  );
};
