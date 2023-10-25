import { graphql, useStaticQuery } from 'gatsby';
import { type SiteNode } from 'src/types';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        githubUrl
        githubId
        email
        publishYear
      }
    }
  }
`;

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<{ site: SiteNode }>(query);

  return site.siteMetadata;
};
