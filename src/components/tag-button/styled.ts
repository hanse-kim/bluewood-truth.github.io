import styled from '@emotion/styled';

export const TagButtonWrapper = styled.span`
  padding: 3px 8px 4px 8px;

  border: none;
  border-radius: 4px;
  background-color: var(--color-border);

  color: var(--color-main);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);

  cursor: pointer;
  transition:
    color 0.2s,
    background-color 0.2s;

  &:hover {
    color: var(--color-bg);
    background-color: var(--color-main);
  }
`;

export const TagButtonGroupWrapper = styled.span`
  display: flex;
  column-gap: 8px;
`;
