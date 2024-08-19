import { PageProps } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { prismTheme } from 'src/styles/prism-theme';

type SEOProps = Partial<PageProps> & {
  title?: string;
};

export const SEO = ({ title, location }: SEOProps) => {
  const siteMetadata = useSiteMetadata();

  const pageTitle = `${title ? `${title} | ` : ''}${siteMetadata.title}`;
  const pageUrl = `${siteMetadata.blogUrl}${location?.pathname || ''}`;

  return (
    <>
      {/* SEO */}
      <html lang="ko" />
      <title>{pageTitle}</title>
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:url" content={pageUrl} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{prismTheme}</style>
    </>
  );
};
