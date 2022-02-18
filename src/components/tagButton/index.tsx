import React from 'react';
import {getTagUrl} from 'src/utils/common';
import {TagButtonWrapper} from './styled';

export const TagButton = ({tag}: {tag: string}) => {
  return (
    <a href={getTagUrl(tag)}>
      <TagButtonWrapper>{tag}</TagButtonWrapper>
    </a>
  );
};
