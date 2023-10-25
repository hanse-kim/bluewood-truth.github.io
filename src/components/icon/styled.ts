import styled from '@emotion/styled';

export interface IconProps {
  useCurrentColor?: boolean;
}

export const IconWrapper = styled.span<IconProps>`
  display: flex;
  width: fit-content;
  height: fit-content;
  color: ${(props) => (props.useCurrentColor ? undefined : 'var(--color-main)')};
`;

export const IconButtonWrapper = styled.button`
  background-color: var(--color-bg-footer);
  border: none;
  border-radius: 9999px;
  padding: 0;
  cursor: pointer;

  & > ${IconWrapper} {
    color: var(--color-text-footer);
  }

  :hover {
    transform: scale(105%);
  }

  :active {
    transform: scale(110%);
  }
`;
