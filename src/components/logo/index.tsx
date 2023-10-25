import { Link } from 'gatsby';
import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { Heading4 } from '../markdown';
import { LogoImageWrapper, LogoWrapper } from './styled';

interface Props {
  to?: string;
}

export const Logo = ({ to = '/blog' }: Props) => {
  const { title } = useSiteMetadata();

  return (
    <LogoWrapper>
      <Link to={to}>
        <LogoImageWrapper>
          <Heading4>{title}</Heading4>
        </LogoImageWrapper>
      </Link>
    </LogoWrapper>
  );
};
