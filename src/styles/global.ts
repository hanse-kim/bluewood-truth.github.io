import {css} from '@emotion/react';
import {cssReset} from './cssReset';
import variables from './variables';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&display=swap');
  ${cssReset};
  ${variables};

  html {
    font-weight: var(--font-weight-light);
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default globalStyles;
