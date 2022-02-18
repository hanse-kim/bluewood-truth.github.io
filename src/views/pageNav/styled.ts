import styled from '@emotion/styled';

export const PageNavWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const PageButtonWrapper = styled.button`
  width: 36px;
  height: 36px;
  font-size: var(--font-size-lg);
  background: none;
  border: none;
  cursor: pointer;
  transition: text-shadow 0.2s;

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled) {
    text-shadow: 0 0 0.5px var(--color-text);
  }

  &[data-selected='true'] {
    color: var(--color-main);
    font-weight: var(--font-weight-regular);
    text-decoration: underline;
  }
`;
