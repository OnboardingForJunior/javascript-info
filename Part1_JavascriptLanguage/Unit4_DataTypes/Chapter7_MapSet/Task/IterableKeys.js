// 반복 가능한 객체의 키
// 중요도: 5
// map.keys()를 사용해 배열을 반환받고, 이 배열을 변수에 저장해 .push와 같은 배열 메서드를 적용하고 싶다고 해봅시다.

// 작동하지 않네요.

let map = new Map();

map.set("name", "John"); // name: john을 맵의 프로퍼티로 저장합니다.

let keys = Array.from(map.keys());
// let keys = [...map.keys()];

// Error: keys.push is not a function
keys.push("more");

console.log(keys);
// 이유가 무엇일까요? keys.push가 작동하게 하려면 어떻게 코드를 고쳐야 할까요?
// 체이닝을 풀어 쓰면 map.keys().push("more"); 이렇게 되는데, map.keys()는 key값을 담은 '배열'이 아닌
// key값을 담은 '이터러블' 객체를 반환하기 때문에 이터러블은 배열이 아니라서 배열 메서드 push를 지원하지 않습니다.
// 범용 메서드 Array.from으로 이터러블을 배열로 바꾸면 에러가 나지 않는다.
// 또는 구조분해 할당으로 배열로 바꿔주면 에러가 나지 않습니다.