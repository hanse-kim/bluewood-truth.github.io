import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';

type SEOProps = {
  title?: string;
};

export const SEO = ({ title }: SEOProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <title>{`${title ? `${title} | ` : ''}${siteMetadata.title}`}</title>
    </>
  );
};
