import React from 'react';
import {Link} from 'gatsby';
import {MdxNode} from 'src/types';
import {getPostUrl} from 'src/utils/common';
import {TagButtonGroup} from 'src/components/tagButton';
import {PostItemHeader, PostItemDescription, PostItemWrapper} from './styled';
import {HeadingSubTitle, PostDate} from 'src/components/typography';

interface Props {
  node: MdxNode;
  referrer?: string;
}

export const PostItem = ({node, referrer}: Props) => {
  return (
    <PostItemWrapper>
      <Link to={getPostUrl(node.slug)} state={{referrer}}>
        <PostItemHeader>
          <HeadingSubTitle>{node.frontmatter.title}</HeadingSubTitle>
          <PostDate>작성일: {node.frontmatter.date}</PostDate>
        </PostItemHeader>
      </Link>
      <TagButtonGroup tags={node.frontmatter.tags} />
      <PostItemDescription>{node.excerpt}</PostItemDescription>
    </PostItemWrapper>
  );
};
