# Unit4 Data Types
<br>

### Chapter 9 Object.keys, values, entries
<br>

#### Object.keys, values, entries

- 객체를 내용은 프로퍼티인 배열형태로 바꾸어준다.
    - 이터러블 객체를 반환하는 함수와는 다르다.

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
<br>

