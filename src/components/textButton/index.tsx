import {Link} from 'gatsby';
import React from 'react';
import {TextButtonWrapper, Underline} from './styled';

interface Props {
  to?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const NavButton = ({to, onClick, children, disabled}: Props) => {
  if (to) {
    return (
      <Link to={to || '#'}>
        <TextButtonWrapper onClick={onClick} disabled={disabled}>
          {children}
          <Underline />
        </TextButtonWrapper>
      </Link>
    );
  }

  return (
    <TextButtonWrapper onClick={onClick} disabled={disabled}>
      {children}
      <Underline />
    </TextButtonWrapper>
  );
};
