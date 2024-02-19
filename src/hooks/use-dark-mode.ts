import { useEffect, useLayoutEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from 'src/_common/utils';

const storageKey = 'is-dark-mode';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setStorageItem(storageKey, !isDarkMode);
  };

  useLayoutEffect(() => {
    const storedIsDarkMode = getStorageItem<boolean | null>(storageKey);

    if (storedIsDarkMode !== null) {
      setIsDarkMode(storedIsDarkMode);
      return;
    }

    if (window.matchMedia) {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      return;
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode };
};
