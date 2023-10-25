import styled from '@emotion/styled';
import { Link } from 'gatsby';

const SearchModalBox = styled.section`
  position: absolute;
  top: 120px;
  left: 50%;

  width: 100%;
  max-width: 480px;
  padding: 16px;

  background-color: var(--color-bg);
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

  transform: translateX(-50%);
  z-index: var(--z-index-modal);
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const SearchInput = styled.input`
  flex-grow: 1;

  padding: 2px 4px;

  border: none;

  &::placeholder {
    font-size: var(--font-size-sm);
    color: var(--color-text-quote);
  }
`;

const SearchResultContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  padding: 18px 0;
  margin-top: 10px;

  border-top: 1px solid var(--color-border);
`;

const SearchResultItem = styled.li`
  padding: 8px 16px;

  border-radius: 8px;
  background-color: var(--color-bg-footer);

  color: var(--color-main);
  font-weight: var(--font-weight-regular);

  cursor: pointer;

  transition:
    color 0.08s,
    background-color 0.08s;

  &:hover {
    background-color: var(--color-main);
    color: var(--color-border);
  }
`;

const SearchResultLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const SearchResultInfo = styled.div`
  flex-grow: 1;
`;

const SearchResultItemTags = styled.span`
  display: flex;
  column-gap: 8px;

  font-size: var(--font-size-xs);
`;

const SearchResultItemTitle = styled.h3`
  color: var(--color-text);
  font-size: var(--font-size-xl);

  ${SearchResultItem}:hover & {
    color: var(--color-bg);
  }
`;

export const Styled = {
  SearchModalBox,
  SearchInputWrapper,
  SearchInput,
  SearchResultContainer,
  SearchResultItem,
  SearchResultLink,
  SearchResultInfo,
  SearchResultItemTags,
  SearchResultItemTitle,
};
