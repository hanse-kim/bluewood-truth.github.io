import React, { useEffect } from 'react';
import { routes } from 'src/_common/constants/routes';
import { SEO } from 'src/components/seo';
import { useRouter } from 'src/hooks/use-router';

export const Head = () => <SEO />;

const IndexPage = () => {
  const { redirect } = useRouter();

  useEffect(() => {
    redirect(routes.home);
  }, [redirect]);

  return null;
};

export default IndexPage;
