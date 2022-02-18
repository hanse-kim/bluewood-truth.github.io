import {graphql, useStaticQuery} from 'gatsby';
import {SiteNode} from 'src/types';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const {site} = useStaticQuery<{site: SiteNode}>(query);

  return site.siteMetadata;
};
