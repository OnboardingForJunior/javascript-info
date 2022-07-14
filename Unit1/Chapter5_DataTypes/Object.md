# Chapter5 Data Types
<br>

### Object
<br>
- 원시형: 숫자, 문자열, 불리언, null, undefined
- 객체형: 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장
- 객체는 중괄호{}를 이용해 생성한다.
- 중괄호 안에는 '키(key): 값(value)'로 구성된 프로퍼티(property) 를 여러개 생성한다.
	- 키: 문자형
	- 값: 모든 자료형
- 빈 객체를 빈 서랍장이라고 보면, 서랍장 안 파일은 프로퍼티이고 파일 각각에 붙어있는 이름표는 객체의 키라고 볼 수 있다.
- 객체 리터럴(object literal): 중괄호{}를 이용해 객체를 선언하는 것

#### 리터럴과 프로퍼티

- 생성한 property는 쉼표(,)로 구분해준다.
- "likes birds": true, 띄어쓰기 된 키값은 따옴표로 묶어준다. (안하면 에러)
- 객체 안의 property는 수정 가능하다. (객체가 const로 선언되어도!)
- 점 표기법: <객체이름.key이름> 으로 값에 접근 합니다.
	- 띄어쓰기 된 키 값은 점 표기법으로 값을 읽을 수 없습니다.
	- (ex) user.likes birds // error!

#### 대괄호 표기법

- 대괄호 표기법: <객체이름["키 이름"]>
	- 띄어쓰기 된 키 값을 읽게 해줍니다.
	- (ex) user["likes birds"] // correct!
	- 객체 삭제: delete <객체이름["키 이름"]>;
	- 객체의 불변성을 해치므로 clean code상 좋진 않습니다.
- 변수 key는 코드가 실행되면서 사용자 입력값 변경 등에 따라 값이 변경될 수 있습니다. 
- 계산된 프로퍼티: 대괄호로 둘러싸여 있는 프로퍼티 키
	- (ex) [fruit]: 5
	- let fruit = prompt();를 통해 사용자가 직접 할당 가능합니다.

#### 단축 프로퍼티

- 프로퍼티 키와 프로퍼티 값이 같을 경우 생략해서 쓰는 문법입니다.
- <name: name,>이라는 프로퍼티를 할당시 <name,>만 사용해도 그 의미를 읽습니다.
	- (ex) age: age, // age,

#### 프로퍼티 이름

- property 이름에는 제약이 없습니다.
	- 모든 문자형이 가능합니다.
	- 문자형에 속하지 않은 값은 문자열로 자동 형 변환됩니다.
- __proto__ 란?
	- 상속을 연결받습니다.
	- 스코프 체인으로 연결되어 있는 구조입니다.
	- Prototype이라는 숨김 프로퍼티를 의미합니다.
	- 숨김 프로퍼티 값은 null이지만, 다른 객체에 대한 참조가 되어 값을 상속해줍니다.
	- (ex) fruit.__proto__ = meat; // fruit는 meat를 상속한다.
	- fruit.beef로 상속된 meat의 프로퍼티에 접근 가능합니다.
	
#### in 연산자

- 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다
	- (ex) let user = { name: "John", age: 30 };
	- user.hometown // undefined
- in 연산자: 프로퍼티의 존재 여부를 true false로 알려준다.
	- (ex) let user = { name: "John", age: 30 };
	- "age" in user // true
	- "hometown" in user // false
	
#### ‘for…in’ 반복문

- for in 반복문은 객체의 모든 키를 순회하게 해줍니다.
	- for(<key> in <object>) {<본문내용>}
- 정수 프로퍼티는 자동으로 정렬됩니다.

```
let codes = {
	"49": "독일",
	"41": "스위스",
	"1": "미국"
};

for (let key in codes) {
	console.log(key); // 1, 41, 49
}
```

- 정수로 인식받지 않게 하는 방법

```
let codes = {
  "+49": "독일",
  "+41": "스위스",
  "+1": "미국"
};

for (let key in codes) {
	console.log(key); // 49, 41, 1
}
```