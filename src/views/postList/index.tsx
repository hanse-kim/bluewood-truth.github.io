import React from 'react';
import {MdxNode} from 'src/types';
import {PostItem} from './postItem';
import {PostListWrapper} from './styled';

export const PostList = ({nodes}: {nodes: MdxNode[]}) => {
  return (
    <PostListWrapper>
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} />
      ))}
    </PostListWrapper>
  );
};
