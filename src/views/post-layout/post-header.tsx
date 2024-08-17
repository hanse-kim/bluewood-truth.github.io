import React from 'react';
import { TagButtonGroup } from 'src/components/tag-button';
import { TextButton } from 'src/components/text-button';
import { HeadingTitle } from 'src/components/typography/heading-title';

import { PostDate } from 'src/components/typography/post-date';

interface Props {
  backUrl: string;
  title: string;
  date: string;
  tags: string[];
}

export const PostHeader = ({ backUrl, title, date, tags }: Props) => {
  return (
    <header className="flex flex-col gap-16">
      <TextButton to={backUrl}>{'< 이전 페이지로'}</TextButton>
      <hgroup>
        <HeadingTitle>{title}</HeadingTitle>
        <PostDate>{date}</PostDate>
      </hgroup>
      <TagButtonGroup tags={tags} />
    </header>
  );
};
