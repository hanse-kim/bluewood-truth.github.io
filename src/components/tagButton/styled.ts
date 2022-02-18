import styled from "@emotion/styled";

export const TagButtonWrapper = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-main);
  background-color: var(--color-border);
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s;

  &:hover {
    color: var(--color-bg);
    background-color: var(--color-main);
  }
`;
