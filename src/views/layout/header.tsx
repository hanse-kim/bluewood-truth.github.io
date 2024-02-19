import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { IconButton } from 'src/components/icon';
import { Logo } from 'src/components/logo';
import { useDarkMode } from 'src/hooks/use-dark-mode';
import { Styled } from './styled';
import { TextButton } from 'src/components/text-button';

export const Header = () => {
  // const { onOpen } = useModal('search');
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Styled.Header>
      <Styled.HeaderInner>
        <Logo to={routes.home} />
        <Styled.Nav>
          <TextButton to={routes.about}>about</TextButton>
          <TextButton to={routes.posts}>posts</TextButton>
          {/* <TextButton to={routes.tags}>tags</TextButton>
          <TextButton onClick={onOpen}>search</TextButton> */}
          <IconButton onClick={toggleDarkMode} iconName={isDarkMode ? 'darkMode' : 'lightMode'} />
        </Styled.Nav>
      </Styled.HeaderInner>
    </Styled.Header>
  );
};
