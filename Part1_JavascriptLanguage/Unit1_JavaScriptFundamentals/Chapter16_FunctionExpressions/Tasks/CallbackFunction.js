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