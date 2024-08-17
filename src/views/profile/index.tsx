import React from 'react';
import { HeadingSubTitle } from 'src/components/typography';
import { useGithubProfile } from 'src/hooks/use-github-profile';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { IconLink } from './icon-link';

export const Profile = () => {
  const { profile } = useGithubProfile();
  const siteMetadata = useSiteMetadata();

  if (!profile) {
    return null;
  }

  return (
    <div className="mt-48 mx-auto flex items-center gap-24 tablet:gap-12 tablet:flex-col tablet:items-center">
      <img
        className="w-180 h-180 border-1 border-solid border-border rounded-full object-cover"
        src={profile.avatar_url}
        alt={profile.name}
      />
      <div className="flex flex-col gap-8 tablet:items-center">
        <HeadingSubTitle>{profile.name}</HeadingSubTitle>
        <div className="flex items-center gap-16">
          <IconLink
            url="mailto:hansekim.dev@gmail.com"
            label="Email"
            iconName="mail"
          />
          <IconLink
            url="https://github.com/hanse-kim"
            label="Github"
            iconName="github"
          />
        </div>
        {!!profile.bio && <span>{profile.bio}</span>}
        <span>{siteMetadata.description}</span>
      </div>
    </div>
  );
};
