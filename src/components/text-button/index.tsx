import React from 'react';
import { CustomLink } from '../custom-link';
import { TextButtonWrapper, Underline } from './styled';
interface Props {
  to?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const TextButton = ({ to, onClick, children, disabled }: Props) => {
  return (
    <CustomLink to={to}>
      <TextButtonWrapper onClick={onClick} disabled={disabled}>
        {children}
        <Underline />
      </TextButtonWrapper>
    </CustomLink>
  );
};
