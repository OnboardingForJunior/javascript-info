# Unit4 Data Types
<br>

### Chapter 7 Map and Set

- 객체
    - 키가 있는 컬렉션을 저장한다.
- 배열
    - 순서가 있는 컬렉션을 저장한다.

#### 맵

- 맵
    - 키가 있는 데이터를 저장한다.
    - 키에 대한 다양한 자료형을 허용한다. (ex) key가 객체도 가능!
        - 기본 객체는 키를 문자형으로 변환하지만 맵은 키의 타입을 변환시키지 않고 그대로 유지한다.

#### 맵의 메서드와 프로퍼티

- new Map()
    - 맵 객체 생성
- map.set(key, value)
    - key로 value 저장
- map.get(key)
    - key에 해당하는 값 반환, key가 존재하지 않을시 undefined 반환
- map.has(key)
    - key가 존재하면 true 존재하지 않으면 false. 배열의 include와 같은...
- map.deconste(key)
    - key에 해당되는 값 삭제
- map.clear()
    - 맵 객체 안의 요소들을 전부 비운다.
- map.size
    - 요소의 개수를 반환. 배열의 length와 같은...

```
const map = new Map();
const john = { name: "John" };

map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키
map.set(john, 123); // 객체형 키

console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
console.log( map.get(true) ); // 'bool1'
console.log( map.get(john) ); // 123

console.log( map.size ); // 4
```

- 체이닝
    - map.set을 호출할 때마다 맵 자신이 반환되므로 끝없이 set메소드를 체이닝 할 수 있다.

```
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
```

#### 맵의 요소에 반복 작업하기

- map.keys()
    - 각 요소의 키를 포함한 이터러블 객체를 반환
    - for..of 반복문에서 키를 대상으로 순회
- map.values()
    - 각 요소의 값을 포함한 이터러블 객체를 반환
    - for..of 반복문에서 값을 대상으로 순회
- map.entries()
    - 요소의 [키, 값]을 한 쌍(엔트리)으로 하는 이터러블 객체를 반환
    - for..of 반복문의 default 값
- 맵은 값이 삽입된 순서대로 순회를 실시한다.
- 맵은 배열처럼 내장 메서드 forEach를 지원한다.

#### Object.entries: 객체를 맵으로 바꾸기
<br>

- 각 요소(item)가 엔트리(키-값)인 배열이나 이터러블 객체를 new Map()안에 초기화 인자로 넣으면 새로운 맵이 생성됩니다.
- Object.entries(obj)
    - obj 안의 엔트리(키-값)을 배열로 하는 새로운 배열을 반환해준다.
    - 이를 new Map() 안에 초기화 인자로 넣으면 평범한 객체로 맵을 생성할 수 있습니다.

```
const obj = {
  name: "John",
  age: 30
};

const map = new Map(Object.entries(obj));

console.log( map.get('name') ); // John
```

#### Object.fromEntries: 맵을 객체로 바꾸기
<br>

- Object.fromEntries(array)
    - 각 요소가 [키, 값] 쌍인 배열(array)을 객체로 바꿔준다.
    - map.entries를 통해 배열로 바꾼후 Object.fromEntries에 넣으면 맵을 일반 객체로 바꿀 수 있다.

```
const map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

const obj = Object.fromEntries(map.entries()); // 배열로 바꾼 맵을 일반 객체로 변환 (*)

// 맵이 객체가 되었습니다!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj.orange); // 2
```

#### 셋
<br>

- new Set(iterable)
- set.add(value)
- set.delete(value)
- set.has(value)
- set.clear()
- set.size

#### 셋의 값에 반복 작업하기
<br>

- point! map set에 무슨 함수가 있는지 정리