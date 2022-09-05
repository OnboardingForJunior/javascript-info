// function sum(a){
//     // 1. 탈출 조건
//     if(a === 1) return 1;

//     // 2. 자기 자신 호출
//     return sum(a - 1) + a;
//             // 순서대로 더했을때 총합!
//             // 매개변수를 설정~
//     // 무한반복같은....!
// }

// console.log(sum(5));

function pow(x, n){
    if (n === 1){
        return x;
    }

    const acc = pow(x, n-1);
                    // 재귀함수가 몇번 호출될지!
    return x * acc;
}

console.log(pow(2, 4));

// 직접 여러번 짜보자!