import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { TextButton } from 'src/components/text-button';

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
          <TextButton to={routes.tag(tag.value)}>
            {tag.value} ({tag.totalCount})
          </TextButton>
        </li>
      ))}
    </ul>
  );
};
