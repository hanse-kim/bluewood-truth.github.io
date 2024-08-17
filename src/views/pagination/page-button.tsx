import React, { useCallback } from 'react';
import { TextButton } from 'src/components/text-button';

interface Props {
  page: number;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
  setPage: (page: number, callback: (page?: number) => void) => void;
}

export const PageButton = ({
  page,
  label,
  setPage,
  disabled,
  selected,
}: Props) => {
  const clickHandler = useCallback(() => {
    setPage(page, () => {
      window.scrollTo(0, 0);
    });
  }, [page, setPage]);

  return (
    <div
      className="w-36 h-36 flex items-center justify-center text-18-300 data-[selected=true]:text-main data-[selected=true]:text-18-400"
      onClick={clickHandler}
      data-selected={selected}
    >
      <TextButton disabled={selected || disabled}>{label || page}</TextButton>
    </div>
  );
};
