import styled from '@emotion/styled';

export const EmptyMessage = styled.p<{ padding?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 10%;

  color: var(--color-text-footer);
  font-size: var(--font-size-md);

  pointer-events: none;
`;
