import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main className="flex-1">
      <div className="relative flex flex-col h-full px-16 pt-48 mx-auto my-0 gap-36 max-w-screen-width pb-96 tablet:pt-16 tablet:px-16 tablet:pb-36 tablet:gap-24">
        {children}
      </div>
    </main>
  );
};
