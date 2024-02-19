import React from 'react';
import { useGithubProfile } from 'src/hooks/use-github-profile';
import { Styled } from './styled';
import { HeadingSubTitle } from 'src/components/typography';
import { Icon } from 'src/components/icon';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';

export const Profile = () => {
  const { profile } = useGithubProfile();
  const siteMetadata = useSiteMetadata();

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
        <span>{siteMetadata.description}</span>
      </Styled.ProfileInfo>
    </Styled.ProfileLayout>
  );
};
