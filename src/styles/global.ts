import { css } from '@emotion/react';
import { prismTheme } from './prism-theme';
import { variables } from './variables';

export const globalStyles = css`
  ${variables};
  ${prismTheme};
`;
