import React from 'react';
import {TextButton} from 'src/components/textButton';
import {getTagUrl} from 'src/utils/common';

interface Props {
  tags: {
    value: string;
    totalCount: number;
  }[];
}

export const TagList = ({tags}: Props) => {
  return (
    <ul>
      {tags.map((tag, i) => (
        <li key={tag.value}>
          <TextButton to={getTagUrl(tag.value)}>
            {tag.value} ({tag.totalCount})
          </TextButton>
        </li>
      ))}
    </ul>
  );
};
