import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const SearchModalWrapper = styled.section`
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
`;

export const SearchModalInputWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const SearchModalInput = styled.input`
  flex-grow: 1;
  padding: 2px 4px;
  border: none;

  &::placeholder {
    font-size: var(--font-size-sm);
    color: var(--color-text-quote);
  }
`;

export const SearchResultContainer = styled.ul`
  margin-top: 10px;
  border-top: 1px solid var(--color-border);
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SearchResultItemWrapper = styled.li`
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

export const SearchResultLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const SearchResultInfoWrapper = styled.div`
  flex-grow: 1;
`;

export const SearchResultItemTags = styled.span`
  font-size: var(--font-size-xs);
  display: flex;
  column-gap: 8px;
`;

export const SearchResultItemTitle = styled.h3`
  font-size: var(--font-size-xl);
  color: var(--color-text);

  ${SearchResultItemWrapper}:hover & {
    color: var(--color-bg);
  }
`;