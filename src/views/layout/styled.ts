import styled from '@emotion/styled';
import { BREAKPOINT_TABLET } from 'src/styles/constants';

const Layout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

const Header = styled.header`
  height: var(--header-height);

  border-bottom: 1px solid var(--color-border);
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: var(--page-width);
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

const Nav = styled.nav`
  display: flex;
  column-gap: 8px;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  position: relative;

  max-width: var(--page-width);
  height: 100%;
  margin: 0 auto;
  padding: 48px 16px 96px;

  ${BREAKPOINT_TABLET} {
    padding: 16px 16px 36px 16px;
    row-gap: 24px;
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;

  height: var(--footer-height);

  background-color: var(--color-bg-footer);

  color: var(--color-text-footer);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-thin);
`;

const FooterLink = styled.a`
  text-decoration: underline;
  font-weight: var(--font-weight-regular);
`;

export const Styled = {
  Layout,
  Header,
  HeaderInner,
  Nav,
  Main,
  MainInner,
  Footer,
  FooterLink,
};
