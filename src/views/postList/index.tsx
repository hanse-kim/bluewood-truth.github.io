import React from 'react';
import {MdxNode} from 'src/types';
import {PostItem} from './postItem';
import {PostListWrapper} from './styled';

interface Props {
  nodes: MdxNode[];
  referrer?: string;
}

export const PostList = ({nodes, referrer}: Props) => {
  return (
    <PostListWrapper>
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} referrer={referrer} />
      ))}
    </PostListWrapper>
  );
};
