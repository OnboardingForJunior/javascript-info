// 배열에서 키가 있는 개체 만들기
// 중요도: 4
// 형식의 사용자 배열을 받았다고 가정해 보겠습니다 {id:..., name:..., age:... }.

// groupById(arr)다음 을 사용하여 객체를 생성 하는 함수 를 만듭니다.id

// 예를 들어:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(users){
  const newObj = {};
  users.reduce((sum, current) => {
    if(sum !== undefined) newObj[sum.id] = sum;
    newObj[current.id] = current;
  });
  return newObj;
}

console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// 이러한 기능은 서버 데이터로 작업할 때 정말 편리합니다.

// id이 작업에서 우리는 그것이 고유 하다고 가정합니다 . 동일한 배열 항목이 두 개 있을 수 없습니다 id.

// 솔루션에서 배열 .reduce방법을 사용하십시오.