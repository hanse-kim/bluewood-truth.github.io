import React, {useCallback} from 'react';

interface Props {
  page: number;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
  setPage: (page: number) => void;
}

const PageButton = ({page, label, setPage, disabled, selected}: Props) => {
  const clickHandler = useCallback(() => {
    setPage(page);
  }, [page]);

  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      {...(selected && {style: {color: 'red'}})}
    >
      {label || page}
    </button>
  );
};

export default React.memo(PageButton);
