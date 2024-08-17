import React from 'react';

interface Props {
  githubName: string;
  githubUrl: string;
  publishYear: string;
}

export const Footer = ({ githubName, githubUrl, publishYear }: Props) => {
  return (
    <footer className="flex items-center justify-center gap-4 h-footer-height bg-bg-footer text-text-footer text-14-300">
      Copyright {publishYear}.
      <a href={githubUrl} className="underline text-14-400">
        {githubName}
      </a>
      All right reserved.
    </footer>
  );
};
