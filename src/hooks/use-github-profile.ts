import { useEffect, useState } from 'react';
import { useSiteMetadata } from './use-site-metadata';
import { getStorageItem, setStorageItem } from 'src/_common/utils';

const storageKey = 'github-profile';

type GithubProfile = {
  avatar_url: string;
  name: string;
  bio: string | null;
};

export const useGithubProfile = () => {
  const { githubName } = useSiteMetadata();

  const [profile, setProfile] = useState<GithubProfile | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedData = getStorageItem<GithubProfile>(storageKey, sessionStorage);
    if (storedData) {
      setProfile(storedData);
      return;
    }

    (async () => {
      setIsLoading(true);
      try {
        const url = `https://api.github.com/users/${githubName}`;
        const profile = await fetch(url).then((res) => res.json());
        setProfile(profile);
        setStorageItem(storageKey, profile, sessionStorage);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [githubName]);

  return { profile, isLoading };
};
