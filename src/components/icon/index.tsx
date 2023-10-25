import React from 'react';
import { IconButtonWrapper, type IconProps, IconWrapper } from './styled';

interface IconButtonProps {
  iconElement: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const IconButton = ({ iconElement, onClick }: IconButtonProps) => {
  return <IconButtonWrapper onClick={onClick}>{iconElement}</IconButtonWrapper>;
};

export const SearchIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6066 6.94977C14.1687 8.51187 14.1687 11.0445 12.6066 12.6066C11.0445 14.1687 8.51184 14.1687 6.94975 12.6066C5.38765 11.0445 5.38765 8.51187 6.94975 6.94977C8.51184 5.38767 11.0445 5.38767 12.6066 6.94977ZM14.3102 12.896C15.788 10.7533 15.5737 7.79552 13.6673 5.88911C11.5194 3.74123 8.03697 3.74123 5.88909 5.88911C3.7412 8.03699 3.7412 11.5194 5.88909 13.6673C7.91779 15.696 11.137 15.8086 13.2979 14.005L17.7331 18.4402C18.026 18.7331 18.5009 18.7331 18.7938 18.4402C19.0867 18.1474 19.0867 17.6725 18.7938 17.3796L14.3102 12.896Z"
          fill="currentColor"
        />
      </svg>
    </IconWrapper>
  );
};

export const CrossIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 8L16 16M16 8L8 16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </IconWrapper>
  );
};

export const ArrowIcon = (props: IconProps) => {
  return (
    <IconWrapper {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM19.5303 12.5303C19.8232 12.2374 19.8232 11.7626 19.5303 11.4697L14.7574 6.6967C14.4645 6.40381 13.9896 6.40381 13.6967 6.6967C13.4038 6.98959 13.4038 7.46447 13.6967 7.75736L17.9393 12L13.6967 16.2426C13.4038 16.5355 13.4038 17.0104 13.6967 17.3033C13.9896 17.5962 14.4645 17.5962 14.7574 17.3033L19.5303 12.5303ZM5 12.75H19V11.25H5V12.75Z"
          fill="currentColor"
        />
      </svg>
    </IconWrapper>
  );
};
