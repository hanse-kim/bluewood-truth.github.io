import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { CustomLink } from '../custom-link';

export const TagButton = ({ tag }: { tag: string }) => {
  return (
    <CustomLink to={routes.tag(tag)}>
      <button className="pt-3 px-8 pb-4 rounded-4 bg-border text-main text-12-400 transition-colors hover:text-bg hover:bg-main">
        {tag}
      </button>
    </CustomLink>
  );
};

export const TagButtonGroup = ({ tags }: { tags: string[] }) => {
  if (!tags) {
    return null;
  }

  return (
    <span className="flex items-center gap-8">
      {tags.map((tag, index) => (
        <TagButton key={index} tag={tag} />
      ))}
    </span>
  );
};
