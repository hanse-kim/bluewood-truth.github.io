import React, {useRef} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {useSearch} from 'src/hooks/useSearch';
import {MdxNode} from 'src/types';
import {Overlay} from 'src/components/overlay';
import {useModal} from 'src/contexts/modalContext';
import {
  SearchModalInput,
  SearchModalInputWrapper,
  SearchModalWrapper,
  SearchResultContainer,
} from './styled';
import {CrossIcon, IconButton, SearchIcon} from 'src/components/icon';
import {SearchResultItem} from './searchResultItem';

const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        slug
        frontmatter {
          title
          tags
        }
        rawBody
      }
    }
  }
`;

export const SearchModal = () => {
  const {isOpen, onClose} = useModal('search');
  const {allMdx} = useStaticQuery<{allMdx: {nodes: MdxNode[]}}>(query);
  const {results, handleSearchInputChange} = useSearch(
    allMdx.nodes,
    'rawBody',
    'slug',
    {
      cacheKey: 'search-modal',
    }
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const onInputResetClick = () => {
    if (inputRef.current) inputRef.current.value = '';
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <SearchModalWrapper onClick={(e) => e.stopPropagation()}>
        <SearchModalInputWrapper>
          <SearchIcon />
          <SearchModalInput ref={inputRef} onChange={handleSearchInputChange} />
          <IconButton iconElement={<CrossIcon />} onClick={onInputResetClick} />
        </SearchModalInputWrapper>
        {results.length > 0 && (
          <SearchResultContainer>
            {results.map((result) => (
              <SearchResultItem searchResult={result} key={result.slug} />
            ))}
          </SearchResultContainer>
        )}
      </SearchModalWrapper>
    </Overlay>
  );
};
