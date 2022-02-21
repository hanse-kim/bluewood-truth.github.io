import styled from '@emotion/styled';
import {BREAKPOINT_TABLET} from 'src/styles/constants';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.header`
  height: var(--header-height);
  border-bottom: 1px solid var(--color-border);
`;

export const HeaderInner = styled.div`
  margin: 0 auto;
  max-width: var(--page-width);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${BREAKPOINT_TABLET} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  column-gap: 24px;
`;

export const MainWrapper = styled.main`
  flex-grow: 1;
`;

export const MainInner = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 48px 0 96px 0;
  max-width: var(--page-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  ${BREAKPOINT_TABLET} {
    padding: 16px 16px 36px 16px;
    row-gap: 24px;
  }
`;

export const FooterWrapper = styled.footer`
  height: var(--footer-height);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-footer);
  background-color: var(--color-bg-footer);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-thin);
`;
