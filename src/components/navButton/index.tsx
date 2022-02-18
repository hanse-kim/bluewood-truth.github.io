import {Link} from 'gatsby';
import React from 'react';
import {NavButtonWrapper, Underline} from './styled';

interface Props {
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const NavButton = ({ to, onClick, children }: Props) => {
  if (to) {
    return (
      <Link to={to || '#'}>
        <NavButtonWrapper onClick={onClick}>
          {children}
          <Underline />
        </NavButtonWrapper>
      </Link>
    );
  }

  return (
    <NavButtonWrapper onClick={onClick}>
      {children}
      <Underline />
    </NavButtonWrapper>
  );
};
