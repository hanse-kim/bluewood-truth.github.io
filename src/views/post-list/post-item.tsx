import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { CustomLink } from 'src/components/custom-link';
import { TagButtonGroup } from 'src/components/tag-button';
import { HeadingSubTitle, PostDate } from 'src/components/typography';
import { type MdxNode } from 'src/types';
import { Styled } from './styled';

interface Props {
  node: MdxNode;
  referrer?: string;
}

export const PostItem = ({ node, referrer }: Props) => {
  return (
    <Styled.PostItem>
      <CustomLink to={routes.post(node.fields.slug)} state={{ referrer }}>
        <Styled.PostItemHeader>
          <HeadingSubTitle>{node.frontmatter.title}</HeadingSubTitle>
          <PostDate>작성일: {node.frontmatter.date}</PostDate>
        </Styled.PostItemHeader>
      </CustomLink>
      <TagButtonGroup tags={node.frontmatter.tags} />
      <Styled.PostItemDescription>{node.excerpt}</Styled.PostItemDescription>
    </Styled.PostItem>
  );
};
