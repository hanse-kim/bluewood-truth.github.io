import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { Logo } from 'src/components/logo';
import { TextButton } from 'src/components/text-button';
import { useModal } from 'src/contexts/modal-context';
import { Styled } from './styled';

export const Header = () => {
  const { onOpen } = useModal('search');

  return (
    <Styled.Header>
      <Styled.HeaderInner>
        <Logo to={routes.home} />
        <Styled.Nav>
          <TextButton to={routes.tags}>tags</TextButton>
          <TextButton onClick={onOpen}>search</TextButton>
        </Styled.Nav>
      </Styled.HeaderInner>
    </Styled.Header>
  );
};
