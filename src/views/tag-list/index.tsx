import React from 'react';
import { TextButton } from 'src/components/text-button';
import { getTagUrl } from 'src/utils/common';

interface Props {
  tags: Array<{
    value: string;
    totalCount: number;
  }>;
}

export const TagList = ({ tags }: Props) => {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.value}>
          <TextButton to={getTagUrl(tag.value)}>
            {tag.value} ({tag.totalCount})
          </TextButton>
        </li>
      ))}
    </ul>
  );
};
