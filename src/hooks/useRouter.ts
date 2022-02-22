import {useCallback} from 'react';
import {navigate as gatsbyNavigate} from 'gatsby';

export const useRouter = () => {
  const move = useCallback((url: string) => {
    location.href = url;
  }, []);

  const redirect = useCallback((url: string) => {
    location.replace(url);
  }, []);

  const navigate = useCallback((url: string) => {
    gatsbyNavigate(url);
  }, []);

  const back = useCallback(() => {
    history.back();
  }, []);

  return {move, redirect, navigate, back};
};
