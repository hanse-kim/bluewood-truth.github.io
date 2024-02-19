import styled from '@emotion/styled';
import { BREAKPOINT_TABLET } from 'src/styles/constants';

const ProfileLayout = styled.div`
  margin: 48px auto 0;
  display: flex;
  align-items: center;
  gap: 24px;

  ${BREAKPOINT_TABLET} {
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }
`;

const AvatarImage = styled.img`
  width: 180px;
  height: 180px;
  border: 1px solid var(--color-border);
  border-radius: 9999px;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${BREAKPOINT_TABLET} {
    align-items: center;
  }
`;

const IconLink = styled.a`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Styled = {
  ProfileLayout,
  AvatarImage,
  ProfileInfo,
  IconLink,
  Links,
};
