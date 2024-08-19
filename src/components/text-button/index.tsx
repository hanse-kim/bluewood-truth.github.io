import React from 'react';
import { CustomLink } from '../custom-link';
interface Props {
  to?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const TextButton = ({
  to,
  onClick,
  children,
  isDisabled,
  isActive,
}: Props) => {
  return (
    <CustomLink to={to}>
      <button
        className="pt-2 cursor-pointer w-fit disabled:cursor-default hover:drop-shadow-text data-[active=true]:drop-shadow-text group"
        onClick={onClick}
        disabled={isDisabled}
        data-active={isActive}
      >
        {children}
        <div className="w-full h-1 mx-auto mt-1 transition-transform scale-x-0 bg-text group-hover:scale-x-100 group-data-[active=true]:scale-x-100" />
      </button>
    </CustomLink>
  );
};
