import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeadingWrapper = styled.hgroup`
  width: 100%;

  border-bottom: 1px solid var(--color-border);
`;

const headingCommonStyle = css`
  font-weight: var(--font-weight-regular);
`;

export const H1 = styled.h1`
  ${headingCommonStyle};
  font-size: var(--font-size-h1);
`;

export const H2 = styled.h2`
  ${headingCommonStyle};
  font-size: var(--font-size-h2);
`;

export const H3 = styled.h3`
  ${headingCommonStyle};
  font-size: var(--font-size-h3);
`;

export const H4 = styled.h4`
  ${headingCommonStyle};
  font-size: var(--font-size-h4);
`;

const listCommonStyle = css`
  padding-left: 2rem;
  div > div > & {
    margin-top: var(--font-size-sm);
  }
`;

export const Ul = styled.ul`
  ${listCommonStyle};
  list-style: revert;
`;

export const Ol = styled.ol`
  ${listCommonStyle};
  list-style: auto;
`;

export const ListItemWrapper = styled.li`
  &:not(:first-of-type) {
    margin-top: var(--font-size-sm);
  }
`;

export const ListItemInner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--font-size-sm);
`;

export const Strong = styled.strong`
  font-weight: var(--font-weight-medium);
`;

export const Anchor = styled.a`
  color: var(--color-main);
  text-decoration: underline;

  &:visited {
    color: purple;
  }
`;

export const QuoteWrapper = styled.blockquote`
  display: flex;
  flex-direction: column;
  row-gap: 14px;

  padding: 1rem;

  border: 1px dashed var(--color-border);
  border-left: 0.25rem solid var(--color-border);

  color: var(--color-text-quote);
`;

export const Code = styled.code`
  width: fit-content;
  padding: 0 0.25em;
  margin: 0 2px;

  border: 1px solid var(--color-border);
  border-radius: 4px;
  background-color: var(--color-bg-footer);

  color: var(--color-main);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
`;

export const Image = styled.img`
  display: block;

  margin: 0 auto;
`;
