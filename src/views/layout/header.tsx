import React from 'react';
import {Logo} from 'src/components/logo';
import {TextButton} from 'src/components/textButton';
import {useModal} from 'src/contexts/modalContext';
import {HeaderInner, HeaderWrapper, NavWrapper} from './styled';

export const Header = () => {
  const {onOpen} = useModal('search');

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo to='/blog' />
        <NavWrapper>
          <TextButton to='/blog'>posts</TextButton>
          <TextButton to='/tag'>tags</TextButton>
          <TextButton onClick={onOpen}>search</TextButton>
        </NavWrapper>
      </HeaderInner>
    </HeaderWrapper>
  );
};
