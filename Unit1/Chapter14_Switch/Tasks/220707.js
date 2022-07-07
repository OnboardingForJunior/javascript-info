// Summarize
/*
// 매개변수 기본값: 매개변수에 값을 전달하지 않으면 그 값은 undefined가 된다.
function showMessage(from, text) { // 매개변수: from, text
  return `${from} : ${text}`;
}
console.log(showMessage('Ann')); // Ann : undefined
// Javascript에서는 매개변수의 갯수가 달라도 함수의 이름이 같으면 정상적으로 작동한다.
*/

/*
// 매개변수 기본값(default) 설정
function showMessage(from, text = "no text given") {
  return `${from} : ${text}`;
}
showMessage("Ann"); // Ann: no text given
*/

/*
// 논리연산자 사용하기
function showMessage(text) {
  text = text || '빈 문자열';
  return `${text}`;
}
// undefined
*/

/*
function showMessage(text) {
  text = text || '빈 문자열';
  return `${text}`;
}
showMessage("새로운 문자열"); // 새로운 문자열
*/

/*
// nullish(??) 사용
// 매개변수 'count'가 넘어오지 않으면 'unknown'을 출력해주는 함수
function showCount(count) {
  return count ?? "unknown";
}
console.log(showCount(0)); // 0
console.log(showCount(null)); // unknown
console.log(showCount()); // unknown
*/

// Task

/*
function checkAge(age) {
    return age > 18 ? true : '보호자의 동의를 받으셨나요?';
}

while(true){
    let age = prompt("당신의 나이는 몇살입니까?", 18);
    alert(checkAge(age));

    if(age > 18) break;
}
*/

/*
function min(a,b){
    return a < b ? a : b;
}

console.log(min(2, 5) === 2)
console.log(min(3, -1) === -1)
console.log(min(1, 1) === 1)
// true
// true
// true
*/

/*
function pow(x,n){
    return x ** n;
}
console.log(pow(3,2) === 9);
console.log(pow(3,3) === 27);
console.log(pow(1,100) === 1);
// true
// true
// true
*/