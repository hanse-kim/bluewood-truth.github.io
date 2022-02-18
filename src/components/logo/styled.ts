import styled from '@emotion/styled';
import {BREAKPOINT_TABLET} from 'src/styles/constants';
import logo from 'src/images/assets/logo.svg';
import logoSmall from 'src/images/assets/logoSmall.png';

export const LogoImage = styled.span`
  display: block;
  width: 178px;
  height: 45px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.1s;

  ${BREAKPOINT_TABLET} {
    width: 145px;
    height: 36px;
    background-image: url(${logoSmall});
  }

  &:hover {
    transform: scale(105%);
  }

  &:active {
    transform: scale(110%);
  }
`;
