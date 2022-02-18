import styled from '@emotion/styled';
import {BREAKPOINT_TABLET} from 'src/styles/constants';
import logo from 'src/images/assets/logo.png';
import logoSmall from 'src/images/assets/logoSmall.png';

export const LogoImage = styled.span`
  display: block;
  width: 178px;
  height: 45px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${BREAKPOINT_TABLET} {
    width: 145px;
    height: 36px;
    background-image: url(${logoSmall});
  }
`;
