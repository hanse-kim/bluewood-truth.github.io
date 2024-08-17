import React from 'react';
import { CustomLink } from '../custom-link';
import { Underline } from './styled';
interface Props {
  to?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const TextButton = ({ to, onClick, children, disabled }: Props) => {
  return (
    <CustomLink to={to}>
      <button
        className="w-fit pt-2 cursor-pointer transition-shadow disabled:cursor-default hover:not(disabled):drop-shadow-text"
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        <Underline />
      </button>
    </CustomLink>
  );
};
