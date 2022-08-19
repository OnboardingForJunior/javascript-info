# Unit4 Data Types
<br>

### Chapter 5 Array Methods
<br>

#### 요소 추가, 제거 메서드
<br>

- [베열명].splice(index, deleteCount)
	-
	- 배열에서 요소를 지울때 사용한다. 지워진 빈 자리를 다음 요소로 채워주기 때문에 유용하다.
	- 매개변수 index에 조작을 가할 첫 요소를 지정한다.
	- 매개변수 deleteCount에 제거하고자 하는 요소의 개수를 지정한다.
	
- [베열명].splice(index, deleteCount, elem1, ..., elemN)
	- 배열에서 요소를 교체할때 사용한다. 삭제한 빈 자리를 교체할 요소로 채워주는 기능을 한다.
	- 매개변수 index에 조작을 가할 첫 요소를 지정한다.
	- 매개변수 deleteCount에 제거하고자 하는 요소의 개수를 지정한다.
		- deleteCount를 0으로 설정하면 요소를 제거하지 않으면서 새로운 요소를 추가할 수 있다.
	- elem1, ..., elemN은 배열에 추가할 요소를 나타낸다.

- [배열명].slice([start],[end])
	- start 인덱스 이상 end 인덱스 미만의 요소를 복사한 새로운 배열을 반환한다.
	- start와 end에 음수를 입력하면 배열 끝에서부터의 정방향으로 요소 개수를 반환한다.
		- 이때도 마찬가지로 start가 end보다 클 순 없다.
	- arr.slice는 문자열 메서드인 str.slice와 유사하게 동작한다. 다만 배열을 반환한다.

```
const arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (인덱스가 1인 요소부터 인덱스가 3인 요소까지를 복사(인덱스가 3인 요소는 제외))
console.log( arr.slice(-2) ); // s,t (인덱스가 -2인 요소부터 정방향으로 제일 끝 요소까지를 복사)
```

- [배열명].concat([item1, item2], [item3, item4]...)
	- 배열에 배열이나 값을 추가하여 새로운 배열을 만들때 쓰인다.
	- 구조분해할당[...arr, item]이 나온 이후로 대체되어서 잘 안쓰이는 메서드이다.
	- 객체가 인자로 넘어올 경우 객체의 형태로 복사되어 더해져서 [object Object] 형태로 추가된다.
	- 객체 프로퍼티에 [Symbol.isConcatSpreadable]: true가 있으면  concat은 이 객체르 배열로 취급한다.

```
const arr = [1, 2];

const arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) ); // 1,2,something,else
```

#### forEach로 반복작업 하기
<br>

- item을 하나씩 순회해준다.
- 콜백 function으로 넣을 수 있어서 잘 쓰인다.
- for...in을 대신해서 쓰인다.

```
// 문법
arr.forEach(function(item, index, array) {
  // 요소에 무언가를 할 수 있습니다.
});

// 요소 모두를 얼럿창에 출력한다.
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// 인덱스 정보까지 더해서 출력해준다.
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
// Bilbo is at index 0 in Bilbo,Gandalf,Nazgul
// Gandalf...
// Nazgul...
```

#### 배열 탐색하기
<br>

- [배열명].indexOf(item, from)
	- 인덱스 from으로 시작해 item요소를 찾는다.
	- 요소 발견시 해당 인덱스를 반환, 발견 못할 시 -1을 반환한다.
- [배열명].lastIndexOf(item, from)
	- index와 동일한 기능으로 반환하며, 검색을 끝에서부터 시작한다.
- [배열명].includes(item, from)
	- 인덱스 from으로 시작해 item요소를 찾는다.
	- 해당하는 요소를 포함한다면 true를 반환한다.
	- 완전 항등 연산자를 로직으로 사용하기 때문에 NaN 여부도 확인 가능하다. 
		- indexOf/lastIndexOf 와의 차이점
- [배열명].find(function) // 콜백 function 안에는 화살표로 조건을 설정
	- *콜백함수: 다른 함수의 인자로써 넘겨진 후 특정 이벤트에 의해 호출되는 함수
	- 콜백 함수안의 조건에 해당하는 요소가 있다면 true가 반환된다.
		- 이후, 함수가 참을 반환하면 탐색은 중단되고 해당 요소가 반환 (이때 단 하나의 요소만 반환한다.)
	- 콜백 함수안의 조건에 해당하는 요소가 없으면 undefined를 반환한다.
- [배열명].findIndex
	- find와 동일한 기능이지만 해당 요소 대신 해당 인덱스를 반환한다.
		- find와 서로 출력 타입이 다르게 나온다.
	- 조건에 맞는 요소가 없으면 -1이 반환된다.
- [배열명].filter(function) // 콜백 function 안에는 화살표로 조건을 설정
	- 요소를 찾아 반환하는 기능을 하며, find와 달리 조건을 충족하는 요소가 여러 개인 경우 쓰인다.
		- 이때, 조건에 맞는 요소 전체를 담은 배열을 반환한다.

```
const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// 앞쪽 사용자 두 명을 반환합니다.
const someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2
```

#### 배열을 변형하는 메서드
<br>

- map
- sort(fn)
- reverse
- split과 join
- reduce와 reduceRight

#### Array.isArray로 배열 여부 알아내기
<br>

#### 배열 메서드와 'thisArg'
<br>
