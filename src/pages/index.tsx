import { useEffect } from 'react';
import { useRouter } from 'src/hooks/use-router';

const IndexPage = () => {
  const { redirect } = useRouter();

  useEffect(() => {
    redirect('/blog');
  });

  return null;
};

export default IndexPage;
