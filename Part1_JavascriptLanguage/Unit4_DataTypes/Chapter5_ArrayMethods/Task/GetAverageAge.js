// 평균 나이 구하기
// 중요도: 4
// age를 나타내는 프로퍼티를 가진 객체가 여러 개 담긴 배열이 있습니다.
// 평균 나이를 반환해주는 함수 getAverageAge(users)를 작성해보세요.

// 평균을 구하는 공식은 (age1 + age2 + ... + ageN) / N 입니다.

// 예시:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

// reduce를 활용해서 문제를 풀라.

function getAverageAge(arr){
    return arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28