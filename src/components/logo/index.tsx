import React from 'react';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { CustomLink } from '../custom-link';
import { Heading4 } from '../markdown';
import { LogoImageWrapper, LogoWrapper } from './styled';
import { routes } from 'src/_common/constants/routes';

interface Props {
  to?: string;
}

export const Logo = ({ to = routes.home }: Props) => {
  const { title } = useSiteMetadata();

  return (
    <LogoWrapper>
      <CustomLink to={to}>
        <LogoImageWrapper>
          <Heading4>{title}</Heading4>
        </LogoImageWrapper>
      </CustomLink>
    </LogoWrapper>
  );
};
