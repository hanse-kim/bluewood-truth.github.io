import React from 'react';
import {Link} from 'gatsby';
import LogoImage from 'src/images/assets/logo.svg';
import {LogoImageWrapper, LogoWrapper} from './styled';

interface Props {
  to?: string;
}

export const Logo = ({to = '/blog'}: Props) => {
  return (
    <LogoWrapper>
      <Link to={to}>
        <LogoImageWrapper>
          <LogoImage />
        </LogoImageWrapper>
      </Link>
    </LogoWrapper>
  );
};
