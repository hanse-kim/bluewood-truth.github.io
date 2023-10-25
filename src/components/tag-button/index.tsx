import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { TagButtonGroupWrapper, TagButtonWrapper } from './styled';
import { CustomLink } from '../custom-link';

export const TagButton = ({ tag }: { tag: string }) => {
  return (
    <CustomLink to={routes.tag(tag)}>
      <TagButtonWrapper>{tag}</TagButtonWrapper>
    </CustomLink>
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
