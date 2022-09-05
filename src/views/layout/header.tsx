import React from 'react';
import {Logo} from 'src/components/logo';
import {TextButton} from 'src/components/textButton';
import {useModal} from 'src/contexts/modalContext';
import {Styled} from './styled';

export const Header = () => {
  const {onOpen} = useModal('search');

  return (
    <Styled.Header>
      <Styled.HeaderInner>
        <Logo to='/blog' />
        <Styled.Nav>
          <TextButton to='/blog'>posts</TextButton>
          <TextButton to='/tag'>tags</TextButton>
          <TextButton onClick={onOpen}>search</TextButton>
        </Styled.Nav>
      </Styled.HeaderInner>
    </Styled.Header>
  );
};
