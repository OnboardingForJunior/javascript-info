# Unit4 Data Types
<br>

### Chapter 8 위크맵과 워크셋

- 자바스크립트 엔진은 가비지 컬렉터로 도달 가능성이 없는 값을 메모리에서 삭제한다.
    - 참조를 null로 덮어쓰면 객체는 도달 가능성이 없는 값으로 취급된다. 배열, 맵에서는 예외의 경우이다.
- 배열
    - 배열의 요소가 객체일 때 가비기 컬렉터의 대상이 되지 않는다.
```
const john = { name: "John" };
const array = [ john ];
john = null;

console.log(JSON.stringify(array[0])); // {"name":"John"}
```
- 맵
    - 객체가 키로 쓰일 시, 맵이 메모리에 있는 한 가비지 컬렉터의 대상이 되지 않는다.
```
const john = { name: "John" };
const map = new Map();
map.set(john, "...");

john = null;

for(let obj of map.keys()){
  console.log(JSON.stringify(obj)); // {"name":"John"}
}

console.log(map.size); // 1
```

#### 위크맵

- 위크맵(WeakMap)
    - 키로 쓰인 객체가 가비지 컬렉션의 대상이 된다.
    - 키가 반드시 객체여야 하는 점이 맵과는 다르다.
    - 원시값은 위크맵의 키가 될 수 없다.
```
const weakMap = new WeakMap(); // 위크맵 선언
const obj = {};

weakMap.set(obj, "ok"); // 객체가 키이고 "ok"가 값인 엔트리 부여
weakMap.set("test", "Whoops"); // 문자열 Error: Invalid value used as weak map key
```
- 위크맵 객체 키 비우기
    - Q. 작동할 때도 있고 아닐 때도 있는데 왜일까요?
```
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 참조를 덮어씀

// john을 나타내는 객체는 이제 메모리에서 지워집니다!
```
#### 유스 케이스: 추가 데이터
<br>

#### 유스 케이스: 캐싱
<br>

#### 워크셋
<br>
