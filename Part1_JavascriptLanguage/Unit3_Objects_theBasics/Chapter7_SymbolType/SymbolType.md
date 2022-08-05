# Unit3 Objects the Basics
<br>

### Chapter 7 Symbol Type
<br>

#### 심볼
<br>

- 자바스크립트는 객체 프로퍼티 키로 오직 문자형과 심볼형만을 허용
- '심볼(symbol)'은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용
	- 식별자: 변수나 함수의 이름을 작성할 때 사용하는 이름
- Symbol()을 통해 사용한다.
- Symbol()로부터 반환되는 모든 심볼 값은 고유하다.

```
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```
- 심볼형 값은 다른 자료형으로 자동형변환 되지않는다.
- symbol.description 프로퍼티를 이용하면 Symbol()괄호 안의 설명만 보여준다.

```
let id = Symbol("id");

alert(id); // TypeError: Cannot convert a Symbol value to a string
alert(id.toString()); // Symbol(id)가 얼럿 창에 출력됨
alert(id.description); // id
```

#### ‘숨김’ 프로퍼티
<br>

- 심볼은 유일성이 보장되므로 이름이 같더라도 우리가 만든 식별자와 제3의 스크립트에서 만든 식별자가 충돌하지 않는다.
- 리터럴에서는 대괄호를 사용해 심볼형 키값을 만들 수 있다.

```
const id = Symbol("id");

const user = { // 서드파티 코드에서 가져온 객체
  name: "John",
  id: "Gwanghyun",
  [id]: 123, // "id": 123은 안됨
};

console.log(user[id]); // 123
console.log(user["id"]); // Gwanghyun
console.log(user.id); // Gwanghyun
```

- 심볼로 접근한 값은 for…in 에서 배제됩니다

```
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

// name과 age만 출력되고, 심볼은 출력되지 않습니다.
for (let key in user) console.log(key);

// 심볼로 직접 접근하면 잘 작동합니다.
console.log( "직접 접근한 값: " + user[id] );
```

#### 전역 심볼 Symbol.for(key)
<br>

- 전역 심볼 레지스트리 안에 심볼을 만들고 접근하면, 이름이 같은 동일한 심볼을 반환해줍니다.
- Symbol.for(key)

```
// 전역 레지스트리에서 심볼을 읽습니다.
let id = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만듭니다.

// 동일한 이름을 이용해 심볼을 다시 읽습니다(좀 더 멀리 떨어진 코드에서도 가능합니다).
let idAgain = Symbol.for("id");

console.log(id === idAgain);
```

#### Symbol.keyFor
<br>

- Symbol.keyFor는 전역 심볼 레지스트리를 뒤져서 해당 심볼의 이름을 얻어냅니다.
- 전역 심볼이 아닌 인자가 넘어오면 Symbol.keyFor는 undefined를 반환

```
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, 전역 심볼
alert( Symbol.keyFor(localSymbol) ); // undefined, 전역 심볼이 아님

alert( localSymbol.description ); // name```

#### 시스템 심볼
<br>

- '시스템 심볼(system symbol)'은 자바스크립트 내부에서 사용되는 심볼
	- (ex) Symbol.hasInstance
	- (ex) Symbol.isConcatSpreadable
	- (ex) Symbol.iterator
	- (ex) Symbol.toPrimitive