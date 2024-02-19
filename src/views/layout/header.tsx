import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { IconButton } from 'src/components/icon';
import { Logo } from 'src/components/logo';
import { useDarkMode } from 'src/hooks/use-dark-mode';
import { Styled } from './styled';

export const Header = () => {
  // const { onOpen } = useModal('search');
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Styled.Header>
      <Styled.HeaderInner>
        <Logo to={routes.home} />
        <Styled.Nav>
          {/* <TextButton to={routes.tags}>tags</TextButton>
          <TextButton onClick={onOpen}>search</TextButton> */}
          <IconButton onClick={toggleDarkMode} iconName={isDarkMode ? 'darkMode' : 'lightMode'} />
        </Styled.Nav>
      </Styled.HeaderInner>
    </Styled.Header>
  );
};
