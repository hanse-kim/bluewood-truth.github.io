import {useCallback, useEffect, useMemo, useState} from 'react';

interface Options {
  itemsPerPage?: number;
  initialPage?: number;
}

const usePagination = <T>(
  data: T[],
  {itemsPerPage = 10, initialPage}: Options = {}
) => {
  const [paginatedData, setPaginatedData] = useState<T[]>([]);
  const [currPage, setCurrPage] = useState(initialPage || 1);

  useEffect(() => {
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = currPage * itemsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [data, currPage, itemsPerPage]);

  const lastPage = useMemo(
    () => Math.ceil(data.length / itemsPerPage),
    [data.length, itemsPerPage]
  );

  const setPage = useCallback((page: number) => {
    if (page > lastPage) page = lastPage;
    if (page < 1) page = 1;
    setCurrPage(page);
  }, []);

  return {paginatedData, currPage, setPage, lastPage};
};

export default usePagination;
