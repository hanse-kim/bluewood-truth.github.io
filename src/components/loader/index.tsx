import React from 'react';
import './styles.css';

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className = '' }: LoaderProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center scale-75">
      <div className={`lds-ellipsis text-text ${className}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
