import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import {
  Anchor,
  Blockquote,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Image,
  ListItem,
  OrderedList,
  Paragraph,
  Strong,
  Table,
  UnorderedList,
} from 'src/components/markdown';
import { type MdxNode } from 'src/types';
import { PostHeader } from './post-header';

interface Props {
  backUrl: string;
  post: MdxNode;
  children: React.ReactNode;
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
  code: Code,
  blockquote: Blockquote,
  img: Image,
  table: Table,
};

export const PostLayout = ({ post, backUrl, children }: Props) => {
  return (
    <article className="flex flex-col gap-36">
      <PostHeader backUrl={backUrl} {...post.frontmatter} />
      <div className="flex flex-col gap-16">
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </article>
  );
};
