import React from 'react';
import {Global} from '@emotion/react';
import {globalStyles} from 'src/styles/global';
import {useSiteMetadata} from 'src/hooks/useSiteMetadata';
import {Header} from './header';
import {Main} from './main';
import {Footer} from './footer';
import {LayoutWrapper} from './styled';
import {ModalContextProvider} from '../../contexts/modalContext';
import { SearchModal } from '../searchModal';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout = ({title, children}: Props) => {
  const {title: siteTitle} = useSiteMetadata();

  return (
    <LayoutWrapper>
      <title>{title || siteTitle}</title>
      <Global styles={globalStyles} />
      <ModalContextProvider>
        <Header />
        <Main>{children}</Main>
        <Footer />
        <SearchModal />
      </ModalContextProvider>
    </LayoutWrapper>
  );
};
