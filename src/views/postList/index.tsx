import React from 'react';
import {MdxNode} from 'src/types';
import {PostItem} from './postItem';
import {Styled} from './styled';

interface Props {
  nodes: MdxNode[];
  referrer?: string;
}

export const PostList = ({nodes, referrer}: Props) => {
  return (
    <Styled.PostList>
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} referrer={referrer} />
      ))}
    </Styled.PostList>
  );
};
