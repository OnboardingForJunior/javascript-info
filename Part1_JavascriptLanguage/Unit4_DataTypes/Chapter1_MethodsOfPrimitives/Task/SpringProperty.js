// 아래 코드를 실행하면, 의도한 대로 문자열(str)에 프로퍼티(test)를 추가할 수 있을까요? 만약 가능하다면 얼럿 창엔 무엇이 출력될까요?
const str = "Hello";

str.test = 5;

console.log(str.test);
// undefined
// 정답은 '프로퍼티 추가가 불가능하다' 입니다. 객체가 아닌 값에 직접적으로 프로퍼티를 추가할 수 없기 때문이다.
// 따라서 str.test 프로퍼티를 콘솔에 찍으면 undefined(정의되지 않음)이 뜬다.