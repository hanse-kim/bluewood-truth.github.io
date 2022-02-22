import _ from 'lodash';

const noUrl = '#';

export const getPostUrl = (slug?: string) => {
  return slug ? `/post/${slug}` : noUrl;
};

export const getTagUrl = (tag?: string) => {
  return tag ? `/tag/${_.kebabCase(tag)}` : noUrl;
};

export const range = (start: number, end?: number) => {
  if (!end) {
    end = start;
    start = 0;
  }

  if (end <= start) return [];

  const length = end - start;
  return new Array(length).fill(0).map((_, i) => i + start);
};

export const parseUrlSearchParams = (searchParams: string) => {
  if (searchParams.startsWith('?')) searchParams = searchParams.slice(1);
  const tokens = searchParams.split('&');
  if (searchParams.length === 0) return {};
  const result: Record<string, any> = {};

  tokens.forEach((token) => {
    const [key, value] = token.split('=');
    result[key] = JSON.parse(value);
  });

  return result;
};

export const getStorageItem = <T = any>(
  key: string,
  storage = localStorage
): T => {
  return JSON.parse(`${storage.getItem(key)}`);
};

export const setStorageItem = (
  key: string,
  data: any,
  storage = localStorage
) => {
  storage.setItem(key, JSON.stringify(data));
};

export const getProperty = (
  query: string | string[],
  obj: any,
  separator = '.'
): any => {
  if (typeof query === 'string') query = query.split(separator);
  const nextKey = query.shift();
  if (!nextKey || !obj) return obj;
  return getProperty(query, obj[nextKey]);
};

export const escapedRegExp = (str: string, flags?: string) => {
  return new RegExp(_.escapeRegExp(str), flags);
};
