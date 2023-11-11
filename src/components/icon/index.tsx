import React from 'react';
import { IconButtonWrapper, IconWrapper, type IconProps } from './styled';

export const Icon = ({ children }: IconProps) => {
  return <IconWrapper className="material-symbols-rounded">{children}</IconWrapper>;
};

interface IconButtonProps extends IconProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({ children, onClick, ...props }: IconButtonProps) => {
  return (
    <IconButtonWrapper onClick={onClick}>
      <Icon {...props}>{children}</Icon>
    </IconButtonWrapper>
  );
};
