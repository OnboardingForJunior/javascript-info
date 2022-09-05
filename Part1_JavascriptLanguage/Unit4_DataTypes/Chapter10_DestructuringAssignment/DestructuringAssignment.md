# Unit4 Data Types
<br>

### Chapter 10 구조 분해 할당

- 구조 분해 할당
    - 객체나 배열을 변수로 분해할 수 있게 해주는 특별한 문법
- 구조 분해 할당이 사용되는 이유
    - 함수에 객체나 배열을 전달해야 하는데 일부만 필요할 경우
    - 매개변수가 많거나, 매개변수 기본값이 필요한 경우 유용하게 쓰인다.

#### 배열 분해하기

- 배열의 요소를 여러 변수에 각각 대입하는것을 뜻한다.
    - 배열 분해할당은 원본 배열을 파괴하지 않는다.
- 구조 분해 할당에 올 수 있는 자료구조
    - 우항: 이터러블도 배열 구조 분해 할당을 적용해서 쪼갤 수 있다.
    - 좌항: 할당 할 수 있는 모든 형태를 허용한다. (ex) 객체 프로퍼티 포함
```
const arr = ["Jongu", "second", "third"];
// 좌항에 변수 이름을 담은 배열, 우항에 요소가 포함된 기존 배열
const [first, second, test] = arr;

console.log(first, second, test);
// jongu, second, third

// split을 활용할 수도 있다.
const [firstName, secondName, text] = "Pete Lee Hello".split(' ');
console.log(firstName, secondName, text);
// Pete Lee Hello
```
- for..of의 매개변수로도 대입할 수 있다.
    - 순회하면서 구조 분해 할당 하기
```
let user = {
  name: "John",
  age: 30
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, age:30
}
```

#### '...'로 나머지 요소 가져오기
<br>

#### 기본값
<br>

#### 객체 분해하기

```
const options = {
    title: "Menu",
    // width: 100,
    // height: 200
  };
  
          // default값 설정
const {title, width = 100, height = 200} = options;
  
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
```
<br>

```
const obj = {
    id: "123",
    pw: "456"
}

function login({id, pw}){
    console.log(id, pw);
}
```

#### 나머지 패턴 '...'
<br>

#### 중첩 구조 분해
<br>

#### 똑똑한 함수 매개변수
<br>
