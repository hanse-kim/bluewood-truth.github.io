import React from 'react';
import { type MdxNode } from 'src/types';
import { PostItem } from './post-item';
import { Styled } from './styled';

interface Props {
  nodes: MdxNode[];
  referrer?: string;
}

export const PostList = ({ nodes, referrer }: Props) => {
  return (
    <Styled.PostList>
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} referrer={referrer} />
      ))}
    </Styled.PostList>
  );
};
