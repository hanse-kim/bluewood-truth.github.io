import React from 'react';
import { Styled } from './styled';

interface Props {
  githubId: string;
  githubUrl: string;
  publishYear: string;
}

export const Footer = ({ githubId, githubUrl, publishYear }: Props) => {
  return (
    <Styled.Footer>
      Copyright {publishYear}.<Styled.FooterLink href={githubUrl}>{githubId}</Styled.FooterLink>
      All right reserved.
    </Styled.Footer>
  );
};
