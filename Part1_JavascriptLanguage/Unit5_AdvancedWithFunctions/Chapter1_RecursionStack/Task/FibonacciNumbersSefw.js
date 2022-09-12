function fib(n) {
    let a, b;
    a = 1; // fib(1);
    b = 1; // fib(2);

    for(let i = 3; i <= 4; i++){
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fib(1)); 
console.log(fib(2)); 
console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

/*
1. 계산한 값 캐싱하기
2. 동적 계획법 (Dynamic Programing) - 알고리즘 기법
    - DP문제 라고 많이 불러요~
    - 시간복잡도, 공간 복잡도에 따라... 얘가 더 유리!
    - 이 문제같은 경우엔 공간 복잡도가 적어졌어요
*/

// 주의: fib (77)를 호출했을 때 연산 시간이 1초 이상 되면 안 됩니다.