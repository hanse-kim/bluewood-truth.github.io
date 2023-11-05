import styled from '@emotion/styled';
import { fadeIn } from 'src/styles/keyframes';

const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  margin-bottom: 72px;
`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 96px;

  color: var(--color-text-footer);
  font-size: var(--font-size-md);
`;

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  opacity: 0;
  animation: ${fadeIn} 0.5s ease;
  animation-fill-mode: forwards;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }
  &:nth-child(7) {
    animation-delay: 0.7s;
  }
  &:nth-child(8) {
    animation-delay: 0.8s;
  }
  &:nth-child(9) {
    animation-delay: 0.9s;
  }
  &:nth-child(10) {
    animation-delay: 1s;
  }
  &:nth-child(11) {
    animation-delay: 1.1s;
  }
  &:nth-child(12) {
    animation-delay: 1.2s;
  }
  &:nth-child(13) {
    animation-delay: 1.3s;
  }
  &:nth-child(14) {
    animation-delay: 1.4s;
  }
  &:nth-child(15) {
    animation-delay: 1.5s;
  }
`;

const PostItemHeader = styled.hgroup`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

const PostItemDescription = styled.p`
  color: var(--color-text-footer);
  font-size: var(--font-size-sm);
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Styled = {
  PostList,
  Empty,
  PostItem,
  PostItemHeader,
  PostItemDescription,
};
