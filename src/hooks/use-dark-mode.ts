import { useEffect, useLayoutEffect, useState } from 'react';
import { getStorageItem, setStorageItem } from 'src/_common/utils';

export const isDarkModeStorageKey = 'is-dark-mode';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    document.body.dataset.transition = 'true';
    setIsDarkMode((prev) => !prev);
    setStorageItem(isDarkModeStorageKey, !isDarkMode);
  };

  useLayoutEffect(() => {
    const storedIsDarkMode = getStorageItem<boolean | null>(
      isDarkModeStorageKey
    );

    if (storedIsDarkMode !== null) {
      setIsDarkMode(storedIsDarkMode);
      return;
    }

    if (window.matchMedia) {
      const preferredIsDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setIsDarkMode(preferredIsDarkMode);
      return;
    }
  }, []);

  useEffect(() => {
    updateDocumentTheme(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleTransitionEnd = () => {
      document.body.dataset.transition = 'false';
    };
    document.body.addEventListener('transitionend', () =>
      handleTransitionEnd()
    );

    return () =>
      document.body.removeEventListener('transitionend', handleTransitionEnd);
  });

  return { isDarkMode, toggleDarkMode };
};

export const updateDocumentTheme = (isDarkMode: boolean) => {
  document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
};
