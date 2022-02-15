import React from 'react';
import {MdxNode} from 'src/types';
import PostItem from './postItem';

const PostList = ({nodes}: {nodes: MdxNode[]}) => {
  return (
    <ul>
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} />
      ))}
    </ul>
  );
};

export default PostList;
