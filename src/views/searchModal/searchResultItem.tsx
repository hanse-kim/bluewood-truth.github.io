import React from 'react';
import { ArrowIcon } from 'src/components/icon';
import {MdxNode} from 'src/types';
import {getPostUrl} from 'src/utils/common';
import {
  SearchResultInfoWrapper,
  SearchResultItemTags,
  SearchResultItemTitle,
  SearchResultItemWrapper,
  SearchResultLink,
} from './styled';

interface Props {
  searchResult: MdxNode;
}

export const SearchResultItem = ({searchResult}: Props) => {
  return (
    <SearchResultItemWrapper>
      <SearchResultLink to={getPostUrl(searchResult.slug)}>
        <SearchResultInfoWrapper>
          <SearchResultItemTags>
            {searchResult.frontmatter.tags.map((tag, index) => (
              <div key={index}>{`#${tag}`}</div>
            ))}
          </SearchResultItemTags>
          <SearchResultItemTitle>
            {searchResult.frontmatter.title}
          </SearchResultItemTitle>
        </SearchResultInfoWrapper>
        <ArrowIcon useCurrentColor />
      </SearchResultLink>
    </SearchResultItemWrapper>
  );
};
