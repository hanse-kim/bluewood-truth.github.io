import React, {useCallback} from 'react';
import { TextButton } from 'src/components/textButton';
import {PageButtonWrapper} from './styled';

interface Props {
  page: number;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
  setPage: (page: number) => void;
}

export const PageButton = ({page, label, setPage, disabled, selected}: Props) => {
  const clickHandler = useCallback(() => {
    window.scrollTo(0, 0);
    setPage(page);
  }, [page]);

  return (
    <PageButtonWrapper onClick={clickHandler} data-selected={selected}>
      <TextButton disabled={selected || disabled}>{label || page}</TextButton>
    </PageButtonWrapper>
  );
};
