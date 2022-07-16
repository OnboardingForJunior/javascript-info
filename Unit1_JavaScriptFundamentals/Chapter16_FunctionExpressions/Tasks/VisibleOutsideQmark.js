// 구문 바깥에서 실행하는 함수

let age = prompt("나이를 알려주세요", 18);
let welcome = (age < 18) ?
	function(){alert("안녕!");} :
	function(){alert("안녕하세요!");};
welcome();