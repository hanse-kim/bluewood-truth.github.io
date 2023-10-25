import { Link } from 'gatsby';
import React from 'react';
import { TagButtonGroup } from 'src/components/tag-button';
import { HeadingSubTitle, PostDate } from 'src/components/typography';
import { type MdxNode } from 'src/types';
import { getPostUrl } from 'src/utils/common';
import { Styled } from './styled';

interface Props {
  node: MdxNode;
  referrer?: string;
}

export const PostItem = ({ node, referrer }: Props) => {
  return (
    <Styled.PostItem>
      <Link to={getPostUrl(node.slug)} state={{ referrer }}>
        <Styled.PostItemHeader>
          <HeadingSubTitle>{node.frontmatter.title}</HeadingSubTitle>
          <PostDate>작성일: {node.frontmatter.date}</PostDate>
        </Styled.PostItemHeader>
      </Link>
      <TagButtonGroup tags={node.frontmatter.tags} />
      <Styled.PostItemDescription>{node.excerpt}</Styled.PostItemDescription>
    </Styled.PostItem>
  );
};
