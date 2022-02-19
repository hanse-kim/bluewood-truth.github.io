import React, {useCallback, useEffect, useRef, useState} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {useSearch} from 'src/hooks/useSearch';
import {MdxNode} from 'src/types';
import {Overlay} from 'src/components/overlay';
import {useModal} from 'src/contexts/modalContext';
import {
  SearchModalInput,
  SearchModalInputWrapper,
  SearchModalBox,
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
  const {results, handleSearchInputChange} = usePostSearch(isOpen);
  const {inputRef, onInputResetClick} = useInputReset();

  const [text, setText] = useState('');

  const composed: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      handleSearchInputChange(e);
      setText(e.target.value);
    },
    [handleSearchInputChange]
  );

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <SearchModalBox onClick={(e) => e.stopPropagation()}>
        <SearchModalInputWrapper>
          <SearchIcon />
          <SearchModalInput ref={inputRef} value={text} onChange={composed} />
          <IconButton iconElement={<CrossIcon />} onClick={onInputResetClick} />
        </SearchModalInputWrapper>
        {results.length > 0 && (
          <SearchResultContainer>
            {results.map((result) => (
              <SearchResultItem searchResult={result} key={result.slug} />
            ))}
          </SearchResultContainer>
        )}
      </SearchModalBox>
    </Overlay>
  );
};

const usePostSearch = (isOpen: boolean) => {
  const {allMdx} = useStaticQuery<{allMdx: {nodes: MdxNode[]}}>(query);
  const {results, resetResults, handleSearchInputChange} = useSearch(
    allMdx.nodes,
    'rawBody',
    'slug',
    {
      cacheKey: 'search-modal',
    }
  );

  useEffect(() => {
    if (!isOpen) resetResults();
  }, [isOpen, resetResults]);

  return {results, handleSearchInputChange};
};

const useInputReset = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onInputResetClick = () => {
    if (inputRef.current) inputRef.current.value = '';
  };

  return {inputRef, onInputResetClick};
};
