// 좋지 않은 코드 스타일
// 아래 코드가 어떤 점에서 좋지 않은지 생각해보세요.

// function pow(x,n) // 1. 중괄호를 열기 전에 줄바꿈해서 오류가 나게끔 했다.
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;} // 3. 한줄 코드로 쓸수 있음에도 불필요한 중괄호를 사용했다.
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'') // 2. 세미클론이 빠져있다.
// if (n<=0) // 1. 중괄호를 열기 전에 줄바꿈해서 오류가 나게끔 했다.
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

function pow(x,n){
  let result = 1;

  for(let i = 0; i<n; i++) result*=x;

  return result;
}

let x = prompt("x?",'');
let n = prompt("n?",''); // 두 줄로 나눠서 작성하는 게 좋다.

if (n <= 0){
  alert(`Power ${n} is not supported,
      please enter an integer number greater than zero`);
} else {
  alert(pow(x,n));
}