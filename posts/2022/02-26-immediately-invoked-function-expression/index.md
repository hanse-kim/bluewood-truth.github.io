---
title: "즉시 실행 함수(IIFE)"
date: "2022-02-26"
tags: ["JavaScript"]
---

## 요약

IIFE란 정의되자마자 즉시 실행되는 JavaScript 함수를 말한다. 함수 표현식을 감싸는 큰 괄호(그룹 연산자)와, 이 함수를 실행시키는 괄호(호출 연산자)로 구성되어 있다.
(예: `(function() {...})();`)

IIFE내의 변수는 밖에서 접근이 불가능하기 때문에, 글로벌 스코프를 오염시키지 않고 웹 페이지를 초기화할 수 있어 유용하다. 또 클로저와 함께 활용하면 private한 값을 만들 수도 있다.

<br />

## 즉시 실행 함수 표현식

**즉시 실행 함수 표현식(IIFE, Immediately Invoked Function Expression)**이란 정의되자마자 즉시 실행되는 JavaScript 함수를 말한다. 다른 말로는 자가 실행 익명 함수(Self-Executing Anonymous Function)라고도 한다.

```javascript
(function() {
    console.log('hello, world!');
})();
```

<br />

## IIFE를 사용하는 이유

### 전역 스코프 오염을 방지

대표적으로 페이지를 초기화하기 위한 코드는 여러 번 사용할 필요가 없을 뿐더러, 전역 스코프에 함수나 변수를 추가한다면 예기치 않은 버그를 초래할 가능성이 있다. 이러한 경우에 IIFE를 사용하면 전역 스코프를 오염시키지 않고 원하는 기능을 실행할 수 있다.

```javascript
// appElement, container 등이 전역 스코프에 추가되어 버그를 일으킬 수 있다
const appElement = () = React.createElement(App);
const container = document.getElementById('App');
ReactDOM.render(appElement, container);
```

```javascript
// IIFE를 사용하면 전역 스코프에 변수가 남지 않는다
(function() {
    const appElement = () = React.createElement(App);
    const container = document.getElementById('App');
    ReactDOM.render(appElement, container);
})();
```

### IIFE 내부로의 접근을 막음

표현식 내부의 변수는 외부에서 접근할 수 없다.

```javascript
(function() {
	const fruit = 'apple';
})();

console.log(fruit); // Error: fruit is not defined
```

이를 이용해 IIFE와 클로저를 활용해서 private한 값을 갖는 함수를 만들 수도 있다. 예를 들어 auto-increasement id를 구현할 때 다음과 같이 구현할 수 있는데,

```javascript
let count = 0;
const autoIncreasementId = function() {
    count += 1;
	return `id_${count}`;
};

console.log(autoIncreasementId()); // id_1
console.log(autoIncreasementId()); // id_2
console.log(autoIncreasementId()); // id_3
```

이러면 `count` 변수가 전역 스코프에 노출되고 또 변경 가능하기 때문에 다른 함수에서 변경하거나 접근하면 버그의 원인이 될 수 있다. 이를 IIFE로 한번 래핑하여 다음과 같이 사용함으로써 `count`를 private한 값으로 만들 수 있고, 보다 안전하게 사용할 수 있다.

```javascript
const autoIncreasementId = (function () {
  let count = 0;
  return function () {
    count += 1;
    return `id_${count}`;
  }
})();

console.log(autoIncreasementId()); // id_1
console.log(autoIncreasementId()); // id_2
console.log(autoIncreasementId()); // id_3
```

### 전역스코프의 변수 사용을 래핑

두 라이브러리에서 동일한 이름의 전역 변수를 사용하는 경우가 발생할 수 있다. 이럴 때 코드를 IIFE로 래핑해서 해당 전역변수를 넘겨주는 방식을 이용해 문제를 해결할 수 있다.

예를 들어 jQuery에서는 전역 변수 `jQuery`의 축약으로 `$`를 사용한다. 기존에 이 `$`를 사용한 코드가 있을 때, 새로 추가한 다른 라이브러리에서 `$`라는 전역변수를 사용한다면 이런 식으로 충돌을 회피할 수 있다.

```javascript
// 다른 라이브러리
window.$ = function someFunction() { ... }

(function ($) {
    // jQuery를 사용하는 코드
    ...
})(jQuery);
```

래핑한 함수의 매개변수로 `$`를 정의했고 즉시 실행할 때 `jQuery`를 인수로 넘겨줬다. 그러면 `$`는 함수 스코프의 변수가 되어 전역 스코프의 `$`와는 상관 없이 `jQuery`를 `$`로서 사용할 수 있게 된다.

<br />

## 참고 자료

- [IIFE - 용어 사전 | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Glossary/IIFE)

- [12 Simple (Yet Powerful) JavaScript Tips – JavaScript Is Sexy](http://javascriptissexy.com/12-simple-yet-powerful-javascript-tips/)

- [Use Cases for JavaScript's IIFEs — Marius Schulz](https://mariusschulz.com/blog/use-cases-for-javascripts-iifes)
