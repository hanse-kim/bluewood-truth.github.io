import React from 'react';
import {Logo} from 'src/components/logo';
import {NavButton} from 'src/components/textButton';
import {HeaderInner, HeaderWrapper, NavWrapper} from './styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo />
        <NavWrapper>
          <NavButton>categories</NavButton>
          <NavButton>tags</NavButton>
          <NavButton>search</NavButton>
        </NavWrapper>
      </HeaderInner>
    </HeaderWrapper>
  );
};
