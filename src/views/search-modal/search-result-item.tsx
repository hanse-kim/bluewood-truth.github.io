import React from 'react';
import { routes } from 'src/_common/constants/routes';
import { ArrowIcon } from 'src/components/icon';
import { type MdxNode } from 'src/types';
import { Styled } from './styled';

interface Props {
  searchResult: MdxNode;
}

export const SearchResultItem = ({ searchResult }: Props) => {
  return (
    <Styled.SearchResultItem>
      <Styled.SearchResultLink to={routes.post(searchResult.id)}>
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
