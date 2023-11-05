import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { PageButton } from './page-button';
import { Styled } from './styled';

interface Props {
  currPage: number;
  lastPage: number;
  setPage: (page: number) => void;
  navLength?: number;
  navDisPlayType?: NavDisplayType;
}

type NavDisplayType = 'fixed' | 'centered';

export const Pagination = ({
  currPage,
  lastPage,
  setPage,
  navLength = 10,
  navDisPlayType = 'fixed',
}: Props) => {
  const { pageList } = usePagination(currPage, lastPage, navLength, navDisPlayType);

  if (lastPage <= 1) {
    return null;
  }

  return (
    <Styled.Pagination>
      <PageButton label="<" page={pageList[0] - 1} setPage={setPage} disabled={pageList[0] === 1} />
      {pageList.map((page) => (
        <PageButton page={page} setPage={setPage} selected={currPage === page} key={page} />
      ))}
      <PageButton
        label=">"
        page={pageList[pageList.length - 1] + 1}
        setPage={setPage}
        disabled={pageList[pageList.length - 1] === lastPage}
      />
    </Styled.Pagination>
  );
};

const usePagination = (
  currPage: number,
  lastPage: number,
  navLength: number,
  navDisplayType: NavDisplayType,
) => {
  const [pageList, setPageNavList] = useState<number[]>([]);

  useEffect(() => {
    let firstPageInNav: number, lastPageInNav: number;
    switch (navDisplayType) {
      case 'fixed': {
        firstPageInNav = currPage - ((currPage - 1) % navLength);
        lastPageInNav = firstPageInNav + navLength - 1;
        break;
      }
      case 'centered': {
        firstPageInNav = currPage - Math.floor(navLength / 2);
        lastPageInNav = currPage + Math.floor(navLength / 2);
      }
    }

    firstPageInNav = Math.max(1, firstPageInNav);
    lastPageInNav = Math.min(lastPage, lastPageInNav);
    setPageNavList(_.range(firstPageInNav, lastPageInNav + 1));
  }, [currPage, lastPage, navDisplayType, navLength]);

  return { pageList };
};
