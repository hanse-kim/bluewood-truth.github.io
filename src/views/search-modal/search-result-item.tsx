import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { CustomLink } from 'src/components/custom-link';
import { Icon } from 'src/components/icon';
import { type MdxNode } from 'src/types';

interface Props {
  searchResult: MdxNode;
}

export const SearchResultItem = ({ searchResult }: Props) => {
  return (
    <li className="px-16 py-8 rounded-8 bg-bg-footer text-main text-16-400 hover:bg-main hover:text-border group">
      <CustomLink
        className="flex items-center"
        to={routes.post(searchResult.id)}
      >
        <div className="flex-1">
          <span className="flex gap-8 text-12-300">
            {searchResult.frontmatter.tags.map((tag, index) => (
              <div key={index}>{`#${tag}`}</div>
            ))}
          </span>
          <h3 className="text-text text-20-300 group-hover:text-bg">
            {searchResult.frontmatter.title}
          </h3>
        </div>
        <Icon iconName="arrowForward" />
      </CustomLink>
    </li>
  );
};
