// 매개변수 기본값: 매개변수에 값을 전달하지 않으면 그 값은 undefined가 된다.
function showMessage(from, text) { // 매개변수: from, text
  return `${from} : ${text}`;
}
console.log(showMessage('Ann')); // Ann : undefined
// Javascript에서는 매개변수의 갯수가 달라도 함수의 이름이 같으면 정상적으로 작동한다.