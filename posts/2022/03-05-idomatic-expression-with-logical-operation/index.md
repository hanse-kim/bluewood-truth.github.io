---
title: "논리 연산자를 이용한 간단한 조건부 표현식"
date: "2022-03-05"
tags: ["TIL", "JavaScript"]
---

## 논리 연산자

논리 연산자란 조건문에서 흔히 사용하는 `&&`(AND), `||`(OR), `!`(NOT) 등의 연산자를 말한다.

- `A && B`: A가 참이면 B를, 거짓이면 A를 리턴한다.
- `A || B`: A가 참이면 A를, 거짓이면 B를 리턴한다.

- `!A`: A가 참이면 `false`를, 거짓이면 `true`를 리턴한다.

여기서 말하는 참, 거짓은 `Boolean` 타입으로 형변환을 할 때 `true`로 변환될 수 있는가 아닌가를 말한다. JavaScript에선 다음의 경우는 모두 `false`로 변환되고, 그 이외의 값은 `true`로 변환된다.

- `undefined`, `null`, `NaN`
- `0`, `-0`, `0n`
- 빈 문자열 (`""`, `''`, ` `` ` 등)

빈 배열(`[]`)이나 빈 객체(`{}`)는 거짓이 아님을 주의하자.

<br />

## 조건부 표현식

함수를 정의할 때 이런 식으로 간단한 예외 처리를 할 수 있다.

```javascript
function (someObject, value) {
    // value가 유효한 값이 아닐 때 someObject.value로 대체한다
    if (!value) {
        value = someObject.value;
    }
    ...
}
```

이때 논리 연산자를 활용하면 보다 간결하게 작성할 수 있다.

```javascript
function (someObject, value) {
    // value가 유효한 값이 아닐 때 someObject.value로 대체한다
    value = value || someObject.value;
    ...
}
```

비슷하게 리액트의 JSX 표현식에서도 다음과 같이 활용할 수 있다.

```jsx
const Profile = ({name, age}) => {
  return (
    <div class="profile">
      <div class="name">{name}</div>
      <!--age가 유효한 값일 때만 UI상에 표시한다-->
      {age && <div class="age">{age}</div>}
    </div>
  );
};
```

또한 어떤 값을 강제로 `Boolean` 값으로 변환하고 싶을 때는 `!`를 두 번 사용하면 된다. 첫번째 `!`에서 해당 값에 반대되는 `Boolean` 값을 받고, 거기에 한 번 더 `!`를 사용해 원래의 `Boolean` 값을 받는 것이다. 값의 유효성 검사를 할 때 유용하게 사용할 수 있다.

```javascript
const isValidProfile = (profile) => {
  // profile, profile.name, profile.age 모두 유효한 값일 때 true, 아니면 false를 리턴한다
  return !!(
    profile &&
    profile.name &&
    typeof profile.name === 'string' &&
    profile.age &&
    typeof profile.age === 'number'
  );
};
```

위 예에서 만약 `!!`가 없다면 `Boolean`이 아닌 값(`undefined`, `null` 등)을 리턴할 가능성이 있다.

<br />

## 참고 자료

- [Logical OR (||) - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Logical NOT (!) - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

