import { navigate as gatsbyNavigate } from 'gatsby';
import { useCallback } from 'react';

export const useRouter = () => {
  const move = useCallback((url: string) => {
    location.href = url;
  }, []);

  const redirect = useCallback((url: string) => {
    location.replace(url);
  }, []);

  const navigate = useCallback(async (url: string) => {
    await gatsbyNavigate(url);
  }, []);

  const back = useCallback(() => {
    history.back();
  }, []);

  return { move, redirect, navigate, back };
};
