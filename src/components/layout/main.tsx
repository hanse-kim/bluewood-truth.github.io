import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Main = ({ children }: Props) => {
  return (
    <main>
      <div className="flex flex-col gap-36 relative max-w-screen-width h-full mx-auto my-0 px-16 pt-48 pb-96 tablet:pt-16 tablet:px-16 tablet:pb-36 tablet:gap-24">
        {children}
      </div>
    </main>
  );
};
