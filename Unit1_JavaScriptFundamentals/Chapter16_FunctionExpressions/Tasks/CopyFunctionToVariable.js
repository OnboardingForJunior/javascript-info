// 함수의 복사와 할당
// (1) 함수 생성
function sayHi(text) {
  return `hello ${text}`;
}

// (2) 함수 복사
let func = sayHi;
let text = "world!";

// (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
console.log(func(text)); // Hello world!
// 본래 함수도 정상적으로 실행됩니다.
console.log(sayHi(text)); // Hello world!