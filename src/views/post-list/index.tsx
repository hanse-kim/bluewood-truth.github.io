import React from 'react';
import { EmptyMessage } from 'src/components/empty-message';
import { type MdxNode } from 'src/types';
import { PostItem } from './post-item';

interface Props {
  nodes: MdxNode[];
  referrer?: string;
}

export const PostList = ({ nodes, referrer }: Props) => {
  return (
    <ul className="flex flex-col gap-36 mb-72">
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} referrer={referrer} />
      ))}
      {nodes.length === 0 && <EmptyMessage>포스트가 없습니다.</EmptyMessage>}
    </ul>
  );
};
