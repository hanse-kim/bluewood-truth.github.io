import { Link } from 'gatsby';
import React, { useMemo } from 'react';
import { TextButtonWrapper, Underline } from './styled';
interface Props {
  to?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

export const TextButton = ({ to, onClick, children, disabled }: Props) => {
  const buttonElement = useMemo(
    () => (
      <TextButtonWrapper onClick={onClick} disabled={disabled}>
        {children}
        <Underline />
      </TextButtonWrapper>
    ),
    [children, disabled, onClick],
  );

  if (to) {
    return <Link to={to}>{buttonElement}</Link>;
  }

  return buttonElement;
};
