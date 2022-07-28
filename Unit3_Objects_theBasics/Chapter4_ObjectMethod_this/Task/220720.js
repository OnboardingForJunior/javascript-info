// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   };

//   let user = makeUser();
  
//   console.log( user.ref ); // 결과가 어떻게 될까요?

// this는 자신을 호출한 부모
// call(호출): method(함수)를 call 합니다.
// caller(호출하는 장소): this
// callee(호출받는 장소): user
// call의 개념에서 callee의 this는 caller가 출력됩니다.
// function 초기화가 안됬을때... this출력하면 글로벌 or windows 출력됨...

function makeUser() {
    return {
      name: "John",
    //   ref: function() {return this}
      ref() { return this;}
    };
  };

  let user = makeUser();
  
  console.log( user.ref().name ); // 결과가 어떻게 될까요?
                    // call