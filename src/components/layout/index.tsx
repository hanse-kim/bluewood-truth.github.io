import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
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
    <div className="flex flex-col min-h-[100dvh]">
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
