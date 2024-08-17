import React from 'react';

type EmptyMessageProps = { children: React.ReactNode };

export const EmptyMessage = ({ children }: EmptyMessageProps) => {
  return (
    <p className="flex items-center justify-center fixed inset-0 pb-[10%] text-text-footer pointer-events-none">
      {children}
    </p>
  );
};
