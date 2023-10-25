import React from 'react';
import { ArrowIcon } from 'src/components/icon';
import { type MdxNode } from 'src/types';
import { getPostUrl } from 'src/utils/common';
import { Styled } from './styled';

interface Props {
  searchResult: MdxNode;
}

export const SearchResultItem = ({ searchResult }: Props) => {
  return (
    <Styled.SearchResultItem>
      <Styled.SearchResultLink to={getPostUrl(searchResult.slug)}>
        <Styled.SearchResultInfo>
          <Styled.SearchResultItemTags>
            {searchResult.frontmatter.tags.map((tag, index) => (
              <div key={index}>{`#${tag}`}</div>
            ))}
          </Styled.SearchResultItemTags>
          <Styled.SearchResultItemTitle>
            {searchResult.frontmatter.title}
          </Styled.SearchResultItemTitle>
        </Styled.SearchResultInfo>
        <ArrowIcon useCurrentColor />
      </Styled.SearchResultLink>
    </Styled.SearchResultItem>
  );
};
