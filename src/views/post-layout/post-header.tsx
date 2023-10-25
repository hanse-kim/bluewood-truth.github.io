import React from 'react';
import { TagButtonGroup } from 'src/components/tag-button';
import { HeadingTitle, PostDate } from 'src/components/typography';
import { Styled } from './styled';
import { TextButton } from 'src/components/text-button';

interface Props {
  backUrl: string;
  title: string;
  date: string;
  tags: string[];
}

export const PostHeader = ({ backUrl, title, date, tags }: Props) => {
  return (
    <Styled.PostHeader>
      <TextButton to={backUrl}>{'< 이전 페이지로'}</TextButton>
      <hgroup>
        <HeadingTitle>{title}</HeadingTitle>
        <PostDate>{`작성일: ${date}`}</PostDate>
      </hgroup>
      <TagButtonGroup tags={tags} />
    </Styled.PostHeader>
  );
};
