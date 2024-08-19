import { useEffect, useState } from 'react';

export const usePathname = () => {
  const [pathname, setPathname] = useState<string>('');

  useEffect(() => {
    setPathname(location.pathname);
  });

  return { pathname };
};
