import styled from "@emotion/styled";

export const PostLayoutWrapper = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 36px;
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