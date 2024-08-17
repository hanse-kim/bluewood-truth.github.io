import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { CustomLink } from 'src/components/custom-link';
import { TagButtonGroup } from 'src/components/tag-button';
import { PostDate } from 'src/components/typography/post-date';
import { type MdxNode } from 'src/types';

interface Props {
  node: MdxNode;
  referrer?: string;
}

export const PostItem = ({ node, referrer }: Props) => {
  return (
    <li className="flex flex-col gap-12">
      <CustomLink to={routes.post(node.fields.slug)} state={{ referrer }}>
        <hgroup className="flex flex-col gap-2">
          <h2 className="text-28-300">{node.frontmatter.title}</h2>
          <PostDate>{node.frontmatter.date}</PostDate>
        </hgroup>
      </CustomLink>
      <TagButtonGroup tags={node.frontmatter.tags} />
      <p className="w-full text-text-footer text-14-300 line-clamp-2">
        {node.excerpt}
      </p>
    </li>
  );
};
