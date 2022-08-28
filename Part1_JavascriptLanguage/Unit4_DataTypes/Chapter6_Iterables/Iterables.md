# Unit4 Data Types
<br>

### Chapter 6 Iterables
<br>

- 반복가능한(iterable)
	- (ex) 배열, 문자열
- 반복가능한(iterable) 객체는 배열을 일반화한 객체입니다.
	- 보통 객체에는 for..of를 안 쓰고 배열에 쓴다. 연산이 많아지기 때문에!
	- 이터러블 속성은 객체에 보다 쉽게 for..of 반복문을 적용할 수 있다는 이점이 있다.

#### 이벤트 ** 참고 내용

1) 버블링 (default)
	- 부모 요소로 전파...
	- 수면위로 거품이 일듯이
2) 캡쳐링
	- 하위 자식으로 전파...

#### Symbol.iterator
<br>

- Symbol.iterator(특수 내장 심볼) 메서드

- Symbol.iterator 메서드가 객체를 반복 가능하게 만들어 주는 과정
1. 반복 대상 객체를 선언해준다.
2. 반복대상[Symbol.iterator] = ... 으로 이터레이터 객체를 생성해준다.
3. 이터레이터안의 메서드는 반복에 사용될 값을 생성해준다.
4. Symbol.iterator은 이터레이터(반복하고자 하는) 객체를 반환한다.
5. for..of 최초 호출시, Symbol.iterator가 호출되어 for문이 반복될 때 마다 이터레이터안의 메서드가 호출된다.
6. for..of을 사용할 수 있는 이터러블한 객체 완성!

- 이터러블 객체의 핵심은 관심사의 분리
	- (ex) 이터레이터 객체와 반복 대상인 객체를 분리
	- 이터레이터 객체와 반복 대상 객체를 합쳐서 원 객체 자체를 반복가능한 객체로 만들기도 한다.

#### 문자열은 이터러블입니다
<br>

- for..of는 문자열의 각 글자를 순회합니다.
```
for (const char of "test") {
  // 글자 하나당 한 번 실행됩니다(4회 호출).
  console.log( char ); // t, e, s, t가 차례대로 출력됨
}
```

#### 이터레이터

- Symbol 종류!
	- 객체 프로퍼티 키로 허용되는 타입이다. (자바스크립트에선 문자형, 심볼형만 허용한다.)
- Symbol.iterator
	- 이 키값이 있다면 이 객체는 순회할 수 있는 객체다.
	- iterable한 객체다.
	- forEach, for..of는 배열에 쓰는 반복메서드인 이터레이터를 가져온다.
- Symbol.toPrimitive
	- 형 변환시 hint를 받았던...!
- Symbol.iterator의 구조
	- Symbol.iterator 함수를 호출시 next라는 key값의 function을 반환해준다.. ** 꼭 그래야함 왜냐면 규칙이니까 **
	- done과 value를 반환한다.

#### 이터레이터를 명시적으로 호출하기
<br>

- 이터레이터를 명시적으로 호출하기
	- 문자열 이터레이터를 만들고, 값을 ‘수동으로’ 가져온다.
	- for..of보다 반복과정을 더 잘 통제할 수 있다.
	- 비동기적으로 반복과정을 진행할 수 있다.

```
const str = "Hello";

// for..of를 사용한 것과 동일한 작업을 합니다.
// for (const char of str) console.log(char);

const iterator = str[Symbol.iterator]();

while (true) {
  const result = iterator.next(); // next() 메서드는 이터러블의 각 요소를 순회하는 포인터 역활을 한다. *** 자세한 설명 필요 ***
  if (result.done) break;
  console.log(result.value); // 글자가 하나씩 출력됩니다.
}
```

#### 이터러블과 유사 배열
<br>

- 이터러블(iterable)
	- 메서드 Symbol.iterator가 구현된 객체
- 유사 배열(array-like)
	- 인덱스와 length 프로퍼티가 있어서 배열처럼 보이는 객체
- 이터러블 객체 이면서 유사배열 객체인 것
	- for..of 사용 가능, 숫자 인텍스와 length 프로퍼티가 존재한다.
	- (ex) 문자열

- 유사배열이 모두 이터러블은 아니다.
```
const arrayLike = { // 인덱스와 length프로퍼티가 있음 => 유사 배열
  0: "Hello",
  1: "World",
  length: 2
};

// Symbol.iterator가 없으므로 에러 발생
for (const item of arrayLike) {}
```

- 이터러블과 유사배열의 공통점
	- 배열 메서드(ex. push, pop) 을 지원하지 않음

#### Array.from
<br>

- 범용 메서드 Array.from는 이터러블이나 유사 배열을 받아 온전한 배열을 만들어준다.
- Array.from([유사배열이나 이터러블 객체])
```
const arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

const arr = Array.from(arrayLike); // (*) arr = ["Hello", "World"];
console.log(arr.pop()); // World (메서드가 제대로 동작합니다.)
// * pop() 배열 끝 요소를 제거하고, 제거한 요소를 반환합니다.
```

- Array.from(obj, [매핑함수 이름], thisArg)
	- 새로운 배열에 obj의 요소를 추가하기 전에 각 요소를 대상으로 매핑함수을 적용할 수 있다.
	- thisArg는 각 요소의 this를 지정할 수 있도록 한다.

```
const range = {
  0: 2,
  1: 4,
  length: 2
};

// 각 숫자를 제곱
const arr = Array.from(range, num => num * num);

console.log(arr); // 4, 16
```