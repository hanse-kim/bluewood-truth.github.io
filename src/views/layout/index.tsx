import React from 'react';
import {Global} from '@emotion/react';
import {globalStyles} from 'src/styles/global';
import {Header} from './header';
import {Main} from './main';
import {Footer} from './footer';
import {LayoutWrapper} from './styled';
import {useSiteMetadata} from 'src/hooks/useSiteMetadata';

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
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};
