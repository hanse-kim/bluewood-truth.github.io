import styled from '@emotion/styled';

const PageNav = styled.div`
  display: flex;
  margin: 0 auto;
`;

const PageButtonWrapper = styled.div`
  width: 36px;
  height: 36px;

  font-size: var(--font-size-lg);

  &[data-selected='true'] {
    color: var(--color-main);
    font-weight: var(--font-weight-regular);
  }
`;

export const Styled = {
  PageNav,
  PageButtonWrapper,
};
