// min(a, b) 함수 만들기
// a와 b 중 작은 값을 반환해주는 함수, min(a,b)을 만들어보세요.

function min(a,b){
    return a < b ? a : b;
}

console.log(min(2, 5) === 2)
console.log(min(3, -1) === -1)
console.log(min(1, 1) === 1)
// true
// true
// true
