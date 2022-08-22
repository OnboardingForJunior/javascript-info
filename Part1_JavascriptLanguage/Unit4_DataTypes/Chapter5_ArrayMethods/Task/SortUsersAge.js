// 나이를 기준으로 객체 정렬하기
// 중요도: 5
// 프로퍼티 age가 있는 객체가 담긴 배열이 있습니다. 이 배열을 age를 기준으로 정렬해주는 함수 sortByAge(users)를 만들어보세요.

// 예시:

const john = { name: "John", age: 25 };
const pete = { name: "Pete", age: 30 };
const mary = { name: "Mary", age: 28 };

const arr = [ pete, john, mary ];

function sortByAge(arr){
    arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete