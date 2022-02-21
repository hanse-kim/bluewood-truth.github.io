import React from 'react';
import {Link} from 'gatsby';
import {MdxNode} from 'src/types';
import {getPlainTextFromMarkdown, getPostUrl} from 'src/utils/common';
import {TagButtonGroup} from 'src/components/tagButton';
import {
  PostItemHeader,
  PostItemDescription,
  PostItemWrapper,
} from './styled';
import {HeadingSubTitle, PostDate} from 'src/components/typography';

export const PostItem = ({node}: {node: MdxNode}) => {
  return (
    <PostItemWrapper>
      <Link to={getPostUrl(node.slug)}>
        <PostItemHeader>
          <HeadingSubTitle>{node.frontmatter.title}</HeadingSubTitle>
          <PostDate>작성일: {node.frontmatter.date}</PostDate>
        </PostItemHeader>
      </Link>
      <TagButtonGroup tags={node.frontmatter.tags} />
      <PostItemDescription>
        {getPlainTextFromMarkdown(node.rawBody)}
      </PostItemDescription>
    </PostItemWrapper>
  );
};
