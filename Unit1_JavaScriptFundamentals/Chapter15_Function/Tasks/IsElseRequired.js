// Task

// 아래의 코드에서 else문을 삭제해도 기존 코드와 동일하게 작동할까요?

// function checkAge(age) {
//    if (age > 18) {
//      return true;
//    } else {
//      return confirm('보호자의 동의를 받으셨나요?');
//    }
// }

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return confirm('보호자의 동의를 받으셨나요?');
}
// else는 불필요합니다.
// if의 조건이 불충족하면 자동적으로 바깥의 문장이 실행되므로