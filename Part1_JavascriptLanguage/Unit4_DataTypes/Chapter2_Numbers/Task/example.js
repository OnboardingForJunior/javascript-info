// 원시값의 메소드.. 

const str = "hello";

// str.[메소드명]
// String 관련 메소드는 많이 알아두는게 좋을거에요!
// 메소드를 활용해서 알고리즘을 짜면 굉장히 유용해요.

// 객체는...
// 클래스를 프로그램으로 사용하기 위해서 메모리에 할당한 것 => 객체

// 객체와 클래스의 차이를 정리해보자.


// Utility Calss, util class

// (ex) Math.~~
// 클래스는 static함수를 불러오고, 원시값의 메서드는 원시 클래스의 멤버 함수
// Math와 같은 Util Class는 Static 함수의 집합체

// isNaN isFinite는 테스트할때 쓰임
if (isNaN("123")){}
// 외부에서 오는 경우 ~~~ 이상한 값, 특수문자, 유저가 로그인창에 입력하면 검증을위해 쓰이곤합니다.

// parseInt 문자열을 숫자로 바꾸는!!

const arr = [1, 2, 3, 4, 5];

// 구조 분할 할당

// [1 2 3 4 5]
// console.log(arr); // error

// 1 2 3 4 5
console.log(Math.max(...arr)); // 5

// [0 1 2 3 4 5]
console.log(Math.max([0, ...arr])); // 5

// arr.push(6); // 안쓰는 이유?
// 다른 프로그램에도 영향을 줄까봐!! 불변성을 유지하기위해