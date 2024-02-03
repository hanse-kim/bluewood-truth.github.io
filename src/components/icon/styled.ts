import styled from '@emotion/styled';

export interface IconProps {
  useCurrentColor?: boolean;
  children?: React.ReactNode;
}

export const IconWrapper = styled.span<IconProps>`
  display: flex;

  width: fit-content;
  height: fit-content;

  color: ${(props) => (props.useCurrentColor ? undefined : 'var(--color-main)')};
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
