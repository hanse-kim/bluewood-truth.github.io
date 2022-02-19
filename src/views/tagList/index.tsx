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
  const allTagsTotalCount = tags.reduce(
    (prev, curr) => prev + curr.totalCount, 0
  );

  return (
    <ul>
      {tags.map((tag) => (
        <li>
          <TextButton key={tag.value} to={getTagUrl(tag.value)}>
            {tag.value} ({tag.totalCount})
          </TextButton>
        </li>
      ))}
    </ul>
  );
};
