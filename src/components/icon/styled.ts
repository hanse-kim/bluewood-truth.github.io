import styled from '@emotion/styled';
import { IconProps } from '.';

export const IconWrapper = styled.span<Omit<IconProps, 'iconName'>>`
  display: flex;

  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`;

export const IconButtonWrapper = styled.button`
  display: flex;

  padding: 4px;

  border: none;
  border-radius: 9999px;
  background-color: transparent;

  cursor: pointer;

  transition: background-color 0.2s;

  & > ${IconWrapper} {
    color: var(--color-text-footer);
  }

  :hover {
    transform: scale(105%);
  }

  :active {
    transform: scale(110%);
    background-color: var(--color-bg-footer);
  }
`;
