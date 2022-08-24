// 중복 없는 요소 찾아내기
// 중요도: 4
// arr은 배열입니다.

// 배열 내 유일한 요소를 찾아주는 함수 unique(arr)를 작성해보세요.

// 예시:


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

// 내가 쓴 답지
// function unique(arr) {
//   const newArr = [];
//   arr.forEach((item, index, array) => {
//     if(array.indexOf(item) === index) newArr.push(item);
//   });

//   return newArr;
// }

// includes 사용시
// function unique(arr) {
//   const newArr = [];
//   arr.forEach((item) => {
//     if(!newArr.includes(item)) newArr.push(item);
     // newArr(빈객체)에서 item을 검색해서 안나오면, push한다. 순회할 수록 값이 누적되어 중복을 제거해준다.
//   });
//   return newArr;
// } 

// 자료구조 활용
function unique(arr) {
  return [...new Set(arr)];
  // Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장한다.
  // 집합처럼!
} 