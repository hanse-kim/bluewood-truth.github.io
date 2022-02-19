import React from 'react';
import {Logo} from 'src/components/logo';
import {NavButton} from 'src/components/textButton';
import {useModal} from 'src/contexts/modalContext';
import {HeaderInner, HeaderWrapper, NavWrapper} from './styled';

export const Header = () => {
  const {onOpen} = useModal('search');

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo />
        <NavWrapper>
          <NavButton>categories</NavButton>
          <NavButton>tags</NavButton>
          <NavButton onClick={onOpen}>search</NavButton>
        </NavWrapper>
      </HeaderInner>
    </HeaderWrapper>
  );
};
