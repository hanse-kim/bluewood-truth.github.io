import React from 'react';
import { Styled } from './styled';

interface Props {
  githubName: string;
  githubUrl: string;
  publishYear: string;
}

export const Footer = ({ githubName, githubUrl, publishYear }: Props) => {
  return (
    <Styled.Footer>
      Copyright {publishYear}.<Styled.FooterLink href={githubUrl}>{githubName}</Styled.FooterLink>
      All right reserved.
    </Styled.Footer>
  );
};
