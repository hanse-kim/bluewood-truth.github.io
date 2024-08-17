import React from 'react';
import { Icon, IconName } from 'src/components/icon';

type IconLinkProps = {
  label: string;
  url: string;
  iconName: IconName;
};

export const IconLink = ({ label, url, iconName }: IconLinkProps) => {
  return (
    <a className="flex items-center gap-4 text-14-500" href={url}>
      <Icon iconName={iconName} />
      <span>{label}</span>
    </a>
  );
};
