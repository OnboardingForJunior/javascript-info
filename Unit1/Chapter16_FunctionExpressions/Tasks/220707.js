/*
// 함수 표현식
let sayHi = function(text) {
  return `hello ${text}`;
};
let text = "world!";
console.log(sayHi(text));
// hello world
*/

/*
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
*/

/*
// 콜백함수
// 기존 함수
function ask(question, yes, no) {
  if (confirm(question)) return yes()
  else return no();
}

function showOk() {
  return "동의하셨습니다.";
}

function showCancel() {
  return "취소 버튼을 누르셨습니다.";
}
// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
let result = ask("동의하십니까?", showOk, showCancel);
alert(result);

// 콜백함수를 통해 함수안에 함수 불러오기
function ask(question, yes, no) {
  if (confirm(question)) return yes()
  else return no();
}

let result = ask(
  "동의하십니까?",
  function() { return "동의하셨습니다."; },
  function() { return "취소 버튼을 누르셨습니다."; }
);
alert(result);
*/

// 구문 바깥에서 실행하는 함수
/*
let age = prompt("나이를 알려주세요", 18);
let welcome = (age < 18) ?
	function(){alert("안녕!");} :
	function(){alert("안녕하세요!");};
welcome();
*/