import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import { CrossIcon, IconButton, SearchIcon } from 'src/components/icon';
import { Overlay } from 'src/components/overlay';
import { useModal } from 'src/contexts/modal-context';
import { useSearch } from 'src/hooks/use-search';
import { type MdxNode } from 'src/types';
import { SearchResultItem } from './search-result-item';
import { Styled } from './styled';

const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          tags
        }
      }
    }
  }
`;

export const SearchModal = () => {
  const { isOpen, onClose } = useModal('search');
  const { results, handleSearchInputChange } = usePostSearch(isOpen);
  const { inputRef, onInputResetClick } = useInputReset();
  useAutoFocus(isOpen, inputRef);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={onClose}>
      <Styled.SearchModalBox
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Styled.SearchInputWrapper>
          <SearchIcon />
          <Styled.SearchInput ref={inputRef} onChange={handleSearchInputChange} />
          <IconButton iconElement={<CrossIcon />} onClick={onInputResetClick} />
        </Styled.SearchInputWrapper>
        {results.length > 0 && (
          <Styled.SearchResultContainer>
            {results.map((result) => (
              <SearchResultItem searchResult={result} key={result.id} />
            ))}
          </Styled.SearchResultContainer>
        )}
      </Styled.SearchModalBox>
    </Overlay>
  );
};

const usePostSearch = (isOpen: boolean) => {
  const { allMdx } = useStaticQuery<{ allMdx: { nodes: MdxNode[] } }>(query);
  const { results, resetResults, handleSearchInputChange } = useSearch(
    allMdx.nodes,
    'body',
    'slug',
    {
      cacheKey: 'search-modal',
    },
  );

  useEffect(() => {
    if (!isOpen) {
      resetResults();
    }
  }, [isOpen, resetResults]);

  return { results, handleSearchInputChange };
};

const useInputReset = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onInputResetClick = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return { inputRef, onInputResetClick };
};

const useAutoFocus = (isOpen: boolean, inputRef: React.RefObject<HTMLInputElement>) => {
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, inputRef.current]);
};
