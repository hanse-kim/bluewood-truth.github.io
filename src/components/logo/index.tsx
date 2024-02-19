import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { CustomLink } from '../custom-link';
import { LogoImageWrapper, LogoWrapper } from './styled';

interface Props {
  to?: string;
}

export const Logo = ({ to = routes.home }: Props) => {
  const { title } = useSiteMetadata();

  return (
    <LogoWrapper>
      <CustomLink to={to}>
        <LogoImageWrapper>{title}</LogoImageWrapper>
      </CustomLink>
    </LogoWrapper>
  );
};
