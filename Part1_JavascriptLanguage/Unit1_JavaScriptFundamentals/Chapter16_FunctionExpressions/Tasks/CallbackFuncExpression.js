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