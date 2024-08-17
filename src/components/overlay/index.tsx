import React, { type ReactNode, useEffect } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

export const Overlay = ({ children, onClick }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div className="fixed inset-0 bg-overlay z-overlay" onClick={onClick}>
      {children}
    </div>
  );
};
