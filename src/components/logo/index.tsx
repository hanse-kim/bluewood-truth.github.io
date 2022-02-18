import React from 'react';
import {Link} from 'gatsby';
import {LogoImage} from './styled';

interface Props {
  to?: string;
}

export const Logo = ({to = '/blog'}: Props) => {
  return (
    <Link to={to}>
      <LogoImage />
    </Link>
  );
};
