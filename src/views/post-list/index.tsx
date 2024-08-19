import React from 'react';
import { EmptyMessage } from 'src/components/empty-message';
import { type MdxNode } from 'src/types';
import { PostItem } from './post-item';
import { Loader } from 'src/components/loader';

interface Props {
  nodes: MdxNode[];
  referrer?: string;
  isEmpty?: boolean;
}

export const PostList = ({ nodes, referrer, isEmpty }: Props) => {
  return (
    <ul className="flex flex-col gap-36 mb-72">
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} referrer={referrer} />
      ))}
      {nodes.length === 0 && (
        <EmptyMessage>
          {isEmpty ? '포스트가 없습니다.' : <Loader />}
        </EmptyMessage>
      )}
    </ul>
  );
};
