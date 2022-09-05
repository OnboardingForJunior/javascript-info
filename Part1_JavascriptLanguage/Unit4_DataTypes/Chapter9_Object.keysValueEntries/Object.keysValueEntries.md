# Unit4 Data Types
<br>

### Chapter 9 Object.keys, values, entries

- keys(), values(), entries()를 쓸 수 있는 자료구조
    - Map
    - Set
    - Array
    - 위의 구조에서 반환하는 값은 iterable 객체이다.
    - 일반객체(Object.xxx)에서 쓰일땐 '진짜' 배열을 반환하는 차이점이 있다.
#### Object.keys, values, entries

- Object.keys(obj)
    - 객체의 키만 담은 배열을 반환합니다.
- Object.values(obj)
    - 객체의 값만 담은 배열을 반환합니다.
- Object.entries(obj)
    - [키, 값] 쌍을 담은 배열을 반환합니다.
- 일반객체 메서드의 반환값은 element가 해당 객체의 entry인 배열형태로 바꾸어준다.
    - 이터러블 객체를 반환하는 함수와는 다르다.
    - 심볼형 프로퍼티를 무시한다.
    - 심볼형 키가 필요한 경우 => Object.getOwnPropertySymbols // 심볼형 키만 배열로 반환한다.

```
let user = {
    name: "John",
    age: 30
  };
  
  // 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, age:30이 차례대로 출력
}
```

#### 객체 변환하기

- map, filter같은 배열 전용 메서드를 사용할 수 있게 된다.
    - 적용 방법
    1. Object.entries(obj)를 사용해 객체의 키-값 쌍이 요소인 배열을 얻는다.
    2. 위의 과정으로 얻어낸 배열에 map 등의 배열 전용 메서드를 적용한다.
    3. 위의 과정으로 반환된 배열에 Object.fromEntries(array)를 적용해 배열을 다시 객체로 되돌린다.

    ```
    const grade = {
        subject: "English",
        score: "F",
    }

    const user = {
        age: 14,
        name: "jongku",
        birth: new Date("1994-03-16"),
        grade: grade,
    }

    console.log(JSON.stringify(user, Object.keys(user).filter(key => key !== "grade")));
    ```