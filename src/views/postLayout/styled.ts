import styled from '@emotion/styled';
import {fadeIn} from 'src/styles/keyframes';

const PostLayout = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  animation: ${fadeIn} 0.5s ease;
`;

const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: var(--font-size-md);
`;

export const Styled = {
  PostLayout, PostHeader, PostContent
}