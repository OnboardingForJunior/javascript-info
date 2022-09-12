// 피보나치 수 계산하기
// 중요도: 5
// 피보나치 수는 첫째와 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열로, Fn = Fn-1 + Fn-2라는 공식으로 표현할 수 있습니다.

// 처음 두 항은 1이고, 그다음 항들은 2(1+1),3(1+2),5(2+3)이므로 전체 수열은 1, 1, 2, 3, 5 , 8, 13, 21 ... 형태를 띱니다.

// 피보나치 수는 황금 비율 등 우리 주변을 둘러싼 수많은 자연 현상과 관련이 있습니다.

// n 번째 피보나치 수를 반환하는 함수 fib(n)을 작성해보세요.

// 예시:

// function fib(n) {
//     if(n<=1) return n;
//     return fib(n-1) + fib(n-2);
// }

function fib(n){
    const cache = new Map();
    cache.set(0, 0);

    // 피보나치 정의
    cache.set(1, 1);
    cache.set(2, 1);

    return recFib(n);

    function recFib(n) {
        if(n<=1) return n;
        let a, b;

        if(cache.has(n-1)) {
            a = cache.get(n-1);
        } else {
            a = recFib(n-1);
            cache.set(n-1, a);
        }

        if(cache.has(n-2)) {
            b = cache.get(n-2);
        } else {
            a = recFib(n-2);
            cache.set(n-2, a);
        }

        return a + b;

        // 일반 재귀호출 사용 시 계속 계산하는 과정이 들어간다.
        // return fib(n-1) + fib(n-2);
    }
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

/*
*** 1. 계산한 값 캐싱하기 ***
2. 동적 계획법 (Dynamic Programing) - 알고리즘 기법
*/

// 주의: fib (77)를 호출했을 때 연산 시간이 1초 이상 되면 안 됩니다.