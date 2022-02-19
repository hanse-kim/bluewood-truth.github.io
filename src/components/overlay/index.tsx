import React, {ReactNode, useEffect} from 'react';
import {OverlayWrapper} from './styled';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

export const Overlay = ({children, onClick}: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return <OverlayWrapper onClick={onClick}>{children}</OverlayWrapper>;
};
