import styled from '@emotion/styled';
import {Link} from 'gatsby';

const SearchModalBox = styled.section`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-index-modal);
  padding: 16px;
  width: 100%;
  max-width: 480px;
  background-color: var(--color-bg);
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
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
  margin-top: 10px;
  border-top: 1px solid var(--color-border);
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const SearchResultItem = styled.li`
  border-radius: 8px;
  padding: 8px 16px;
  background-color: var(--color-bg-footer);
  color: var(--color-main);
  font-weight: var(--font-weight-regular);
  transition: color 0.08s, background-color 0.08s;
  cursor: pointer;

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
  font-size: var(--font-size-xs);
  display: flex;
  column-gap: 8px;
`;

const SearchResultItemTitle = styled.h3`
  font-size: var(--font-size-xl);
  color: var(--color-text);

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
