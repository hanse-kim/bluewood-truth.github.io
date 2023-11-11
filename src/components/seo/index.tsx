import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';

type SEOProps = {
  title?: string;
};

export const SEO = ({ title }: SEOProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      {/* SEO */}
      <title>{`${title ? `${title} | ` : ''}${siteMetadata.title}`}</title>
      {/* LOAD SOURCES */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,0"
      />
    </>
  );
};
