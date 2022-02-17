import {useEffect, useState} from 'react';
import _ from 'lodash';
import {
  escapedRegExp,
  getProperty,
  getStorageItem,
  setStorageItem,
} from 'src/utils/common';

interface Options {
  limit?: number;
  cacheKey?: string;
  debounceWait?: number;
  minKeywordLength?: number;
}

const useSearch = <T extends Record<string, any>>(
  dataList: T[],
  searchFrom: string,
  refBy: string,
  {
    limit = 20,
    cacheKey = 'search',
    debounceWait = 300,
    minKeywordLength = 2,
  }: Options
) => {
  const [results, setResults] = useState<T[]>([]);
  const [store, setStore] = useState<Record<string, T>>({});

  useEffect(() => {
    const storageKey = `store_${cacheKey}`;
    const cachedStore = getStorageItem(storageKey, sessionStorage);
    if (cachedStore) {
      setStore(cachedStore);
      return;
    }

    const store: Record<string, T> = {};
    dataList.forEach((data) => {
      const refKey = getProperty(refBy.split('.'), data);
      store[refKey] = data;
    });

    setStorageItem(storageKey, store, sessionStorage);
    setStore(store);
  }, [dataList, refBy, cacheKey]);

  const encode = (str: string) => {
    return str.toLowerCase();
  };

  const search = async (query: string) => {
    query = encode(query);
    const storageKey = `query_${cacheKey}_${query}`;
    const cachedResults = getStorageItem<string[]>(storageKey, sessionStorage);
    if (cachedResults) {
      setResults(cachedResults.map((result) => store[result]));
      return;
    }

    const hitCount: Record<string, number> = {};
    let newResults: string[] = [];

    dataList.forEach((data) => {
      if (query.length < minKeywordLength) return;

      const searchString = encode(getProperty(searchFrom, data));
      const refKey = getProperty(refBy, data);
      const re = escapedRegExp(query, 'g');

      if (!hitCount[refKey]) hitCount[refKey] = 0;
      const hit = searchString.match(re);
      if (hit) hitCount[refKey] += hit.length;

      if (hitCount[refKey] > 0) newResults.push(refKey);
    });

    if (newResults.length === 0) return;
    newResults = newResults
      .sort((a, b) => hitCount[b] - hitCount[a])
      .slice(0, limit);
    setStorageItem(storageKey, newResults, sessionStorage);
    setResults(newResults.map((result) => store[result]));
  };

  const handleSearchInputChange = _.debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => search(e.target.value),
    debounceWait
  );

  return {search, results, handleSearchInputChange};
};

export default useSearch;
