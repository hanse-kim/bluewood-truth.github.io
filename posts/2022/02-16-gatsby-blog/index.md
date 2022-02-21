---
title: "Gatsby 블로그 제작 - 페이지 생성"
date: "2022-02-16"
tags: ["React", "Gatsby", "GraphQL"]
---

## 개요

#### 어떤 블로그를 만들까?

내가 블로그를 하려는 이유는 기본적으로 공부한 내용을 정리하고 찾아보기 위함이다. 이에 필요한 기능들을 생각해봤다.

- 기본적으로 Jekyll처럼 마크다운 파일을 이용해 정적 페이지를 생성
- 전체 포스트 목록을 볼 수 있는 페이지
- 태그별 포스트 목록을 볼 수 있는 페이지
  - 각 포스트 목록은 페이지네이션함

- 블로그 내 포스트 검색 기능

우선은 이 정도가 필요할 듯하다. 기본적인 컨셉은 위키처럼 원하는 내용을 쉽게 찾아볼 수 있도록 검색과 하이퍼링크를 적극적으로 활용하고 싶다.

#### 왜 Gatsby인가?

예전에 정적 사이트 생성기 Jekyll로 블로그를 만들어보면서 고생한 적이 있다. Jekyll은 일단 Ruby 언어로 만들어져 환경 세팅부터 빌드까지의 과정이 복잡했고, 마음에 드는 테마를 찾아도 내 입맛에 맞게 커스터마이징하기가 너무 번거로웠다.

그래서 이번에는 React 기반의 정적 사이트 생성기인 Gatsby를 사용하기로 했다. 처음에는 단순히 내게 익숙한 React 기반이라는 점 때문에 택했지만, 실제로 사용해보면서 매우 매력적인 프레임워크임을 알게 되었다. 

#### Gatsby란?

GraphQL로 데이터를 다루고, React로 컴포넌트를 만들고, 빌드 결과물로서 정적인 파일들을 생성하는 프론트엔드 프레임워크이다.

일반적인 React App은 빌드시 텅 빈 HTML과 JavaScript 파일을 생성한다. 이를 실행하면 JavaScript 코드를 통해 HTML 내용물을 렌더링하게 된다. 반면 Gatsby는 빌드 시 렌더링을 마친 정적 페이지들을 생성하고, 필요하다면 JavaScript 코드를 통해 추가적인 동작을 하게 된다.

Gatsby는 다음과 같은 장점이 있다.

- 코드 분할, 이미지 최적화, 중요한 스타일(critical style)의 인라인화, 레이지 로딩, 리소스 프리페치 등을 통해 뛰어난 성능을 보여준다.
- 노드(node)라는 데이터 단위를 통한 유연한 데이터 구조와 다양한 플러그인을 통해 다양한 파일, 데이터베이스, CMS의 데이터를 다룰 수 있고, 쉽게 원하는 기능을 추가할 수 있다.
- 빌드된 정적 파일들은 서버와 완전히 분리되어 있으므로 데이터베이스는 악의적인 요청이나 DDOS 공격 등에 대해 안전하다.

덧붙여서 공식 문서의 튜토리얼([#](https://www.gatsbyjs.com/docs/tutorial/))이 아주 알차다. React나 GraphQL을 전혀 모르더라도 충분히 따라갈 수 있도록 step-by-step으로 친절하게 설명이 되어 있다. 만약 GraphQL, 혹은 React을 처음 배운다면 Gatsby로 시작해보는 것도 좋은 선택일 것이다.

#### 주요 개념

![Gatsby](.\Gatsby.jpg)

- Gatsby 사이트에서 사용되는 모든 데이터는 **GraphQL 데이터 계층(data layer)**에 위치한다.
- 로컬 파일, 데이터베이스, CMS 등 다양한 데이터 **소스(source)**들은 **source plugin**을 통해 데이터 계층에 추가될 수 있다.
- 데이터 계층의 정보들은 **노드(node)**라는 데이터 단위로 존재한다.
- **transformer plugin**을 통해 기존 노드들로부터 새로운 노드들을 생성할 수 있다.

>  예를 들어 컴퓨터의 파일시스템에 접근하게 해주는 `gatsby-source-filesystem` 플러그인을 이용해 특정 경로의 로컬 파일을 File 노드로서 데이터 계층에 추가할 수 있다.
>
> 그리고 `gatsby-plugin-mdx` 플러그인을 사용하면 확장자가 `.mdx`인 File 노드들로부터 MDX 노드를 만들 수 있다. MDX 노드는 `.mdx`파일의 특성에 맞게 처리되어 파일 최상단의 YAML 정보, mdx 포맷으로 변환된 파일 내용 등의 정보를 포함한다.

- 데이터 계층의 노드들은 **GraphQL 쿼리**를 사용해 리액트 컴포넌트에서 사용할 수 있다.
- 언급했듯 다양한 플러그인을 설치하여 손쉽게 기능을 확장할 수 있다. Gatsby 플러그인을 사용하는 순서는 크게 다음과 같다.
  1. `npm`으로 플러그인을 설치한다.
  2. `gatsby-config.js`의 `plugins` 필드에 설치한 플러그인을 추가한다. 
  3. 플러그인을 사용한다.



## 진행과정

#### 0. Gatsby 프로젝트 생성

`npm`으로 `gatsby-cli`를 전역으로 설치하면 `gatsby` 명령어를 사용할 수 있게 된다.

```shell
$ npm install -g gatsby-cli
$ gatsby -v
> Gatsby CLI version: 4.8.0
```

이제 Gatsby 프로젝트를 시작하기 위한 두 가지 방법이 있는데,

- `gatsby new`로 시작해서 처음부터 구현하는 방법
- 일종의 boilerplate인 gatsby-starter를 사용하는 방법

처음에는 스타터를 이용해 빠르게 시작할까도 생각해봤지만, 새로운 React 프레임워크를 만지는 건 오랫만이라 손이 근질근질하고 직접 구현해보고픈 욕구가 생겼다. 그래서 처음부터 만들어보는 것을 택했다.

`gatsby new` 명령어를 입력하면 초기설정과 함께 Gatsby 프로젝트를 생성할 수 있다. 나는 TypeScript, Emotion 정도만 선택하고 나머지는 필요할 때마다 추가하기로 했다.

```shell
$ gatsby new
...
> √ Will you be using JavaScript or TypeScript?
> · TypeScript
> √ Will you be using a CMS?
> · No (or I'll add it later)
> √ Would you like to install a styling system?
> · Emotion
```

#### 1. 포스트 목록을 표시하기

우선은 `src/posts`에 더미 `.mdx` 파일들을 20개 정도 만들었다. 대강 이런 식이다.

- `posts/post1/index.mdx`


```markdown
---
title: 1번째 포스트입니다
date: 2022-01-01
---
1번째 포스트의 내용입니다.
```

다음으로 몇 가지 필요한 플러그인을 추가했다.

```shell
$ npm install gatsby-plugin-root-import
$ npm install gatsby-source-filesystem
$ npm install gatsby-plugin-mdx @mdx-js/mdx@v1 @mdx-js/react@v1
```

- `gatsby-config.js`


```javascript
module.exports = {
  siteMetadata: {
    title: '개발하고 기록하기',
  },
  plugins: [
    //...
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [],
      },
    },
  ],
};
```


> - `siteMetadata` 필드: 말 그대로 사이트의 메타데이터를 입력할 수 있다. 이 메타데이터는 별도의 플러그인 없이 GraphQL 쿼리로 접근 가능한 데이터 중 하나다.
> - `gatsby-plugin-root-import`: 절대경로 import를 사용하기 위한 플러그인.
> - `gatsby-source-filesystem`: 컴퓨터의 파일시스템을 사용하기 위한 source 플러그인.
> - `gatsby-plugin-mdx`: File node를 MDX node로 변환하는 transformer 플러그인.
> - `@mdx-js/mdx`: MDX를 구현한 라이브러리.
> - `@mdx-js/react`: MDX 구현을 React 컴포넌트에 매핑하기 위한 라이브러리.

이제 `src/posts` 안에 있는 파일들은 File node로서 데이터 계층에 추가되고, 그 중 확장자가 `.mdx`인 노드들로부터 MDX node들이 생성될 것이다. `gatsby develop` 명령어로 개발자 모드로 실행하고 GraphiQL(`localhost:8000/___graphql`)로 들어가서 확인해볼 수 있다.

![GraphiQL](.\GraphiQL.png)

> - id: 각 노드의 고유 id
> - frontmatter: mdx 파일 최상단의 YAML 정보
> - body: mdx 포맷으로 변환된 파일 내용

이 GraphiQL 도구는 데이터 계층에 추가된 노드들을 탐색하고 필요한 쿼리를 작성하는 데 유용하다.

이제 데이터도 추가했고 쿼리도 작성했으니 실제로 사이트에 띄워봤다.

- `src/types.ts`


```typescript
import {Node} from 'gatsby';

export interface SiteNode extends Node {
  siteMetadata: {
    title: string;
  };
}

export interface MdxNode extends Node {
  frontmatter: {
    title: string;
    date: string;
  };
  body: string;
}
```

- `src/components/layout.tsx`


```tsx
import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {SiteNode} from 'src/types';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({title, children}: Props) => {
  const data = useStaticQuery<{site: SiteNode}>(query);
  return (
    <main>
      <title>{title || data.site.siteMetadata.title}</title>
      {children}
    </main>
  );
};

export default Layout;
```

> - `Layout` 컴포넌트: 블로그의 모든 페이지에 공통적으로 들어갈 요소들을 래핑한 컴포넌트. 지금은 `title` 태그 뿐이지만 추후 header, footer 등 정적인 요소를 추가할 것이다.

- `src/pages/blog/index.tsx`


```tsx
import React from 'react';
import {graphql, PageProps} from 'gatsby';
import Layout from 'src/components/layout';
import {MdxNode} from 'src/types';

interface DataType {
  allMdx: {
    nodes: MdxNode[];
  };
}

export const pageQuery = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        body
      }
    }
  }
`;

const BlogPage = ({data: {allMdx}}: PageProps<DataType>) => {
  return (
    <Layout>
      <h1>Posts</h1>
      <ul>
        {allMdx.nodes.map((node) => (
          <li key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <div>{node.frontmatter.date}</div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
```

> - 일반 컴포넌트와 페이지 컴포넌트에서 GraphQL 쿼리를 사용하는 방식이 다르다.
>   - 일반 컴포넌트는 `useStaticQuery` 훅에 쿼리를 넣어 데이터를 가져올 수 있다.
>   - 페이지 컴포넌트는 페이지 쿼리를 `export`하여 컴포넌트의 props로 데이터를 가져올 수 있다.

- 결과 (`localhost:8000/blog`)

![post 목록](.\post-목록.png)

날짜에 대해 내림차순으로 데이터를 가져왔으므로 최신순으로 포스트 목록이 잘 보인다!

#### 2. MDX 파일로부터 정적 페이지 생성하기

Gatsby는 기본적으로 **File System Route API**라는 기능을 제공한다. `src/pages` 안에  `{nodeType.fieldName}.tsx`와 같은 식으로 페이지 템플릿 컴포넌트를 작성하면 데이터 계층의 노드를 바탕으로 동적 페이지를 생성하고 라우팅한다.

- `nodeType`은 어떤 노드로부터 페이지를 만들지를 결정한다.
- `fieldName`은 노드의 어떤 필드를 URL에 사용할지를 결정한다.

MDX 노드는 기본적으로 `slug` 필드를 갖는데, `.mdx` 파일의 경로 + 파일이름이 `path/file-name` 꼴로 인코딩되어 있어 URL에 사용하기 적합하다. 

마크다운 문법이 잘 표시되는지 확인하기 위해 포스트 내용을 조금 수정했다. 그리고 포스트 템플릿 페이지를 만들고 포스트 목록 페이지에도 포스트 페이지에 접근할 수 있도록 링크를 추가했다.

- `posts/post1/index.mdx`


```markdown
---
title: 1번째 포스트입니다
date: 2022-01-01
---
1번째 포스트의 내용입니다.

# heading1
## heading2
### heading3

- first
- second
- third
```

- `src/pages/blog/post/{mdx.slug}.tsx`


```tsx
import React from 'react';
import {graphql, Link, PageProps} from 'gatsby';
import Layout from 'src/components/layout';
import {MdxNode} from 'src/types';
import {MDXRenderer} from 'gatsby-plugin-mdx';

interface DataType {
  mdx: MdxNode;
}

export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
      body
    }
  }
`;

const PostPage = ({data: {mdx}}: PageProps<DataType>) => {
  return (
    <Layout title={mdx.frontmatter.title}>
      <Link to='/blog'>목록으로 가기</Link>
      <h1>{mdx.frontmatter.title}</h1>
      <div>작성일: {mdx.frontmatter.date}</div>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default PostPage;
```

> - 템플릿 페이지의 페이지 쿼리는 다른 페이지 쿼리와 조금 다르다. 쿼리 변수를 설정하고 원하는 노드를 찾기 위한 조건을 설정해줘야 한다. 위와 같은 경우 $id 쿼리 변수를 받아 id 필드가 $id 변수와 동일한 노드를 찾는 쿼리이다.
>
>   쿼리 변수로 사용될 값은 페이지 컴포넌트의 `props` 중 `pageContext`의 필드 중에서 정할 수 있는데, 일반적으로 노드 id가 사용된다.
>
> - `MDXRenderer` 컴포넌트를 사용해 MDX 노드의 `body`를 HTML로 바꾸어 표시할 수 있다.

- `src/pages/blog/index.tsx`


```tsx
...
export const pageQuery = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
		...
        slug
      }
    }
  }
`;

const BlogPage = ({data: {allMdx}}: PageProps<DataType>) => {
  return (
    <Layout>
      ...
      <ul>
        {allMdx.nodes.map((node) => (
          <li key={node.id}>
            <Link to={node.slug ? `/blog/post/${node.slug}` : '#'}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            ...
          </li>
        ))}
      </ul>
    </Layout>
  );
};

...
```

- 결과 (`localhost:8000/blog/post/post1/`)


![포스트페이지](.\포스트페이지.png)

`.mdx` 파일로부터 페이지가 잘 생성되고, 또 Markdown 문법이 HTML 문법으로 잘 변환된 것을 확인할 수 있다.

여기까지가 튜토리얼 6번까지 진행하며 구현할 수 있는 내용이다.

#### 3. 태그별 목록 구현하기

[Creating Tags Pages for Blog Posts](https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/)

웬만한 내용은 공식홈페이지에 엄청 친절하게 쓰여 있다!

우선 이런 식으로 `.mdx` 더미파일에 태그들을 적당히 추가했다.

- `posts/post1/index.mdx`


```markdown
---
title: 1번째 포스트입니다
date: 2022-01-01
tags: ["tag1", "tag2"]
---

...
```

이제 쿼리를 통해 MDX 노드의 frontmatter 필드에서 tags 필드가 추가된 것을 확인할 수 있다.

![태그 확인](.\태그-확인.png)

다음으로 태그를 통해 포스트 목록을 보여주는 페이지를 만들어야 한다. File System Route API은 별다른 설정 없이 자동으로 페이지를 생성할 수 있지만, 직접 페이지를 생성해야 할 때에는 **Gatsby Node API**을 사용해야 한다. 지금처럼 노드가 아닌 데이터를 통해 페이지를 생성하는 경우가 그렇다.

Gatsby Node API를 사용하여 페이지를 생성하는 과정은 다음과 같다.

1. 템플릿 컴포넌트를 작성한다.
2. 작성한 템플릿 컴포넌트를 `gatsby-node.js`의 `createPages`에서 사용하여 페이지를 생성한다.

- `src/templates/tag.tsx`


```tsx
import React from 'react';
import {graphql, Link, PageProps} from 'gatsby';
import {MdxNode} from 'src/types';
import Layout from 'src/components/layout';

interface PageContextType {
  tag: string;
}

interface DataType {
  allMdx: {
    edges: {node: MdxNode}[];
    totalCount: number;
  };
}

export const pageQuery = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const TagPage = ({pageContext, data}: PageProps<DataType, PageContextType>) => {
  const {tag} = pageContext;
  const {edges, totalCount} = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({node}) => {
          const {slug} = node;
          const {title} = node.frontmatter;
          return (
            <li key={slug}>
              <Link to={node.slug ? `/blog/post/${node.slug}` : '#'}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to='/blog/tags'>All tags</Link>
    </Layout>
  );
};

export default TagPage;
```

- `gatsby-node.js`


```tsx
const path = require('path');
const _ = require('lodash');

exports.onPostBuild = ({reporter}) => reporter.info('Page build is done!');
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;
  const result = await graphql(`
    query {
      tagsGroup: allMdx(limit: 2000) {
        tags: group(field: frontmatter___tags) {
          value: fieldValue
          totalCount
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const tags = result.data.tagsGroup.tags;
  tags.forEach((tag) => {
    createPage({
      path: `/blog/tags/${_.kebabCase(tag.value)}/`,
      component: path.resolve('src/templates/tag.tsx'),
      context: {
        tag: tag.value,
      },
    });
  });
};
```

- `src/pages/blog/tags.tsx`

```tsx
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import {Link, graphql, PageProps} from 'gatsby';
import Layout from 'src/components/layout';

interface DataType {
  tagsGroup: {
    tags: {
      value: string;
      totalCount: number;
    }[];
  };
}

export const pageQuery = graphql`
  query {
    tagsGroup: allMdx(limit: 2000) {
      tags: group(field: frontmatter___tags) {
        value: fieldValue
        totalCount
      }
    }
  }
`;

const TagsPage = ({
  data: {
    tagsGroup: {tags},
  },
}: PageProps<DataType>) => (
  <Layout>
    <div>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag) => (
          <li key={tag.value}>
            <Link to={`/blog/tags/${kebabCase(tag.value)}/`}>
              {tag.value} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export default TagsPage;
```

> - 템플릿 컴포넌트는 앞서 작성한 템플릿 페이지 컴포넌트와 거의 유사하다. `pageContext`의 `tag` 값을 쿼리 변수로 사용하고 이 쿼리 변수를 `frontmatter`의 `tags`가 포함하는 MDX 노드들을 가져온다.
>
> - `gatsby-node.js`에서는 Graphql 쿼리를 날려 결과값을 받아오고, 이 결과값과 템플릿 컴포넌트를 이용해 페이지를 생성한다.
>
> - 추가적으로 태그 목록을 확인할 수 있는 페이지를 만들었다.
>
> - 페이지가 잘 생성되었는지 궁금할 때엔 GraphiQL에서 다음과 같은 쿼리를 날려보면 쉽게 확인할 수 있다.
>
>   ```
>   // GraphQL query
>   {
>     allSitePage {
>       nodes {
>         path
>       }
>     }
>   }
>                                               
>   // 결과 예
>   {
>     "data": {
>       "allSitePage": {
>         "nodes": [
>           {
>             "path": "/blog/tags/tag-0/"
>           },
>           {
>             "path": "/blog/tags/tag-1/"
>           },
>           ...
>         ]
>       }
>     },
>     "extensions": {}
>   }
>   ```

- 결과1 (`localhost:8000/blog/tags`)


![tags](.\tags.png)

- 결과2 (`localhost:8000/blog/tags/tag-1`)


![tag1](.\tag1.png)

태그 목록으로부터 페이지가 잘 생성된 것을 확인할 수 있다.

#### 중간 정리

어느 정도 기능이 자리잡은 만큼 코드를 한번 정리했다.

- URL을 간소화하기 위해 `/blog` 아래에 위치한 페이지들을 전부 루트 위치로 이동시켰다.

- 여러 페이지에서 사용되는 UI요소를 컴포넌트로 분리했다. (`/blog`, `/tag/{tag}`에서 사용되는 포스트 목록 등)

- 여러 곳에서 쓰이는 로직은 `src/utils.ts`로 분리했다.

- `src/components/postList/index.tsx`


```tsx
import React from 'react';
import {MdxNode} from 'src/types';
import PostItem from './PostItem';

const PostList = ({nodes}: {nodes: MdxNode[]}) => {
  return (
    <ul>
      {nodes.map((node) => (
        <PostItem key={node.id} node={node} />
      ))}
    </ul>
  );
};

export default PostList;
```

- `src/components/postList/postItem.tsx`


```tsx
import React from 'react';
import {Link} from 'gatsby';
import {MdxNode} from 'src/types';
import {getPostUrl} from 'src/utils';
import TagButton from 'src/components/tagButton';

const PostItem = ({node}: {node: MdxNode}) => {
  return (
    <div>
      <Link to={getPostUrl(node.slug)}>
        <h2>{node.frontmatter.title}</h2>
        <div>{node.frontmatter.date}</div>
      </Link>
      {node.frontmatter.tags.map((tag) => (
        <TagButton key={tag} tag={tag} />
      ))}
    </div>
  );
};

export default PostItem;
```

- `src/utils.ts`

```typescript
import _ from 'lodash';

const noUrl = '#';

export const getPostUrl = (slug?: string) => {
  return slug ? `/post/${slug}` : noUrl;
};

export const getTagUrl = (tag?: string) => {
  return tag ? `/tag/${_.kebabCase(tag)}` : noUrl;
}
```

그래서 여기까지 프로젝트 구조는 다음과 같다.

```
root
├src
│├components
││├layout
││├postList
││└tagButton
│├images
│├pages
││├post
│││└{mdx.slug}.tsx
││├404.tsx
││├blog.tsx
││├index.tsx
││└tag.tsx
│├templates
││└{tag}.tsx
│├types.ts
│└utils.ts
├gatsby-config.js
├gatsby-node.js
├...
```

#### 4. 포스트 목록 페이지네이션

**페이지네이션(pagination)**, 또는 페이징(paging)이란 많은 양의 데이터를 여러 페이지로 나누어 보여주는 과정을 말한다. 보여줄 데이터 양이 방대할 경우 데이터를 가져오거나 렌더링하는 과정이 오래 걸릴 수 있고, 보기에도 힘들어지므로 적절하게 페이지네이션 처리를 할 필요가 있다.

Gatsby 공식 문서에서 소개하는 방법([#](https://www.gatsbyjs.com/docs/adding-pagination/))은 앞서 태그 페이지를 생성한 것처럼 Gatsby Node API를 이용해 각 페이지별 정적 페이지를 생성하는 것이다. 그러나 이 방법은 페이지네이션이 필요한 페이지를 생성할 때마다 새로 `createPages()`에서 페이지 작성 코드를 추가해줘야 한다는 문제가 있다.

그래서 나는 이 방법 대신 리액트 컴포넌트와 훅을 이용해 client-side 페이지네이션을 구현하기로 했다. 처음에 모든 데이터를 가져온 후 렌더링에만 페이지네이션을 적용하는 것이다. 이러면 적은 양의 데이터만 가져올 수 있다는 이점은 없어지지만, 블로그라는 사이트 특성상 데이터가 많아봐야 수백 건일 것이므로 크게 신경 쓸 부분은 아니라고 생각했다. 그리고 여전히 렌더링의 이점은 챙길 수 있다.

페이지네이션에 필요한 요소로는 크게 두 가지를 생각했는데,

- 원본 데이터에서 특정 페이지에 표시할 데이터를 뽑아내는 기능
- 사용자가 페이지 이동을 할 수 있도록 UI를 제공하는 페이지 내비게이션

전자는 훅으로, 후자는 훅과 컴포넌트로 구현했다. 특별히 신경 쓴 점이라면 재사용성을 고려해서 어떤 종류의 데이터라도 페이지네이션이 가능하도록 만들었다.

- `src/hooks/usePagination.ts`


```typescript
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
```

> - 재사용이 용이하도록 데이터의 타입은 generic type을 사용했고 페이지당 항목 수, 처음에 표시할 페이지와 같은 값들을 옵션으로 변경할 수 있게 만들었다.

- `src/components/pageNav/index.tsx`


```tsx
import React, {useEffect, useState} from 'react';
import {range} from 'src/utils/common';
import PageButton from './pageButton';

interface Props {
  currPage: number;
  lastPage: number;
  setPage: (page: number) => void;
  maxPageNavLength?: number;
}

const PageNav = ({
  currPage,
  lastPage,
  setPage,
  maxPageNavLength = 10,
}: Props) => {
  const {pageList} = usePageNav(currPage, lastPage, maxPageNavLength);

  return (
    <div>
      <PageButton
        label='<'
        page={pageList[0] - 1}
        setPage={setPage}
        disabled={pageList[0] === 1}
      />
      {pageList.map((page) => (
        <PageButton
          page={page}
          setPage={setPage}
          selected={currPage === page}
          key={page}
        />
      ))}
      <PageButton
        label='>'
        page={pageList[pageList.length - 1] + 1}
        setPage={setPage}
        disabled={pageList[pageList.length - 1] === lastPage}
      />
    </div>
  );
};

const usePageNav = (
  currPage: number,
  lastPage: number,
  maxPageNavLength: number
) => {
  const [pageList, setPageNavList] = useState<number[]>([]);

  useEffect(() => {
    const firstPageInNav = currPage - ((currPage - 1) % maxPageNavLength);
    const lastPageInNav = Math.min(
      firstPageInNav + maxPageNavLength,
      lastPage + 1
    );
    setPageNavList(range(firstPageInNav, lastPageInNav));
  }, [currPage, lastPage]);

  return {pageList};
};

export default PageNav;
```

> - 마찬가지로 재사용성을 위해 페이지 내비게이션의 최대길이를 받을 수 있도록 만들었다. `pageList`는 현재 페이지와 마지막 페이지를 받아 표시할 페이지의 리스트를 계산한 것이다.
>
>   예를 들어 최대 페이지가 15일 때, 현재 페이지가 3이면 [1, 2, ..., 10]을, 현재 페이지가 12면 [11, 12, ..., 15]를 `return`하는 식이다.
>
> - `usePageNav` 훅은 이 컴포넌트에서만 쓰이는 지엽적인 로직이므로 별도의 파일로 분리하지는 않았다.
>
> - 페이지 내비게이션의 버튼 역할을 하는 `PageButton` 컴포넌트는 페이지가 바뀔 때마다(즉 `PageNav`의 `props`가 바뀔 때마다) 내비게이션 전체가 리렌더링되는 것을 막기 위해 `React.memo()`를 적용해서 최적화했다.

- `src/pages/blog.tsx`


```tsx
import React from 'react';
import {graphql, Link, navigate, PageProps} from 'gatsby';
import Layout from 'src/components/layout';
import {MdxNode} from 'src/types';
import PostList from 'src/components/postList';
import usePagination from 'src/hooks/usePagination';
import PageNav from 'src/components/pageNav';

...

const BlogPage = ({data: {allMdx}}: PageProps<DataType>) => {
  const {paginatedData, currPage, lastPage, setPage} = usePagination(
    allMdx.nodes,
    {itemsPerPage: 3}
  );

  return (
    <Layout>
      <Link to='tags'>tags</Link>
      <h1>Posts</h1>
      <PostList nodes={paginatedData} />
      <PageNav
        currPage={currPage}
        lastPage={lastPage}
        setPage={setPage}
        maxPageNavLength={5}
      />
    </Layout>
  );
};

export default BlogPage;
```

> - 임시로 페이지네이션이 잘 구현되었는지 확인하기 위해 페이지당 항목 수는 3으로, 페이지 내비게이션 길이는 5로 뒀고, 현재 선택중인 페이지는 글자색을 빨간색으로 표시하게 했다.

- 결과 (`localhost:8000/blog`)

![pagination](https://lh3.googleusercontent.com/pw/AM-JKLWxvGAgoVHDXLt-V6zsss-FzUmTFk52laXJcdVNAXzXGUpy7jBrg7UqkHYihbMVDqHsCsD-sH4hkG4jCOGy_yidLLR_Lhd_xP6fDn113JlcQjN4YsMi-o9aM20lQzGxZjZG3UhmNjiZ9Bszw0Dsf-hM=w480-h508-no?authuser=0)

client-side 페이지네이션이 잘 구현되었다.

## 후기

일단 블로그로서 정말 기본적인 틀은 갖췄다. 검색 기능까지 한번에 진행하고 싶었는데 생각보다 플러그인 적용에 애를 먹어서 나중에 다시 살펴봐야 될 것 같다.

현재까지 포스트 목록 표시, 포스트 페이지 생성, 태그 페이지 생성, 포스트 목록 페이지네이션 기능을 만들었고, 앞으로 추가할 예정인 기능은 우선도 순으로 다음과 같다.

- 블로그 내 포스트 검색 기능 추가
- 디자인 추가
  - 다크모드, 반응형 디자인 적용
- 댓글 기능 추가
- Google Analytics 추가

<br />

## Issue

#### 페이지 쿼리를 변경해도 반영이 되지 않는 문제

- 증상: MDX 노드들을 가져오는 부분에서 중간에 페이지 쿼리에 slug 필드를 추가했을 때 변경점이 실제 데이터 fetch에 반영되지 않았다.

- 원인: 쿼리를 이리저리 수정하거나 아예 지워도 이전 쿼리 상태로 동작하는 것을 보면 개발 모드에서 쿼리를 캐싱한 것이 문제가 된 것 같다.

- 해결: `gatsby clean` 명령어로 캐시를 전부 날려서 해결했다.


#### Gatsby Node API 사용 중 오류 발생

- 증상: 공식 홈페이지의 예제를 가져와 문법만 TypeScript 문법으로 수정하고 실행했을 때 `Cannot query field "fields" on type "Mdx".`와 같은 오류들이 발생했다.
- 원인: 예제는 MarkdownRemark 노드를 사용하는 것이었는데 이게 MDX 노드와 구조가 달라 발생한 문제였다. (MarkdownRemark 노드는 fields 필드 안에 body 등의 필드가 들어 있었다)
- 해당 쿼리를 MDX 노드에 맞게 수정해서 해결했다.

