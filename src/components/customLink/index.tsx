import { GatsbyLinkProps, Link } from 'gatsby';
import React from 'react';

type CustomLinkProps<T> = Omit<GatsbyLinkProps<T>, 'ref' | 'to'> & {
  to: string | undefined;
};

export const CustomLink = <T,>({ children, to, ...props }: CustomLinkProps<T>) => {
  if (!to) {
    return <>{children}</>;
  }

  return <Link to={to} {...props}>{children}</Link>;
};
