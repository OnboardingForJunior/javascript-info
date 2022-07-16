// pow(x,n) 함수 만들기
// x의 n제곱을 반환해주는 함수 pow(x,n)를 만들어보세요.
// x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.

function pow(x,n){
    return x ** n;
}
console.log(pow(3,2) === 9);
console.log(pow(3,3) === 27);
console.log(pow(1,100) === 1);
// true
// true
// true