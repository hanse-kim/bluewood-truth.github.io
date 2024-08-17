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
