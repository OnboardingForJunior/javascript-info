# Unit4 Data Types
<br>

### Chapter 10 구조 분해 할당
<br>

#### 배열 분해하기

```
const arr = ["Jongu", "second", "third"];
const [first, second, test] = arr;

console.log(first, second, test);
```

#### '...'로 나머지 요소 가져오기
<br>

#### 기본값
<br>

#### 객체 분해하기

```
let options = {
    title: "Menu",
    // width: 100,
    // height: 200
  };
  
          // default값 설정
let {title, width = 100, height = 200} = options;
  
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
