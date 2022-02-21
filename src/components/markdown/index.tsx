import React from 'react';
import {
  QuoteWrapper,
  H1,
  H2,
  H3,
  H4,
  HeadingWrapper,
  ListItemInner,
  ListItemWrapper,
  Ol,
  Ul,
} from './styled';

interface Props {
  children?: React.ReactNode | string;
}

export const Paragraph = ({children}: Props) => {
  if (typeof children === 'string') {
    return (
      <div>
        {children.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    );
  }

  return <p>{children}</p>;
};

export const Heading1 = ({children}: Props) => {
  return (
    <HeadingWrapper>
      <H1>{children}</H1>
    </HeadingWrapper>
  );
};

export const Heading2 = ({children}: Props) => {
  return (
    <HeadingWrapper>
      <H2>{children}</H2>
    </HeadingWrapper>
  );
};

export const Heading3 = H3;

export const Heading4 = H4;

export const UnorderedList = Ul;

export const OrderedList = Ol;

export const ListItem = ({ children }: Props) => {
  if (
    typeof children === 'string' ||
    (Array.isArray(children) &&
      children.some((child) => typeof child === 'string'))
  ) {
    children = <div>{children}</div>;
  }

  return (
    <ListItemWrapper>
      <ListItemInner>{children}</ListItemInner>
    </ListItemWrapper>
  );
};

export {Strong, Anchor, Code, Image} from './styled';

export const Blockquote = ({children}: Props) => {
  return <QuoteWrapper>{children}</QuoteWrapper>;
};
