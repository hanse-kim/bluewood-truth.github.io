import _ from 'lodash';
import { MdxNode } from 'src/types';

export const parseUrlSearchParams = (searchParams: string) => {
  if (searchParams.startsWith('?')) {
    searchParams = searchParams.slice(1);
  }
  const tokens = searchParams.split('&');
  if (searchParams.length === 0) {
    return {};
  }
  const result: Record<string, any> = {};

  tokens.forEach((token) => {
    const [key, value] = token.split('=');
    result[key] = JSON.parse(value);
  });

  return result;
};

export const getStorageItem = <T = any>(key: string, storage = localStorage): T => {
  return JSON.parse(`${storage.getItem(key)}`);
};

export const setStorageItem = (key: string, data: unknown, storage = localStorage) => {
  storage.setItem(key, JSON.stringify(data));
};

export const getProperty = (
  query: string | string[],
  obj: Record<string, any>,
  separator = '.',
): any => {
  if (typeof query === 'string') {
    query = query.split(separator);
  }

  const nextKey = query.shift();

  if (!nextKey || !obj) {
    return obj;
  }

  return getProperty(query, obj[nextKey]);
};

export const escapedRegExp = (str: string, flags?: string) => {
  return new RegExp(_.escapeRegExp(str), flags);
};

export const filterHidedNodes = (posts: MdxNode[]) => {
  return process.env.NODE_ENV === 'production'
    ? posts.filter((post) => !post.frontmatter.hide)
    : posts;
};
