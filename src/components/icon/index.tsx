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

const iconMap = {
  arrowForward: ArrowForwardSvg,
  close: CloseSvg,
  darkMode: DarkModeSvg,
  lightMode: LightModeSvg,
  mail: MailSvg,
  github: GithubSvg,
  search: SearchSvg,
};

export type IconName = keyof typeof iconMap;

export interface IconProps {
  size?: 20 | 24 | 40;
  iconName: IconName;
}

export const Icon = ({ iconName, size = 24, ...props }: IconProps) => {
  return (
    <span
      className="flex"
      style={{ width: `${size}px`, height: `${size}px` }}
      {...props}
    >
      {iconMap[iconName]}
    </span>
  );
};

interface IconButtonProps extends IconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({ onClick, ...props }: IconButtonProps) => {
  return (
    <button
      className="flex p-4 transition-colors bg-transparent rounded-full text-text-footer hover:scale-105 active:scale-110 active:bg-bg-footer"
      onClick={onClick}
    >
      <Icon {...props} />
    </button>
  );
};
