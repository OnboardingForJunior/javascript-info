// 변하지 않는 객체?
// 중요도: 5
// const와 함께 선언한 객체를 변경하는 게 가능할까요? 생각을 공유해주세요!

const user = {
  name: "John"
};
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete";
console.log(user.name)
// 에러 없이 실행됩니다.
// const의 객체 이름을 바꾸진 못해도 객체 안의 리터럴 값은 변화 가능합니다.