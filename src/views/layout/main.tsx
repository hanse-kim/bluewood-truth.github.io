import React from 'react';
import {Styled} from './styled';

interface Props {
  children?: React.ReactNode;
}

export const Main = ({children}: Props) => {
  return (
    <Styled.Main>
      <Styled.MainInner>{children}</Styled.MainInner>
    </Styled.Main>
  );
};
