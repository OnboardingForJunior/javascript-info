# Unit3 Objects the Basics
<br>

### Chapter 2 Reference and Copying
<br>

#### 참조에 의한 객체 복사
<br>

- 할당 연산자를 통해 변수에 객체를 할당하게 되면, 객체의 참조값이 복사됩니다.
	- 객체의 주소를 통해 하나의 객체를 나눠쓰므로 객체가 복사되지는 않는다.
- 참조에 의한 비교
	- 객체 비교시, '=='와 '==='는 동일하게 동작한다.
	- 두 객체가 동일한 객체인 경우에 참을 반환
	- 대소 비교나 원시값과의 비교에선 객체가 원시형으로 변환

#### 객체 복사, 병합과 Object.assign
<br>

- 참조가 아닌 온전한 객체 복사를 위해서는 새로운 빈 객체에 복사하려는 객체 프로퍼티 전부를 복사하여 추가한다.
```
const user = { name: "John", }

// 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
// 1. for ... in 반복문을 사용한다.
const clone = {}; // 새로운 빈 객체

for (const key in user) {
  clone[key] = user[key];
}

// 2. Object.assign를 사용한다.
const clone = {}; // 새로운 빈 객체

Object.assign(user, clone);

// 3. 선언과 함께 객체 복사하기
const clone = Object.assign({}, user);

// 복사한 객체의 이름을 바꾼다.
clone.name = "JoSeungWoo";

// 복사 완료
// clone의 값을 변경해도 user는 변경되지 않습니다.
console.log(user.name); // John
console.log(clone.name); // JoSeungWoo
```

#### 중첩 객체 복사
<br>

- 프로퍼티 안에 객체가 있는 경우
- 프로퍼티 타입이 object인지 비교해보고 프로퍼티가 object일때 key값 안에 새로운 객체를 만들어 복사할 수 있다.

```
const user = {
  name: "John",
  filmography: {
    movie: "horror",
  }
};

const clone = {}; // 새로운 빈 객체

for (const key in user) {
	// 프로퍼티 타입이 object인지 비교
	if(typeof user[key] === "object"){ // 프로퍼티가 object일때
		// key값 안에 새로운 객체를 만들어 복사한다.
		clone[key] = {};
		Object.assign(clone[key], user[key]);
	}
	else { // 프로퍼티가 원시값일때
		clone[key] = user[key];
	}
}

clone.filmography.movie = "marathon";

// 복사 완료
// clone의 값을 변경해도 user는 변경되지 않습니다.
console.log(user.filmography.movie); // horror
console.log(clone.filmography.movie); // marathon
```