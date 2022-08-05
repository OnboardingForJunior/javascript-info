# Unit3 Objects the Basics
<br>

### Chapter 8 Primitive Conversion
<br>

#### ToPrimitive
<br>

- 객체의 타입 구분 기준인 "hint"
- "string": alert 함수같이 문자열을 기대하는 연산을 수행할 때는(객체-문자형 변환), hint가 string이 됩니다.
- "number": 수학 연산을 적용하려 할 때(객체-숫자형 변환), hint는 number가 됩니다.
- "default": 연산자가 기대하는 자료형이 ‘확실치 않을 때’ hint는 default가 됩니다.
<br>
※ "boolean" hint는 존재하지 않고 모든 객체는 true로 평가된다.

#### Symbol.toPrimitive
<br>

- Symbol.toPrimitive: 목표로 하는 자료형(hint)을 명명하는 데 사용되는 내장 심볼이다.

```
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
							   // true일 경우 반환			// false일 경우 반환
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// test:
console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
```

// Q. Symbol.toPrimitive의 파라미터값은 어디에서 받아오나요?

#### toString과 valueOf
<br>

- toString은 문자열 "[object Object]"을 반환합니다.
- valueOf는 객체 자신을 반환합니다.

```
let user = {
  name: "John",
  money: 1000,

  // hint가 "string"인 경우
  toString() {
    return `{name: "${this.name}"}`;
  },

  // hint가 "number"나 "default"인 경우
  valueOf() {
    return this.money;
  }
};

console.log(user); // toString -> {name: "John"}
console.log(+user); // valueOf -> 1000
console.log(user + 500); // valueOf -> 1500
```

- 객체에 Symbol.toPrimitive와 valueOf가 없으면, toString이 모든 형 변환을 처리한다.

#### 반환 타입
<br>

- 무조건 hint대로 반환되지는 않지만, 적어도 객체가 아닌 원시값을 반환해 준다.

#### 추가 형 변환

<br>
- 객체가 피연산자인 경우
	- 객체는 원시형으로 변화됩니다. 변환 규칙은 위에서 설명했습니다.
	- 변환 후 원시값이 원하는 형이 아닌 경우엔 또다시 형 변환이 일어납니다.
- 이항 덧셈 연산은 문자열을 연결한다.

#### 객체-원시형 변환 알고리즘
<br>
1. 객체에 obj[Symbol.toPrimitive](hint)메서드가 있는지 찾고, 있다면 호출합니다.
2. 1에 해당하지 않고 hint가 "string"이라면,
	- obj.toString()이나 obj.valueOf()를 호출합니다.
3. 1과 2에 해당하지 않고, hint가 "number"나 "default"라면
	- obj.valueOf()나 obj.toString()을 호출합니다.