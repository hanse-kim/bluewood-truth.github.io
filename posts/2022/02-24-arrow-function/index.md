---
title: "화살표 함수(Arrow Function)"
date: "2022-02-24"
tags: ["JavaScript", "ES6"]
hide: true
---

## 요약

화살표 함수란 ES6부터 추가된 새로운 형태의 함수 표현식이다. 기존의 `function` 키워드를 이용한 함수 표현식에 비해 간결하고 직관적인 함수 정의가 가능하다.

화살표 함수의 특징은 `this`를 갖지 않는다는 점이다. 기존 함수는 자신이 호출된 위치에 따라 `this`가 가리키는 대상이 달라진다. 반면 화살표 함수는 어디에서 호출되든 항상 자신이 작성된 위치, 즉 렉시컬 컨텍스트의 `this`를 가리킨다.

따라서 객체의 생성자, 메서드로 사용할 수 없고 `.bind()`나 `.call()` 등으로 `this`를 지정해도 무시한다.

<br />

## 화살표 함수

```javascript
// 전통적인 함수 표현식
const add = function(a, b) {
    return a + b;
};

// 화살표 함수
const add = (a, b) => a + b;
```

**화살표 함수(arrow function)**란 ES6에서 추가된 새로운 함수 표현식(expression)이다. `function` 키워드를 통해 함수를 정의하는 것보다 짧고 직관적으로 함수를 정의할 수 있게 해준다.

극단적인 경우로 인자가 하나이고 표현식이 한 줄인 함수의 경우 인자의 괄호를 생략하여 `인자 => 표현식`으로 함수를 나타낼 수도 있다. 중괄호를 생략한 표현식은 `{return 표현식}`과 동일하다.

```javascript
const getLength = str => str.length;

// 위와 동일한 함수
function getLength(str) {
  return str.length;
}
```

단 JavaScript에서는 코드 블록을 구분할 때, 객체 리터럴을 사용할 때 모두 중괄호(`{}`)를 사용하므로, 화살표 함수에서 객체 리터럴을 리턴할 때 중괄호와 `return`을 생략하면 표현이 모호해진다.

```javascript
const objList = someList.map(() => {}); // Error, {}가 객체인지 코드블럭인지 모호함
```

따라서 화살표 함수에서 객체 리터럴을 리턴할 때에는 반드시 그룹 연산자로 감싸줘야 한다.

```javascript
const objList = someList.map(() => ({})); // OK
```

<br />

## 화살표 함수의 특징

### `this`를 바인딩하지 않음

화살표 함수는 자신의 `this`를 갖지 않는다. 자신이 작성된 렉시컬 컨텍스트의 `this`를 가리킨다. 이를 통해 중첩된 함수에서의 `this` 스코프 문제를 단순화할 수 있다.

```javascript
function Counter() {
    this.num = 0; // 이 this는 생성자의 인스턴스를 가리킨다
    
    setInterval(function() {
        this.num += 1; // 무명함수 내에서 새로이 바인딩된 this
        console.log(this.num); // 따라서 this는 전역객체를 가리킨다
        // 그리고 this.num은 정의되지 않았으므로
        // 매번 undefined + 1의 결과인 NaN을 출력한다
    }, 1000);
}

new Counter();
// NaN
// NaN
// NaN
// ...
```

```javascript
function Counter() {
    this.num = 0; // 이 this는 생성자의 인스턴스를 가리킨다
    
    setInterval(() => {
        this.num += 1; // 화살표 함수는 this를 갖지 않으므로
        console.log(this.num); // 바깥의 가장 가까운 this를 가리킨다
    }, 1000);
}

new Counter();
// 1
// 2
// 3
// ...
```

`bind()`, `call()`, `apply()` 등으로 `this`를 지정해주는 것 역시 무시하며, 객체의 메서드로 사용될 경우에도 `this`는 렉시컬 컨텍스트의 `this`를 가리킨다.

```javascript
const obj = {
	a: 5,
	printA: () => console.log(this.a), // this는 obj가 아닌 전역 스코프의 this, 즉 전역 객체를 가리킨다
};

obj.printA(); // undefined
a = 10;
obj.printA(); // 10
```

또한 화살표 함수는 생성자로 사용할 수 없으며 `new` 키워드와 함께 사용하면 오류가 발생한다.

```javascript
const Animal = () => {
    this.name = 'dog';
    this.sound = 'bark';
};

new Animal(); // Uncaught TypeError: Animal is not a constructor
```

### 간결함

작성해야 할 코드의 양이 대폭 줄어들기 때문에 보다 생산성이 높고, 형태(`(인수) => 반환값`)가 "인수를 받아 값을 반환한다"라는 함수의 본질에 가까워 직관적이다. 특히 함수를 리턴하는 고차 함수에서 더욱 그렇다.

```javascript
const createAdd = (num) => (operand) => operand + num;
const add2 = createAdd(2);
console.log(add2(6)); // 8
```

```javascript
// 위 add 함수를 기존의 함수표현식으로 고치면 아래와 같다
const createAdd = function(num) {
    return function(operand) {
        return operand + num;
    }
}
```

화살표 함수는 고차 함수가 필수적으로 사용되며 this 바인딩이 필요 없는 함수형 프로그래밍에서 유용하게 쓰일 수 있다.

<br />

## 참고자료

- [화살표 함수 - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ES6 In Depth: Arrow functions - Mozilla Hacks - the Web developer blog](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

