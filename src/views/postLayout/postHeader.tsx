import React from 'react';
import {TagButtonGroup} from 'src/components/tagButton';
import {HeadingTitle, PostDate} from 'src/components/typography';
import {PostHeaderWrapper} from './styled';
import {NavButton} from 'src/components/textButton';

interface Props {
  backUrl?: string;
  title: string;
  date: string;
  tags: string[];
}

export const PostHeader = ({backUrl, title, date, tags}: Props) => {
  return (
    <PostHeaderWrapper>
      {backUrl && <NavButton to={backUrl}>{'< 이전 페이지로'}</NavButton>}
      <hgroup>
        <HeadingTitle>{title}</HeadingTitle>
        <PostDate>{`작성일: ${date}`}</PostDate>
      </hgroup>
      <TagButtonGroup tags={tags} />
    </PostHeaderWrapper>
  );
};
