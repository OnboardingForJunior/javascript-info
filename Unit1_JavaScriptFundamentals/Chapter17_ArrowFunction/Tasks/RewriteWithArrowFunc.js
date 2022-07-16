let ask = (question, yes, no) => {
  if (confirm(question)) return yes()
  else return no();
}

let result = ask(
  "동의하십니까?",
  () => "동의하셨습니다.",
  () => "취소 버튼을 누르셨습니다."
);

console.log(result);