import {css} from '@emotion/react';
import {cssReset} from './cssReset';
import {variables} from './variables';
import {prismTheme} from './prismTheme';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500&display=swap');
  ${cssReset};
  ${variables};
  ${prismTheme};

  html {
    background-color: var(--color-bg-footer);
  }

  body {
    color: var(--color-text);
    background-color: var(--color-bg);
    font-weight: var(--font-weight-light);
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    transform-style: preserve-3d;
  }

  pre[class*='language-'] {
    background-color: var(--color-bg-footer);
    border: 1px solid var(--color-border);
  }

  .caption {
    width: 100%;
    justify-content: center;
    display: flex;
    margin-bottom: -1rem;
    transform: translateY(-1rem);
  }
`;
