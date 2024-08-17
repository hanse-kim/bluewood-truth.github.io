import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import { Icon, IconButton } from 'src/components/icon';
import { Overlay } from 'src/components/overlay';
import { useModal } from 'src/contexts/modal-context';
import { useSearch } from 'src/hooks/use-search';
import { type MdxNode } from 'src/types';
import { SearchResultItem } from './search-result-item';

const query = graphql`
  {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
      <section
        className="absolute w-full p-16 -translate-x-1/2 top-120 left-1/2 max-w-modal-width bg-bg rounded-8 drop-shadow-modal z-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex items-center gap-10">
          <Icon iconName="search" />
          <input
            className="flex-1 px-4 py-2 placeholder:text-14-300 placeholder:text-text-quote"
            ref={inputRef}
            onChange={handleSearchInputChange}
          />
          <IconButton onClick={onInputResetClick} iconName="close" />
        </div>
        {results.length > 0 && (
          <ul className="flex flex-col gap-10 mt-10 border-solid py-18 border-t-1 border-border">
            {results.map((result) => (
              <SearchResultItem searchResult={result} key={result.id} />
            ))}
          </ul>
        )}
      </section>
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
    }
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

const useAutoFocus = (
  isOpen: boolean,
  inputRef: React.RefObject<HTMLInputElement>
) => {
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, inputRef.current]);
};
