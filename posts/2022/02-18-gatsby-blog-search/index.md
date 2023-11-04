---
title: "Gatsby 블로그 제작 - 검색 기능 구현"
date: "2022-02-18"
tags: ["Gatsby", "GraphQL"]
hide: true
---

## 개요

블로그를 단지 글을 쓰는 용도가 아니라, 이전에 정리해둔 정보를 다시 찾아보는 용도로 쓴다면 검색 기능은 필수적이다. 이 글이 올라갈 때는 블로그에 멀쩡히 검색 기능이 붙어 있겠지만 사실 이건 며칠간의 삽질의 결과물이다.

#### 핵심 개념

검색에는 세 가지 요소가 필요하다.

- 속도와 성능을 위해 데이터를 검색에 알맞은 형태로 바꿔놓은 **인덱스(index)**
- 인덱스와 검색어를 이용해 검색을 수행하고 매칭된 결과를 리턴하는 **검색 엔진(search engine)**
- 사용자로 하여금 검색 기능을 사용할 수 있게 해주는 **검색 UI(search UI)**

일반적으로 검색 엔진 라이브러리라고 하면 raw data로부터 인덱스를 생성하고, 인덱스와 검색어를 통해 검색을 수행하는 것까지를 전부 담당한다.

[공식 문서](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/)에 따르면, Gatsby 사이트에 검색 기능을 추가하는 방법으로는 `js-search` 라이브러리나 `gatsby-plugin-local-search`과 같은 플러그인을 이용해 client-side 검색을 추가하는 방법이 있고, 혹은 Algolia나 ElasticSearch와 같은 API 기반의 외부 검색 엔진을 사용하는 방법이 있다.

전자의 경우 모든 검색 처리를 브라우저에서 수행하므로 사이트 규모가 커질수록 방문자가 다운로드해야 할 인덱스의 크기가 커지는 단점이 있다. 반면 검색 엔진 API의 경우 이러한 단점을 해소할 수 있지만 일반적으로 무료 플랜은 호스팅이나 월별 요청 수에 제한이 있고, 온전한 기능을 사용하려면 유료 플랜을 사용해야 한다.



## 진행과정

자료의 수가 적은 나로서는 검색 엔진 API의 이점이 적어 client-side 검색을 택했다. 그래서 `gatsby-plugin-local-search` 플러그인을 사용하고, `react-use-flexsearch` 라이브러리를 이용해 검색결과를 표시하려 했다.

결론부터 말하자면 플러그인이나 라이브러리를 통한 검색 기능 구현은 잘 되지 않았다. 결국 다소 비효율적인 방법으로나마 직접 client-side 검색 기능을 구현하게 되었다. 아래는 그동안 겪은 이슈를 나열한 것이다.

#### `gatsby-plugin-local-search` 플러그인 이슈

> - `gatsby-plugin-local-search`란 그 이름대로 local search, 즉 client-side 검색 기능을 위한 플러그인이다.
> - `gatsby-config.js`를 통해 검색에 사용할 쿼리, 필드, 검색 결과로 받을 값 등을 설정할 수 있고, 검색 엔진으로는 FlexSearch와 Lunr 중 하나를 선택해서 사용할 수 있다. 공식 문서에서는 성능이 뛰어난 FlexSearch를 추천하고 있다.

- 이슈라고 하기엔 뭣하지만 FlexSearch의 최신버전은 0.7.21인데 반해 이 플러그인에선 0.6.32버전을 쓴다. 0.6 -> 0.7로 넘어가면서 바뀐 부분이 제법 많으므로 공식문서를 참고할 때 버전을 잘 확인해야 한다.

#### `react-use-flexsearch` 라이브러리 이슈

> - `react-use-flexsearch`란 FlexSearch로 생성한 인덱스와 스토어를 사용해 검색을 수행할 수 있는 hook을 제공하는 라이브러리다.
> - FlexSearch는 구버전인 0.6.22를 사용한다. 오랫동안 업데이트되지 않은 라이브러리라 비슷한 기능이라면 직접 구현하는 편이 낫지 않을까 싶다.

- 타입 정의가 되어 있지 않다. TypeScript에서 사용하려면 별도의 타입 정의 파일을 추가해줘야 한다.

- 인덱스 생성 시 옵션값을 넘길 방법이 없다. FlexSearch는 인덱스 객체를 생성할 때 옵션을 통해 인코더나 토큰화 함수를 설정할 수 있고, 특히 인코더는 인덱스 추가 뿐만 아니라 검색어에도 적용된다. 하지만 옵션을 받지 않으므로 인덱스 객체는 Built-in 함수를 사용하게 되고, 결국 후술할 문제로 인해 이 라이브러리를 사용하면 원천적으로 한글 검색이 되지 않는다.

  ![react-use-flexsearch-1](.\react-use-flexsearch-1.png)

- `Index.search(query, searchOptions)`라는, 존재하지 않는 사용법으로 메서드를  사용하고 있다. 공식문서에 명시된 사용법은 `Index.search(string, <limit>, <callback>)`와 `Index.search(<options>)` 뿐이다.

  ![react-use-flexsearch-2](.\react-use-flexsearch-2.png)

#### FlexSearch 라이브러리 이슈

> - FlexSearch란 텍스트 검색 라이브러리다.
> - 처음에 인덱스를 생성하고, <키, 텍스트> 쌍으로 검색 대상이 될 데이터를 넣고, 인덱스에 추가한 데이터에 대해 검색을 수행할 수 있다. 인덱스 생성 시에 문자열 인코딩이나 토큰화 함수를 포함한 다양한 옵션을 줄 수 있다.

- Index Option의 `encode`는 공식문서의 설명과 달리 `string` 타입의 인코더 명(`"simple"`, `"balance"` 등)을 받으면 오류가 난다.

  ```javascript
  // flexsearch/src/index.js를 보면 이런 식으로 this.encode를 초기화하고
  this.encode = options["encode"] || (charset && charset.encode) || default_encoder;
  
  // (문자열이면 built-in 함수로 교체하는 일 없이) 바로 이런 식으로 사용한다
  content = this.encode(content);
  ```

  따라서 특정한 build-in 인코더를 사용하고 싶다면 옵션 중 `charset`을 `"latin:(인코더명)"`과 같은 형태로 지정해야 한다.

- `encode` 옵션을 주지 않았을 경우 built-in 인코더를 사용하는데, 알파벳과 숫자를 제외한 모든 문자를 제거하는 과정이 인코딩 과정에 포함되어 있다. 이 때문에 별도의 함수를 `encode` 옵션에 넣어주지 않으면 한글은 인덱스에 추가되지도 않고 검색도 되지 않는다.

- 공식문서에서 소개하는 중국어, 일본어, 한국어용 인코딩 설정은 다음과 같다.

  ![flexsearch](.\flexsearch.png)

  하지만 이는 어디까지나 예시일 뿐이고 실제로 이 설정을 넣으면 검색이 제대로 되지 않는다.

  - `.replace(/[\x00-\x7F]/g, '')`: ASCII 문자를 제거 -> 영어나 숫자 검색이 불가능해진다.
  - `.split('')`: 한 글자씩 쪼갬 -> 검색 정확도가 크게 떨어진다. `encode` 함수는 검색어에도 적용이 되기 때문에 한 글자씩 쪼갠 인덱스를 한 글자씩 쪼갠 검색어로 검색을 하게 된다. 예를 들어 "**포트**"라고 검색을 하면 "**포트**", "**포**스**트**", "**포**인**트**" 등이 전부 검색된다.

  따라서 적절한 한국어 검색을 위해선 별도의 인코더, 토큰화 함수를 마련해야 한다.

결론적으로 FlexSearch를 사용하기 위해서는 한국어용 `encode`, `tokenize` 옵션이 필수적인데, 아무래도 직접 구현할 만한 게 아니라서 FlexSearch 사용은 포기해야 했다. 영어와 한국어라는 언어의 차이 때문에 발생한 문제인 만큼 대부분의 검색 라이브러리는 동일한 문제를 안고 있을 거라 생각했고, 실제로 `gatsby-plugin-local-search`에서 지원하는 다른 검색엔진 라이브러리인 Lunr도 마찬가지였다.



#### 검색 기능 직접 구현하기

결국 raw data로부터 직접 검색하는 기능을 구현하기로 했다. 구상한 검색 과정은 다음과 같다.

1. 검색어와 포스트를 인코딩한다. (현재는 `toLowerCase`만)
2. 모든 포스트에 대해 검색어로 `String.match()`를 수행하고, 매치된 수가 1 이상인 포스트만 결과 리스트(`newResults`)에 저장한다.
3. 매치된 갯수를 정확도의 척도로 삼고, 결과 리스트를 정확도의 내림차순으로 정렬하여 사용한다.

포스트의 갯수를 n, 포스트 당 평균 글자수를 m이라 하면 한 번 검색할 때마다 O(n * m)의 시간복잡도를 갖는 셈이다. 성능을 조금이라도 개선하기 위해 다음과 같은 최적화 방법을 생각했다.

- 검색어는 기본적으로 길이가 2 이상인 것만 사용한다. 한 글자로는 의미가 잘 전달되지 않고 원하는 결과를 찾기도 힘들기 때문이다.
- 검색어에 대한 결과값은 세션 스토리지에 캐싱하여 사용한다. 로컬 스토리지가 아니라 세션 스토리지인 이유는, 새로운 포스트가 올라오면 기존의 검색 결과는 의미가 없어지기 때문에 브라우저가 오랫동안 검색 결과를 갖고 있을 필요가 없다고 생각했기 때문이다.
- 검색 기능을 change 이벤트 핸들러로 사용할 때, 입력 중 검색 기능이 작동하는 것을 방지하기 위해 debounce를 적용한다. throttle이 아닌 이유는 검색은 연속된 이벤트의 도중보다는 연속된 이벤트의 끝이 더 의미가 있기 때문이다.
- 검색은 비동기적으로 수행하도록 한다.

그래서 완성된 코드는 다음과 같다.

- `src/hooks/useSearch.ts`

  ```typescript
  import {useEffect, useState} from 'react';
  import _ from 'lodash';
  import {
    escapedRegExp,
    getProperty,
    getStorageItem,
    setStorageItem,
  } from 'src/utils/common';
  
  interface Options {
    searchFrom: string;
    refBy: string;
    limit?: number;
    cacheKey?: string;
    debounceWait?: number;
    minKeywordLength?: number;
  }
  
  const useSearch = <T extends Record<string, any>>(
    dataList: T[],
    {
      searchFrom,
      refBy,
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
  ```

- `src/utils/common.ts`

  ```typescript
  ...
  
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
  ```

  


- `src/views/searchModal/index.tsx`

  ```tsx
  import React from 'react';
  import {graphql, useStaticQuery} from 'gatsby';
  import useSearch from 'src/hooks/useSearch';
  import {MdxNode} from 'src/types';
  import {getPostUrl} from 'src/utils/common';
  
  export const pageQuery = graphql`
    {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          slug
          frontmatter {
            title
            tags
          }
          rawBody
        }
      }
    }
  `;
  
  const SearchModal = () => {
    const {
      allMdx: {nodes},
    } = useStaticQuery<{allMdx: {nodes: MdxNode[]}}>(pageQuery);
    const {results, handleSearchInputChange} = useSearch(
      nodes,
      'rawBody',
      'slug',
      {
        cacheKey: 'search-modal',
      }
    );
  
    return (
      <div
        style={{
          width: '500px',
          position: 'absolute',
          top: '20%',
          left: '50%',
          backgroundColor: 'white',
          border: '1px solid black',
        }}
      >
        <input onChange={handleSearchInputChange} />
        <ul>
          {results.map((result) => (
            <li key={result.slug}>
              <a href={getPostUrl(result.slug)}>
                <div>{result.frontmatter.tags}</div>
                <h4>{result.frontmatter.title}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchModal;
  ```

- 결과

![Search](https://lh3.googleusercontent.com/pw/AM-JKLWjFgS7lvr_INbby6lcBxZWssKwCWPkQoM5P6UK4dEwWgYENiYmA3qeW1vhyms8iceTTiV2phHo1bXezOSmfR4EmFAV877iftbymi_1uDOcPJxeGHt1CoUezTXqjv1iNl2o7f0j3ywrkaO36UVwP1Fw=w480-h356-no?authuser=0)

- 세션 스토리지

![session storage](.\session-storage.png)

이로써 검색 기능이 구현되었고 세션 스토리지에 검색 데이터도 잘 저장되는 것을 확인할 수 있다.



## 후기

처음에 플러그인과 라이브러리를 사용하며 '이게 왜 안 되지' 싶은 것들을 하나하나 찾다 보니 생각보다 시간이 많이 걸렸다. 그래도 라이브러리 코드를 뒤져가며 원인을 하나씩 살펴보는 건 나름대로 즐거운 경험이었다. FlexSearch에서 찾은 이슈는 추후에 PR을 넣을 예정인데 받아들여질지 어떨지는 잘 모르겠다.

여하튼 이것으로 블로그로서 갖추어야 할 기본적인 기능들은 모두 갖춘 셈이다. 나머지 필요한 기능들은 디자인 적용 후에 하나씩 추가해나갈 예정이다.

