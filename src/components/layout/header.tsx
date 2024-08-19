import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { IconButton } from 'src/components/icon';
import { Logo } from 'src/components/logo';
import { TextButton } from 'src/components/text-button';
import { useDarkMode } from 'src/hooks/use-dark-mode';

export const Header = () => {
  // const { onOpen } = useModal('search');
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="sticky top-0 border-solid h-header-height border-b-1 border-border bg-bg z-modal">
      <div className="flex items-center justify-between h-full px-1 mx-auto my-0 max-w-screen-width max-auto">
        <Logo to={routes.home} />
        <nav className="flex gap-8">
          <TextButton to={routes.about}>about</TextButton>
          <TextButton to={routes.posts}>posts</TextButton>
          {/* <TextButton to={routes.tags}>tags</TextButton>
          <TextButton onClick={onOpen}>search</TextButton> */}
          <IconButton
            onClick={toggleDarkMode}
            iconName={isDarkMode ? 'darkMode' : 'lightMode'}
          />
        </nav>
      </div>
    </header>
  );
};
