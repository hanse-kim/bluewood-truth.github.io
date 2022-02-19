import styled from '@emotion/styled';

export const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--z-index-overlay);
  background-color: var(--color-overlay);
`;
