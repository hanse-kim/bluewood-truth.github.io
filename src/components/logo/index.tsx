import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { useSiteMetadata } from 'src/hooks/use-site-metadata';
import { CustomLink } from '../custom-link';

interface Props {
  to?: string;
}

export const Logo = ({ to = routes.home }: Props) => {
  const { title } = useSiteMetadata();

  return (
    <div className="text-20-400 tablet:scale-[80%]">
      <CustomLink to={to}>
        <span className="transition-transform w-fit h-fit hover:scale-105 active:scale-110">
          {title}
        </span>
      </CustomLink>
    </div>
  );
};
