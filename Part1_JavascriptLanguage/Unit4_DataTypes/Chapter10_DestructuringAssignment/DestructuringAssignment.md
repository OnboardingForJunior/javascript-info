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

- 사용하고자 하는 값을 앞부분만 추출하고 나머지를 rest라는 나머지 배열에 담는 방법
    - 사용법: const [item1, item2, ...rest] = [value1, value2, extra1, extra2];
    - 주의사항: 나머지 배열은 항상 마지막에 위치해야 합니다.

#### 기본값

- 배열 분해 할당시, 우항에 할당하고자 하는 변수에 값이 없다면 undefined로 취급된다.
- 이때, 좌항에 할당 연산자로 default value를 설정할 수 있고 undefined 대신에 할당할 값을 정해주는 것이다.
    - 사용법: const [item1 = "default value1", item2 = "default value2"] = ["value1"]; // item1 = value1; item2 = default value2;
    - 복잡한 표현식이나 함수 호출도 기본값이 될 수 있다.
    ```
    // name의 prompt만 실행됨 (값이 제공되지 않았을 때만 함수가 호출되므로)
    const [surname = prompt('성을 입력하세요.'), name = prompt('이름을 입력하세요.')] = ["김"];

    console.log(surname); // 김 (배열에서 받아온 값)
    console.log(name);    // prompt에서 받아온 값
    ``` 
    - 함수
    ```
    const obj = {
        id: "123",
        pw: "456"
    }

    function login({id, pw}){
        console.log(id, pw);
    }
    ```

#### 객체 분해하기

- 좌항엔 객체 프로퍼티 패턴을, 우항엔 분해하고자 하는 객체의 이름을 대입한다.
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
- 패턴은 키 목록부터 세부 프로퍼티 대입 패턴까지 원하는 대로 조정할 수 있다.
    - 사용방법
    - 좌항: { 객체 프로퍼티: 목표 변수 }, 우항: 객체 이름
    ```
    let {width: w, height: h, title} = options;

    // width -> w
    // height -> h
    // title -> title
    ```
- 객체에도 표현식이나 함수 호출을 기본값으로 할당한다. 배열과 방법은 유사하다.

#### 나머지 패턴 '...'

- 객체에 나머지 패턴을 적용해서 프로퍼티에 할당하는 방법
```
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = 이름이 title인 프로퍼티
// rest = 나머지 프로퍼티들
let {title, ...rest} = options;

// title엔 "Menu", rest엔 {height: 200, width: 100}이 할당됩니다.
console.log(options.title); // Menu
console.log(rest.height);  // 200
console.log(rest.width);   // 100
```

- {…} = {…} 형태로 선언하기
    - {…} 자바스크립트에서는 이런 구조를 코드 블록으로 인식한다.
    - {…} = {…} 형태는 블록이 닫히면 문단이 끝나는 것으로 인식하여 에러가 발생한다.
    - 할당문을 괄호 (…)로 감싸면 코드블록이 아니라 표현식으로 인식되어 에러가 발생하지 않는다.
```
let title, width, height;

({title, width, height} = {title: "Menu", width: 200, height: 100});

console.log( title ); // Menu
```

#### 중첩 구조 분해

- 객체나 배열이 다른 객체나 배열을 포함하는 경우에 쓰이는 복잡한 패턴의 구조분해를 말한다.
```
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
let {
  size: { // size 할당함
    width,
    height
  },
  items: [item1, item2], // items 할당함
  title = "Menu", // title은 프로퍼티가 없으므로 default값을 지정해준다.
  extra
} = options; // 해당 변수에 options 객체의 프로퍼티를 할당하도록.

// size와 items는 변수로써 출력되지 않음을 유의하자.
console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut
console.log(extra);  //true
```

#### 똑똑한 함수 매개변수

- 