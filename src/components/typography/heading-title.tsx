import React from 'react';

type HeadingTitleProps = { children?: React.ReactNode };

export const HeadingTitle = ({ children }: HeadingTitleProps) => {
  return <h1 className="text-36-300">{children}</h1>;
};
