import { Global } from '@emotion/react';
import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { globalStyles } from 'src/styles/global';
import { ModalProvider } from '../../contexts/modal-context';
import { Footer } from './footer';
import { Header } from './header';
import { Main } from './main';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { githubName, githubUrl, publishYear } = useSiteMetadata();

  return (
    <div className="flex flex-col min-h-[100dv]">
      <Global styles={globalStyles} />
      <ModalProvider>
        <Header />
        <Main>{children}</Main>
        <Footer
          githubName={githubName}
          githubUrl={githubUrl}
          publishYear={publishYear}
        />
        {/* <SearchModal /> */}
      </ModalProvider>
    </div>
  );
};
