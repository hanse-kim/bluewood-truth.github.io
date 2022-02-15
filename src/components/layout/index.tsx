import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {SiteNode} from 'src/types';
import Header from './header';

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
    <div>
      <title>{title || data.site.siteMetadata.title}</title>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
