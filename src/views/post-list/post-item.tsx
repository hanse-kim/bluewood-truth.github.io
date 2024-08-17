import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { CustomLink } from 'src/components/custom-link';
import { TagButtonGroup } from 'src/components/tag-button';
import { type MdxNode } from 'src/types';

interface Props {
  node: MdxNode;
  referrer?: string;
}

export const PostItem = ({ node, referrer }: Props) => {
  return (
    <div className="flex flex-col gap-12">
      <CustomLink to={routes.post(node.fields.slug)} state={{ referrer }}>
        <hgroup className="flex flex-col gap-2">
          <h2 className="text-28-300">{node.frontmatter.title}</h2>
          <div className="text-16-300">작성일: {node.frontmatter.date}</div>
        </hgroup>
      </CustomLink>
      <TagButtonGroup tags={node.frontmatter.tags} />
      <p className="text-text-footer text-14-300 w-full line-clamp-2">
        {node.excerpt}
      </p>
    </div>
  );
};
