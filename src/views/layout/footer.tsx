import React from 'react';
import {FooterLink, FooterWrapper} from './styled';

interface Props {
  githubId: string;
  githubUrl: string;
  publishYear: string;
}

export const Footer = ({githubId, githubUrl, publishYear}: Props) => {
  return (
    <FooterWrapper>
      Copyright {publishYear}.
      <FooterLink href={githubUrl}>{githubId}</FooterLink>
      All right reserved.
    </FooterWrapper>
  );
};
