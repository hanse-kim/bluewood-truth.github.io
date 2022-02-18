import React from 'react';
import {MainInner, MainWrapper} from './styled';

interface Props {
  children?: React.ReactNode;
}

export const Main = ({children}: Props) => {
  return (
    <MainWrapper>
      <MainInner>{children}</MainInner>
    </MainWrapper>
  );
};
