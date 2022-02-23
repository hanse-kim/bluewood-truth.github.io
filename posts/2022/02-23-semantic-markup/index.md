---
title: "시맨틱 마크업(Semantic Markup)"
date: "2022-02-23"
tags: ["웹 표준", "HTML"]
---



## 요약

시맨틱 마크업이란 웹 페이지나 웹 어플리케이션의 정보를 효과적으로 전달하는 마크업을 의미한다.

각각의 시맨틱 태그들을 올바른 위치에, 올바른 컨텐츠와 함께 사용함으로써 시맨틱 마크업을 작성할 수 있다.

시맨틱 마크업을 작성해야 하는(시맨틱 태그를 사용해야 하는) 이유는 다음과 같다.

- 사람이 이해하기 쉽다. 페이지 구조를 쉽게 파악할 수 있으므로 가독성과 유지보수성이 향상된다.
- 기계가 이해하기 쉽다. 올바르게 제목, 구획, 목록 등을 구분하면 스크린 리더나 검색 엔진이 페이지 탐색 및 중요한 키워드를 쉽게 찾을 수 있다.

<br />

## 마크업

마크업이란 태그를 사용하여 컨텐츠를 구분하고 구조화한 문서를 말한다. 이러한 태그나 구조는 **마크업 언어(Markup Language)**에 의해 결정된다.

마크업 언어에는 현재 웹 페이지의 구조를 나타내는 표준인 **HTML**(**H**yper**T**ext **M**arkup **L**anguage), JSON 이전에 주로 데이터를 표현하기 위해 사용했던 **XML**(e**X**tensible **M**arkup **L**anguage) 등이 있다.

<br />

## 그런데 시맨틱을 곁들인

> semantic
>
> (형용사) 의미의, 의미론적인

그렇다면 시맨틱 마크업이란 뭘까?

우선 여기서 말하는 마크업은 HTML만을 가리킨다. 그래서 시맨틱 마크업은 다른 말로 시맨틱 HTML이라 불리기도 한다.

시맨틱, 즉 의미론적이라는 말은 **겉보기를 통해 그 의미를 파악할 수 있다**는 것이다. 바꿔 말하자면 자신이 내포한 의미를 잘 전달함을 뜻한다. 예를 들어 JavaScript에서, "id를 받아 엘리먼트를 리턴하는 함수"의 이름을 지을 때 `get(id)`보다 `getElementById(id)`가 더 시맨틱하다.

따라서 시맨틱 마크업은 단순히 문서의 구조를 나타내는 것 뿐만 아니라, 웹 페이지나 웹 애플리케이션에 있는 정보의 의미를 효과적으로 전달하는 마크업이라고 말할 수 있다.

시맨틱 마크업은 **시맨틱 태그(semantic tag)**를 올바르게 사용함으로써 작성할 수 있다. 필요한 위치에 적절한 태그를 사용하고, 태그 안에는 그 태그에 맞는 적절한 내용이 들어가야 한다.

<br />

## 시맨틱 태그

그렇다면 시맨틱 태그란 자신의 정보를 잘 표현하는 태그를 말할 것이다. 어떤 태그가 시맨틱 태그일까?

`<div>`나 `<span>`은 흔히 시맨틱하지 않은(non-semantic) 태그로 분류된다. 단지 컨텐츠를 블럭 단위로 구분하기 위해, 인라인 컨텐츠를 꾸미기 위해 일반적이고 광범위한 용도로 사용하는 태그이기 때문이다. 반면 `<h1>`은 "이 페이지에서 가장 상위 수준의 제목"을, `<table>`은 "행과 열로 이루어진 표"를 의미하므로 시맨틱 태그라 할 수 있다.

과거에는 이러한 시맨틱 태그가 많이 부족했다. 그래서 개발자들은 디자인 레이아웃을 적용하기 위해 `<div class="header">`와 같이 시맨틱하지 않은 태그에 `class`나 `id`를 통해 역할을 부여하거나, 심지어는 `<table>` 태그를 이용해 레이아웃을 배치하기도 했다. (현재에도 종종 이런 방식을 볼 수 있다)

그러나 HTML5가 등장하면서부터 레이아웃 영역을 의미하거나 추가적인 기능을 제공하는 시맨틱 태그들이 대거 등장했다.

- `<header>`, `<main>`, `<footer>`
- `<nav>`, `<section>`, `<article>`, `<aside>`
- `<details>`, `<summary>`
- `<figure>`, `<figurecaption>`
- ...

<br />

## 왜 시맨틱 태그를 사용해야 할까?

```html
<div class="header"></div>
<div class="main">
    <div class="article">
        <div class="heading">
            Title
        </div>
        <div class="section">
            <div class="subheading">
                Topic 1
            </div>
        </div>
        <div class="section">
            <div class="subheading">
                Topic 2
            </div>
        </div>
    </div>
</div>
<div class="footer"></div>
```

```html
<header></header>
<main>
    <article>
        <h1>Title</h1>
        <section>
            <h2>Topic 1</h2>
        </section>
        <section>
            <h2>Topic 2</h2>
        </section>
    </article>
</main>
<footer></footer>
```

### 사람이 이해하기 쉽다

시맨틱 태그를 사용하면 태그를 통해 어떤 내용이 있을지 추측할 수 있고, 페이지 구조를 한눈에 파악하기 쉽다. 의미 없는 `<div>` 태그들을 끊임 없이 탐색하는 것보다는 의미 있는 코드 블록을 찾는게 훨씬 쉽기 때문이다. 이러한 가독성의 증가는 유지보수를 할 때에도 유리하다.

또한 글 접기/열기가 가능한 `<details>` 태그, `<input>`에 자동완성 기능을 붙여주는 `<datalist>` 태그처럼 기존에 JavaScript로 구현해야 했던 기능을 제공하는 태그들도 있다. 

### 기계가 이해하기 쉽다

시각 장애인을 위해 페이지를 음성으로 읽어주는 프로그램인 스크린 리더는 `<div>`로만 구성되거나 `<table>`을 이용하여 레이아웃을 짠 페이지에서는 제 기능을 발휘하지 못한다. 어떤 내용이 중요한 내용인지 판별하기가 어렵기 때문이다. 시맨틱 태그를 사용해 제목, 구획, 목록 등을 구분하면 이를 기준으로 원활한 페이지 탐색이 가능하다.

비슷한 이치로 검색 엔진 최적화(SEO)에도 유리하다. 검색 엔진은 시맨틱 태그에 담긴 내용을 보다 중요하게 여기고, 이러한 요소는 검색 엔진의 크롤링 성능에 영향을 미친다.

<br />

## 여러 가지 시맨틱 태그들

![MDN_Semantic](.\MDN_Semantic.png)

<em class="caption">MDN 문서에 사용된 semantic tag</em>

### `<header>`, `<footer>`

- `<header>`는 페이지 혹은 특정 구획의 소개 및 탐색에 도움을 주는 컨텐츠를 담는다. 페이지의 헤더라면 로고, 내비게이션 메뉴, 검색 폼 등이 위치할 수 있고, 게시글의 헤더라면 제목, 작성일, 작성자 등의 정보가 포함될 수 있다.
- `<footer>`는 페이지 혹은 특정 구획의 푸터를 의미한다. 작성자, 저작권, 연락처, 맨 위로 이동 버튼, 관련 페이지 등 포함될 수 있다.

> `<header>`는 HTML5부터 명세에 포함되었지만 사실 최초부터 존재했던 태그 중 하나다. 처음에는 지금의 `<head>`처럼 사이트의 메타데이터를 저장하는 용도였다.

### `<main>`

- `<main>`은 페이지의 `<body>` 내의 주요 컨텐츠를 담는다. 일반적으로 한 페이지 당 `<main>`은 하나만 존재해야 한다.

### `<nav>`

- `<nav>`는 다른 페이지로 연결되는 링크, 또는 페이지 내 다른 부분으로 연결되는 링크를 모아두기 위한 태그다. 페이지의 내비게이션 메뉴나 글의 목차 등이 여기에 해당한다.
- 여러 링크를 포함하기 때문에 일반적으로 내부에 `<ul>`, `<ol>`, `<dl>` 등을 포함하여 링크의 목록으로 나타낸다.

### `<aside>`

- `<aside>`는 본문의 주요 내용과 직접적으로 연관되지 않은 컨텐츠를 담는다. 주로 사이드바나 추가적인 설명을 위한 콜아웃 박스 등에 사용된다.

### `<article>`

- `<article>`은 그 자체로 완결되는 독립된 컨텐츠를 갖는다. 게시글이나 블로그 포스트, 뉴스 기사 등이 해당된다.
- 원칙적으로 이거 하나만 떼어내서 따로 사용해도 문제가 없어야 한다.
- 주로 제목(`<h1>`~`<h6>`) 태그를 이용해 각 `<article>`을 구분한다. (물론 둘이 꼭 함께 쓰여야 하는 건 아니다)

### `<section>`

- `<section>`은 문서 내에서 논리적으로 독립된 구획을 의미한다.
- `<article>`과 마찬가지로 제목 태그를 자식으로 둠으로써 각 `<section>`을 구분한다.

- 논리적으로 독립적이지 않은 구획에 `<section>`을 사용해선 안 된다. 단순 스타일링이 목적이라면 `<div>`를 사용해야 한다.
  - 독립성의 여부는 보통 '이 구획에 별개의 소제목을 붙일 수 있는가?'로 판단한다.

- `<article>`이 한 권의 책이라면 `<section>`은 각 장을 의미한다.

### `<figure>`, `<figcaption>`

- `<figure>`는 이미지, 그래프, 코드 조각, 인용문 등의 독립된 컨텐츠를 담는다. 본문과 관련이 있지만 부록으로 이동해도 문제 없는 내용을 맡는다.
- `<figcaption>`는 `<figure>`의 컨텐츠에 대한 설명을 나타낸다. `<figure>` 태그 안에서 처음으로 등장하는 `<figcaption>`을 설명으로 사용한다. 

<br />

## 참고 자료

- [Semantic HTML - Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

- [Semantics - 용어 사전 | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Glossary/Semantics#html_시맨틱)
- [Semantic HTML5 Elements Explained (freecodecamp.org)](https://www.freecodecamp.org/news/semantic-html5-elements/)
- [HTML Standard (whatwg.org)](https://html.spec.whatwg.org/multipage/sections.html#the-section-element)
- [What On Earth Is Semantic Markup? (And Why Should You Learn To Write It) » (html.com)](https://html.com/semantic-markup/)

