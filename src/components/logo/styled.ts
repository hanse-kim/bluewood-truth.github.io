import styled from '@emotion/styled';
import {BREAKPOINT_TABLET} from 'src/styles/constants';

export const LogoWrapper = styled.div`
  ${BREAKPOINT_TABLET} {
    transform: scale(80%);
  }
`;

export const LogoImageWrapper = styled.span`
  display: block;
  width: fit-content;
  height: fit-content;
  transition: transform 0.1s;

  &:hover {
    transform: scale(105%);
  }

  &:active {
    transform: scale(110%);
  }
`;
