import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {fadeIn} from 'src/styles/keyframes';

export const PostListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
  margin-bottom: 72px;
  animation: ${fadeIn} 0.5s ease;
`;

export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const PostItemHeader = styled.hgroup`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

export const PostItemDescription = styled.p`
  color: var(--color-text-footer);
  font-size: var(--font-size-sm);
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
