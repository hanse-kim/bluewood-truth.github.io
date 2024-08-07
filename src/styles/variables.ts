import { css } from '@emotion/react';
import { BREAKPOINT_TABLET } from './constants';

export const variables = css`
  :root {
    --page-width: 960px;
    --header-height: 72px;
    --footer-height: 120px;

    --z-index-base: 0;
    --z-index-overlay: 1100;
    --z-index-modal: 1200;

    --color-main: #0076da;
    --color-text: #1a1e21;
    --color-text-footer: #3f4950;
    --color-text-quote: #63727e;
    --color-bg: #ffffff;
    --color-blur: #f4f5f675;
    --color-bg-footer: #f4f5f6;
    --color-border: #e6e8ea;

    --color-overlay: rgba(0, 0, 0, 0.5);

    --font-weight-thin: 100;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;

    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 20px;
    --font-size-h4: 18px;
    --font-size-h3: 20px;
    --font-size-h2: 28px;
    --font-size-h1: 32px;
    --font-size-sub-title: 28px;
    --font-size-title: 36px;
  }

  [data-theme='dark'] {
    --color-main: #2c93ea;
    --color-text: #eff3f6;
    --color-text-footer: #c6d3dc;
    --color-text-quote: #a6bac9;
    --color-bg: #1a1e21;
    --color-blur: #202d3a75;
    --color-bg-footer: #202d3a;
    --color-border: #2d3a47;
  }

  ${BREAKPOINT_TABLET} {
    html {
      font-size: 14px;
    }

    :root {
      --page-width: 100%;
      --header-height: 45px;
      --footer-height: 72px;

      --font-size-xs: 10px;
      --font-size-sm: 12px;
      --font-size-md: 14px;
      --font-size-lg: 16px;
      --font-size-h4: 16px;
      --font-size-h3: 18px;
      --font-size-h2: 20px;
      --font-size-h1: 24px;
      --font-size-sub-title: 21px;
      --font-size-title: 24.5px;
    }
  }
`;
