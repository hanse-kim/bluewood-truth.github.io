import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeadingWrapper = styled.hgroup`
  width: 100%;

  border-bottom: 1px solid var(--color-border);
`;

const headingCommonStyle = css`
  font-weight: var(--font-weight-regular);
  margin-top: 0.5em;
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
  display: inline-block;
  text-decoration: underline;
  transition: transform 0.1s;

  :link {
    color: var(--color-main);
  }

  :visited {
    color: mediumpurple;
  }

  ::after {
    content: '🔗';
    font-size: 0.9em;
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

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 2px;
  overflow: hidden;

  th,
  td {
    padding: 4px 8px;
    border: 1px solid var(--color-border);
  }

  th {
    background-color: var(--color-bg-footer);
  }

  tr:nth-child(even) {
    background-color: var(--color-blur);
  }
`;
