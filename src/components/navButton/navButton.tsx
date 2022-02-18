import React from 'react';
import {NavButtonWrapper, Underline} from './styled';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const NavButton = ({onClick, children}: Props) => {
  return (
    <NavButtonWrapper onClick={onClick}>
      {children}
      <Underline />
    </NavButtonWrapper>
  );
};

export default NavButton;
