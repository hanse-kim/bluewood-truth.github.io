import { useEffect } from 'react';
import { routes } from 'src/_common/constants/routes';
import { useRouter } from 'src/hooks/use-router';

const IndexPage = () => {
  const { redirect } = useRouter();

  useEffect(() => {
    redirect(routes.home);
  });

  return null;
};

export default IndexPage;
