# Unit5 Advanced working with functions
<br>

### Chapter 2 나머지 매개변수와 스프레드 문법

- 자바스크립트의 내장 함수는 인수의 개수에 제약을 두지 않는다.
- 학습 목차
    - 임의의 수의 인수를 받는 방법
    - 매개변수에 배열을 전달하는 방법

#### 나머지 매개변수 ...

- 함수에서 정의된 매개변수와 상관없이 넘겨주는 인수의 개수에는 제약이 없다.
    - 더 많은 여분의 인수를 전달해도 에러가 나지 않는다.
    - 다만, 반환값은 정해진 인수 개수만을 사용해서 계산된다.
- 함수 선언부에 여분의 매개변수 포함시키기
    - ...뒤의 변수이름에 나머지 매개변수를 한데 모아 배열로 넣어준다.
    - 첫번째로 못쓰임.
    - (ex) function myfunction(text, ...value){}

```
function showName(firstName, lastName, ...titles) {
  console.log( firstName + ' ' + lastName ); // Bora Lee

  // 나머지 인수들은 배열 titles의 요소가 됩니다.
  // titles = ["Software Engineer", "Researcher"]
  console.log( titles[0] ); // Software Engineer
  console.log( titles[1] ); // Researcher
  console.log( titles.length ); // 2
}

showName("Bora", "Lee", "Software Engineer", "Researcher");
```

#### arguments 객체

- argument 객체는 인자로 들어온 걸 프로퍼티로 반환하는 객체
    - 내부적으로 동작한다.

#### 스프레드 문법

- 구조분해

#### 배열과 객체의 복사본 만들기
<br>
