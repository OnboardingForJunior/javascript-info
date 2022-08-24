// 중복 없는 요소 찾아내기
// 중요도: 4
// arr은 배열입니다.

// 배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요.

// 예시:


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

function unique(arr) {
  const newArr = [];
  arr.forEach((item, index, array) => {
    if(array.indexOf(item) === index) newArr.push(item);
  });

  return newArr;
}

// includes 사용시
// function unique(arr) {
//   const newArr = [];
//   arr.forEach((item) => {
//     if(!newArr.includes(item)) newArr.push(item);
//   });
//   return newArr;
// } 

// 자료구조 활용
// function unique(arr) {
//   return [...new Set(arr)];
// } 