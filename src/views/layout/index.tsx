import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {SiteNode} from 'src/types';
import {Global} from '@emotion/react';
import globalStyles from 'src/styles/global';
import Header from './header';
import Main from './main';
import Footer from './footer';
import {LayoutWrapper} from './styled';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({title, children}: Props) => {
  const data = useStaticQuery<{site: SiteNode}>(query);
  return (
    <LayoutWrapper>
      <title>{title || data.site.siteMetadata.title}</title>
      <Global styles={globalStyles} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
