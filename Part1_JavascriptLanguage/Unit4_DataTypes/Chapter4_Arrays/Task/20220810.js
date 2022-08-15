// 모든 객체는 조상이 Object입니다.
// push - 뒤에 추가

const arr = [1, 2, 3];

arr.push(1); // 1, 2, 3, 1

arr.unshift(1); // 0, 1, 2, 3, 1

/* shift => 앞에서 첫번째 아이템을 빼내는 함수 (pop)
1. index 0번째를 임시 저장
2. index n번째를 n-1번째에 저장
3. 임시저장한 index 0번째 값을 리턴
*/

/* unshift => 앞에서 아이템을 추가한다.
index n번째를 n+1번째에 모두 저장
*/

console.log("pop", arr.pop());
console.log("arr", arr);

console.log("shift", arr.shift());
console.log("arr", arr);

// for...of : 배열에 아이템을 하나씩 꺼내는것.
// for...in : 배열,객체에 인덱스를 하나씩 꺼내는것.
    // index => 배열의 키값 => 0부터 시작

// length : 가장 마지막 index에 + 1, 배열의 갯수
    // slice등을 써서 배열을 잘라준다.

const arr1 = Array.from({length: 5}, () => 0); // [0, 0, 0, 0, 0]
const arr2 = Array.from({length: 5}, (v, i) => i+1); // [1, 2, 3, 4, 5]
// 정적 팩터리 패턴 <= 디자인 패턴
// 다차원 배열 한번에 초기화 가능

const arr3 = Array.from({length: 5}, (v, i) => {
    return Array.from({length: 5}, (w, j) => i*5 +j +1);
});

console.log("arr3", arr3);

console.log(arr3.toString());
console.log(`${arr3}`);
