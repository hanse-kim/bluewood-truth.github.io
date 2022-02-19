import React from 'react';
import {getTagUrl} from 'src/utils/common';
import {TagButtonGroupWrapper, TagButtonWrapper} from './styled';

export const TagButton = ({tag}: {tag: string}) => {
  return (
    <a href={getTagUrl(tag)}>
      <TagButtonWrapper>{tag}</TagButtonWrapper>
    </a>
  );
};

export const TagButtonGroup = ({ tags }: { tags: string[] }) => {
  if (!tags) {
    return null;
  }

  return (
    <TagButtonGroupWrapper>
      {tags.map((tag, index) => (
        <TagButton key={index} tag={tag} />
      ))}
    </TagButtonGroupWrapper>
  );
};
