// 주어진 숫자까지의 모든 숫자 더하기
// 중요도: 5
// 숫자 1 + 2 + ... + n을 계산하는 함수 sumTo (n)을 만들어보세요.

// 예시:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// 아래 방법을 사용해 세 가지 답안을 만들어보세요.

// for 반복문 사용하기
// 재귀 사용하기(n > 1일 때 sumTo(n) = n + sumTo(n-1))
// 등차수열 공식 사용하기
// 예시:

function sumTo(n) { 
    // 1. 탈출조건 속도 3등
    // if(n === 1) return 1;

    // 2. 재귀호출(탈출조건에서 사용되는 인자를 변화시켜라!)
    // return sumTo(n - 1) + n;

    // for 반복문  속도 2등
    // let sum = 0;
    // for(i=1;i<=n;i++){
    //     sum += i;
    // }
    // return sum;

    // 등차수열 공식? 속도 1등
    return (1/2 + n/2) * n
}

console.log( sumTo(100) ); // 5050

// 더 생각해보기 1: 세 가지 방법 중 어떤 방법이 가장 빠른가요? 어떤 방법이 가장 느린가요? 이유도 함께 제시해주세요.

// 더 생각해보기 2: 재귀를 사용해 sumTo (100000)를 계산할 수 있을까요?