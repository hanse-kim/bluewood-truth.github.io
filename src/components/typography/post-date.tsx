import React from 'react';

type PostDateProps = {
  children: React.ReactNode;
};

export const PostDate = ({ children }: PostDateProps) => {
  return (
    <p className="text-16-300">
      {`작성일: `}
      {children}
    </p>
  );
};
