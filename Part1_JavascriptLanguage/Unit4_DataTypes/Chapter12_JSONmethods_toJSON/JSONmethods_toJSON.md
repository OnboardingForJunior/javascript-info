# Unit4 Data Types

- 컴퓨터간에 통신시, 객체 자체를 네트워크로 보낼 순 없다.
    - 응답값은 구조가 없기 때문에
    - 따라서, 직렬화하여 통신한다.
    - 응답받을 때, 문자열을 파싱해서 응답받음.
    - (ex) localStorage
- JSON(Javascript Object Notation)
    - 데이터 교환을 목적으로 한다.
    - 언어에 종속되지 않는다.

### Chapter 12 JSON과 메서드

- 컴퓨터간에 통신 시, 응답값은 구조가 없어서 객체같은 경우 문자열로 파싱해서 응답받는다.
- JSON은 이러한 데이터 교환을 목적으로 하는데, 자바스크립트에서 여러가지 관련 메서드를 제공한다.

#### JSON.stringify

- JSON.stringify
    - 객체를 JSON으로 바꿔준다.
        - 객체의 심볼형 프로퍼티에 따라 바뀐다.
    - JSON.stringfy로 변경된 문자열은 인코딩된/직렬화 처리된/문자열로 변환된/결집된 객체라고 부른다.
    - 문자열로 변환된 후 네트워크를 통해 전송하거나 저장소에 저장할 수 있다.
    - 순환 참조가 있는 객체는 JSON.stringify가 안 먹힌다.
        - Error: Converting circular structure to JSON
- 사용할 수 있는 자료형
    - 객체
    - 배열
    - 원시형(문자형/숫자형/불린형/null)
- 호출이 안되는 자료형(빈 객체만 반환됨.)
    - 함수 프로퍼티(메서드)
    - 심볼형 프로퍼티(키가 심볼)
        - (ex) [Symbol("id")]: 123,
    - value가 undefined인 프로퍼티
        - (ex) something: undefined,

```
const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

const json = JSON.stringify(student);

console.log(typeof json); // 문자열 string

console.log(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John", // JSON에선 작은따옴표나 백틱을 사용할 수 없다.
  "age": 30, // 객체 프로퍼티 이름은 큰따옴표로 감싸야 한다.
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

#### replacer로 원하는 프로퍼티만 직렬화하기

- JSON.stringify 문법

```
let json = JSON.stringify(value[, replacer, space])
// value: 인코딩 하려는 값
// replacer: JSON으로 인코딩 하길 원하는 프로퍼티가 담긴 배열. 또는 매핑 함수 function(key, value)
// space: 서식 변경 목적으로 사용할 공백 문자 수
```

- 순환참조의 경우 두번째 인수인 replacer를 쓴다.

```
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room
};

room.occupiedBy = meetup;

console.log( JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
```

#### space로 가독성 높이기

- JSON.stringify(value, replacer, space)의 세 번째 인수 사용하기
    - 들여쓰기 기능이 있다. 숫자를 많이 쓰면 더 많은 공간으로 들여써진다.
```
let user = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user, null, 2));
/* 공백 문자 두 개를 사용하여 들여쓰기함:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/
```

#### 커스텀 "toJSON"

- toString처럼 toJSON은 내장 메서드로 객체를 JSON으로 바꾸어 주는 메서드다.
- 객체를 감지하여 JSON.stringify는 toJSON을 자동으로 호출헤준다.
- 중첩객체를 구현할 수 있도록 커스텀 메서드로 toJSON을 추가할 수 있다.
```
let room = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

let meetup = {
  title: "Conference",
  room
};

console.log( JSON.stringify(room) ); // 23

console.log( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
```

#### JSON.parse

- 문법
```
let value = JSON.parse(str, [reviver]);
// str: JSON 형식의 문자열
// reviver: 모든 엔트리 쌍을 대상으로 호출되는 function(key,value) 형태의 함수로 값을 변경시킬 수 있다.
```

- 문자열로 반환된 배열이나 객체를 원래의 형태로 돌려준다.
```
// 문자열로 변환된 배열
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

console.log( numbers[1] ); // 1
```
- 직접 JSON을 만들때 저지르는 실수
```
let json = `{
// 실수 1: 프로퍼티 이름을 큰따옴표로 감싸지 않았습니다.
  name: "John",
// 실수 2: 프로퍼티 값은 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
  "surname": 'Smith',
// 실수 3: 프로퍼티 키는 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
  'isAdmin': false,
// 실수 4: "new"를 사용할 수 없습니다. 순수한 값(bare value)만 사용할 수 있습니다.
  "birthday": new Date(2000, 2, 3),
// 이 프로퍼티는 괜찮습니다.
  "friends": [0,1,2,3]
}`;
```


#### reviver 사용하기

- reviver은 데이터 전환시 세밀한 설정을 할 수 있는 함수다.
- 모든 값은 “그대로”, 하지만 date만큼은 Date 객체를 반환하도록 reviver 함수를 구현하기
```
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log( meetup.date.getDate() ); // 30
```