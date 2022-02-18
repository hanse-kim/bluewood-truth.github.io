import React from 'react';
import {MainInner, MainWrapper} from './styled';

interface Props {
  children?: React.ReactNode;
}

const Main = ({children}: Props) => {
  return (
    <MainWrapper>
      <MainInner>{children}</MainInner>
    </MainWrapper>
  );
};

export default Main;
