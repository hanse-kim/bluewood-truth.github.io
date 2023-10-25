import React from 'react';
import { Global } from '@emotion/react';
import { globalStyles } from 'src/styles/global';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
import { Styled } from './styled';
import { ModalProvider } from '../../contexts/modal-context';
import { SearchModal } from '../search-modal';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout = ({ title, children }: Props) => {
  const { title: siteTitle, githubId, githubUrl, publishYear } = useSiteMetadata();

  return (
    <Styled.Layout>
      <title>{title || siteTitle}</title>
      <Global styles={globalStyles} />
      <ModalProvider>
        <Header />
        <Main>{children}</Main>
        <Footer githubId={githubId} githubUrl={githubUrl} publishYear={publishYear} />
        <SearchModal />
      </ModalProvider>
    </Styled.Layout>
  );
};
