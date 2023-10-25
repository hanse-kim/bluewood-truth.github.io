import styled from '@emotion/styled';

export const OverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: var(--color-overlay);

  z-index: var(--z-index-overlay);
`;
