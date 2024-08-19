import { PageProps } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { isDarkModeStorageKey } from 'src/hooks/use-dark-mode';
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
      <style>{prismTheme}</style>
      <Helmet>
        <script>
          {`(() => {
  const updateDocumentTheme = (isDarkMode) => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
  };

  const storageKey = '${isDarkModeStorageKey}';
  const storedIsDarkMode = JSON.parse(localStorage.getItem(storageKey) || 'null');
  if (storedIsDarkMode !== null) {
    updateDocumentTheme(storedIsDarkMode);
    return;
  }
  
  if (window.matchMedia) {
    const preferredIsDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    updateDocumentTheme(preferredIsDarkMode);
    return;
  }
})();`}
        </script>
      </Helmet>
    </>
  );
};
