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

    - 위크맵은 객체인 키를 비울 수 있다.

    ```
    let john = { name: "John" };

    let weakMap = new WeakMap();
    weakMap.set(john, "...");

    john = null;

    console.log(weakMap) // 요소가 없는 WeakMap 객체가 출력된다.
    ```

    - 위크맵은 반복작업과 keys(), values(), entries() 메서드를 지원하지 않는다.
        - 전체 값을 얻어내는게 불가능하다.

- 위크맵 메서드
    - weakMap.get(key)
    - weakMap.set(key, value)
    - weakMap.delete(key)
    - weakMap.has(key)

- 위크맵이 지원하는 메서드 수가 적은 이유
    1. 위크맵은 객체인 키 만을 요소로 쓴다.
    2. 객체는 모든 참조를 잃었을때, 그 즉시 삭제되거나 대기상태로 다른 삭제 작업과 함께 삭제된다.
    3. 위크맵은 언제 메모리 청소가 될 지 몰라서 정확한 파악 불가능하다.
    4. 따라서 전체 대상의 메서드가 동작하지 않는다.
#### 사용 사례: 추가 데이터

- 위크맵에 추가해 줄 데이터는 객체가 도달 가능성이 있을때 쓰고 없을때는 제거하고 싶은 상황에서 쓰인다.
- 위크맵을 사용해서 사용자 방문 횟수를 저장한다.
```
let visitsCountMap = new WeakMap();
let john = { name: "John" };

countUser(john);

john = null;

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

console.log(visitsCountMap) // 요소가 없는 WeakMap이 출력된다.
// WeakMap에서 John을 삭제해주지 않더라도 자동으로 삭제된 것을 확인할 수 있다.
```

#### 사용 사례: 캐싱

- 캐싱(caching)이 필요할 때 유용합니다.
    - 시간이 오래 걸리는 작업의 결과를 저장해서 연산 시간과 비용을 절약해주는 기법

- 동일한 함수를 여러 번 호출해야 할 때 사용하는 예시
    - 최초 호출 시 반환된 값을 어딘가에 저장해 놓았다가 다음 차례에 함수를 호출하는 대신 저장된 값을 사용한다.

```
let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = 1 + obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

let obj = {john: 14};

let result1 = process(obj);
let result2 = process(obj);

obj = null;
console.log(cache); // 요소가 없는 WeakMap이 출력된다.
```

#### 위크셋

- 셋과 유사한, 객체만 저장할 수 있는 객체이다.
    - 원시값을 저장할 수 없다.
    - 프로퍼티로 쓰인 객체는 도달 가능할 때만 메모리에서 유지된다.
- 위크셋 메서드
    - weakMap.add(value)
    - weakMap.delete(value)
    - weakMap.has(value)
    - size나 keys같은 반복작업 메서드가 없다.
- 복잡한 데이터를 저장하지 않으며 "예"나 “아니오” 같은 간단한 답변을 얻는 용도로 사용된다.

- 사이트 방문 여부를 추적하는 예시

```
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John이 사이트를 방문합니다.
visitedSet.add(pete); // 이어서 Pete가 사이트를 방문합니다.
visitedSet.add(john); // 이어서 John이 다시 사이트를 방문합니다.

// visitedSet엔 두 명의 사용자가 저장될 겁니다.

// John의 방문 여부를 확인해보겠습니다.
console.log(visitedSet.has(john)); // true

// Mary의 방문 여부를 확인해보겠습니다.
console.log(visitedSet.has(mary)); // false

john = null;

console.log(visitedSet); // pete만 요소로 가지고 있는 WeakSet이 출력된다.
```