import React from 'react';
import { useGithubProfile } from 'src/hooks/use-github-profile';
import { Styled } from './styled';
import { HeadingSubTitle } from 'src/components/typography';
import { Icon } from 'src/components/icon';

export const Profile = () => {
  const { profile } = useGithubProfile();

  if (!profile) {
    return null;
  }

  return (
    <Styled.ProfileLayout>
      <Styled.AvatarImage src={profile.avatar_url} alt={profile.name} />
      <Styled.ProfileInfo>
        <HeadingSubTitle>{profile.name}</HeadingSubTitle>
        <Styled.Links>
          <Styled.IconLink href="mailto:hansekim.dev@gmail.com">
            <Icon iconName="mail" />
            <span>Email</span>
          </Styled.IconLink>
          <Styled.IconLink href="https://github.com/hanse-kim">
            <Icon iconName="github" /> <span>Github</span>
          </Styled.IconLink>
        </Styled.Links>
        {!!profile.bio && <span>{profile.bio}</span>}
        <span>
          개발 과정에서 겪은 문제와 그것을 어떻게 해결했는지를 기록하기 위한 블로그입니다.
        </span>
      </Styled.ProfileInfo>
    </Styled.ProfileLayout>
  );
};
