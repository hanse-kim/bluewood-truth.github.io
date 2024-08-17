import React, { HTMLProps } from 'react';

interface Props {
  children?: React.ReactNode | string;
}

export const Paragraph = ({ children }: Props) => {
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

export const Heading1 = ({ children }: Props) => {
  return (
    <h1 className="mt-[0.5em] text-28-400 border-b-1 border-solid border-border">
      {children}
    </h1>
  );
};

export const Heading2 = ({ children }: Props) => {
  return (
    <h2 className="mt-[0.5em] text-24-400 border-b-1 border-solid border-border">
      {children}
    </h2>
  );
};

export const Heading3 = ({ children }: Props) => {
  return <h3 className="mt-[0.5em] text-20-400">{children}</h3>;
};

export const Heading4 = ({ children }: Props) => {
  return <h3 className="mt-[0.5em] text-18-400">{children}</h3>;
};

export const UnorderedList = ({ children }: Props) => {
  return <ul className="pl-32 list-disc div>div>&:mt-14">{children}</ul>;
};

export const OrderedList = ({ children }: Props) => {
  return <ol className="pl-32 list-decimal div>div>&:mt-14">{children}</ol>;
};

export const ListItem = ({ children }: Props) => {
  if (
    typeof children === 'string' ||
    (Array.isArray(children) &&
      children.some((child) => typeof child === 'string'))
  ) {
    children = <div>{children}</div>;
  }

  return (
    <li className="not(:first-of-type):mt-14">
      <div className="flex flex-col gap-14">{children}</div>
    </li>
  );
};

export const Blockquote = ({ children }: Props) => {
  return (
    <blockquote className="flex flex-col p-16 border-l-4 border-dashed gap-14 border-1 border-border border-l-solid text-text-quote">
      {children}
    </blockquote>
  );
};

export const Anchor = ({
  children,
  ...props
}: Props & HTMLProps<HTMLAnchorElement>) => {
  return (
    <a
      className="inline-block underline text-main visited:text-[mediumpurple] after:content-['🔗'] after:text-[0.9em]"
      {...props}
    >
      {children}
    </a>
  );
};

export const Image = ({ ...props }: HTMLProps<HTMLImageElement>) => {
  return <img className="block mx-auto my-0" {...props} />;
};

export const Strong = ({ children }: Props) => {
  return <strong className="font-medium">{children}</strong>;
};

export const Code = ({ children, ...props }: Props) => {
  return (
    <code
      className="w-fit px-4 mx-2 border-1 border-solid border-border rounded-4 bg-bg-footer text-main font-[Consolas,Monaco,monospace]"
      {...props}
    >
      {children}
    </code>
  );
};

export const Table = ({ children }: Props) => {
  return (
    <table className="overflow-hidden border-collapse rounded-2 [$_th]:px-8 [$_th]:py-4 [th]:border-1 [th]:border-solid th:border-border">
      {children}
    </table>
  );
};
