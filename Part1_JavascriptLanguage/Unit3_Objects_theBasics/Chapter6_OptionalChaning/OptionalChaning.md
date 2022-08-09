# Unit3 Objects the Basics
<br>

### Chapter 6 Optional Chaning
<br>

#### 옵셔널 체이닝 문법

- obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
- obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
- obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함

#### 옵셔널 체이닝이 필요한 이유
<br>

- 참조의 주소 경로가 유효한지 확인하는데에 경우의 수가 너무 많아지기 때문에 사용하게 되었다.
- 평가 대상의 경로가 존재하지 않으면 error가 납니다.

```
const user = {}; // 주소 정보가 없는 사용자

console.log(user.address.street); // TypeError: Cannot read property 'street' of undefined
```

#### 옵셔널 체이닝의 등장
<br>

- 평가대상이 null과 undefined인 경우 평가를 멈추고 undefined를 반환합니다.
- 평가 대상의 경로가 존재하지 않아도 error가 나지 않습니다.
- [평가대상].?[평가대상]

```
const user = {}; // 주소 정보가 없는 사용자

console.log( user?.address?.street ); // undefined, 에러가 발생하지 않습니다.
```
- ?.는 존재하지 않아도 괜찮은 대상에만 사용하며, 남용하지 않도록 합시다.

#### 단락 평가
<br>

- ?.를 이용하여 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈추도록 하는 방법

```
const user = null;
let x = 0;

user?.sayHi(x++); // sayHi는 없는 메서드이기 때문에 아무 일도 일어나지 않습니다.
console.log(x); // 0, x는 증가하지 않습니다.
```

#### ?.()와 ?.[]
<br>

- 대괄호 []를 사용해 객체 프로퍼티에 접근하는 경우
- ?.[]를 사용하면 객체 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다.

```
const user1 = { firstName: "Violet" };
const user2 = null; // user2는 권한이 없는 사용자라고 가정해봅시다.

const key = "firstName";
console.log( user1?.[key] ); // Violet
console.log( user2?.[key] ); // undefined
```

- 삭제의 용도로 쓸 수도 있다.

```
delete user?.name; // user가 존재하면 user.name을 삭제합니다.
```