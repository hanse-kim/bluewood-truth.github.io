import React from 'react';
import {
  ArrowForwardSvg,
  CloseSvg,
  DarkModeSvg,
  GithubSvg,
  LightModeSvg,
  MailSvg,
  SearchSvg,
} from './assets';
import { IconButtonWrapper, IconWrapper } from './styled';

const iconMap = {
  arrowForward: ArrowForwardSvg,
  close: CloseSvg,
  darkMode: DarkModeSvg,
  lightMode: LightModeSvg,
  mail: MailSvg,
  github: GithubSvg,
  search: SearchSvg,
};

type IconName = keyof typeof iconMap;

export interface IconProps {
  size?: 20 | 24 | 40;
  iconName: IconName;
}

export const Icon = ({ iconName, size = 24, ...props }: IconProps) => {
  return (
    <IconWrapper className="material-symbols-rounded" size={size} {...props}>
      {iconMap[iconName]}
    </IconWrapper>
  );
};

interface IconButtonProps extends IconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({ onClick, ...props }: IconButtonProps) => {
  return (
    <IconButtonWrapper onClick={onClick}>
      <Icon {...props} />
    </IconButtonWrapper>
  );
};
