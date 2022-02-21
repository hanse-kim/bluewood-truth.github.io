import styled from '@emotion/styled';
import {fadeIn} from 'src/styles/keyframes';

export const PostLayoutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  animation: ${fadeIn} 0.5s ease;
`;

export const PostHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--font-size-md);
`;
