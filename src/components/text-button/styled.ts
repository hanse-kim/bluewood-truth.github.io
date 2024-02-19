import styled from '@emotion/styled';

export const TextButtonWrapper = styled.button`
  width: fit-content;
  padding-top: 2px;

  background: none;
  border: none;

  transition: text-shadow 0.2s;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled) {
    text-shadow: 0 0 1px var(--color-text);
  }
`;

export const Underline = styled.div`
  margin: 1px auto 0 auto;
  width: 0;
  height: 1px;
  background-color: var(--color-text);
  transition: width 0.2s;

  ${TextButtonWrapper}:hover:not(:disabled) > & {
    width: 100%;
  }
`;
