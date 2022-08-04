// 매개변수 기본값(default) 설정
function showMessage(from, text = "no text given") {
  return `${from} : ${text}`;
}
showMessage("Ann"); // Ann: no text given