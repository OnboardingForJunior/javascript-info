# Unit4 Data Types
<br>

### Chapter 5 Array Methods
<br>

#### 요소 추가, 제거 메서드
<br>

- [베열명].splice(index, deleteCount)
	- 원본 값이 달라지는 뮤터블한 성질을 가지고 있다.
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
	- 원본 값이 보존되는 임뮤터블한 성질을 가지고 있다.
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

- [배열명].map(function)
	- map에서의 콜백 함수는 매개변수 item, index, array를 사용한다.
	- map은 배열 전체 요소를 불러와서 함수를 호출하고, 함수 실행 결과를 배열로 반환해 준다.
- [배열명].sort(function)
	- 원본 값이 달라지는 뮤터블한 성질을 가지고 있다.
	- sort에서의 콜백 함수는 매개변수 a, b를 사용한다.
	- 콜백 함수가 없는 빈 sort()메서드는 요소를 무조건 문자열로 취급되어 재정렬한다.
	- 정렬 기준을 가진 콜백 function을 인자로 넣어서 문자열 형태의 정렬이 아닌 숫자 형태로 정렬할 수 있다.
	- a와 b를 매개변수로 쓰는 콜백 function은 조건에 따라 다른 리턴값을 반환한다.
	1. a < b의 경우 음수가 반환되어 a를 b보다 먼저 정렬한다. 
	2. a > b의 경우 양수가 반환되어 b를 a보다 먼저 정렬한다. 
	3. a = b의 경우 0이 반환되어 동일한 값을 정렬한다. 
- [배열명].reverse()
	- arr의 요소를 역순으로 정렬시켜주는 메서드이다.
	- 원본 값이 달라지는 뮤터블한 성질을 가지고 있다.
- [배열명].split(delim) //* delim(delimiter): 구분자
	- 구분자를 기준으로 문자열을 쪼개어 배열로 바꾸어준다.
	- 두번째 인수는 배열의 길이를 제한하여 길이를 초과하는 요소를 무시한다.
		- 자주 쓰이진 않는다.
- [배열명].join(glue) //* glue: 접착제
	- 접착제 인수를 사이에 추가하면서 배열을 합쳐 문자열로 바꾸어준다.
- [배열명].reduce(function)
	- reduce에서의 콜백 함수는 배열의 모든 요소를 대상으로 차례차례 적용한다.
	- 4개의 매개변수(accumulator, currentValue, currentIndex, array)를 쓴다.
		- accumulator(누산기): 이전 함수 실행 결과
		- 매개변수값은 옵션으로 설정 불가능하다.
	- 함수 호출 시 사용되는 초기값은 옵션으로 설정 가능하다.
	
```
const arr = [0, 1, 2, 3, 4];

// 0부터 마지막 item까지 순회해서 누산해줍니다.
arr.reduce((acc, cur, idx, array) => acc + cur);
// 10

// 누산기의 초기값이 10인 상태로 0부터 마지막 item까지 순회해서 누산해줍니다.
arr.reduce((acc, cur, idx, array) => acc + cur, 10);
// 10 + 10 => 20
```

- [배열명].reduceRight
	- reduce와 동일한 기능을 하지만 배열의 오른쪽부터 연산을 수행한다.

#### Array.isArray로 배열 여부 알아내기
<br>

- Array.isArray(value) 메서드
	- value가 배열이라면 true를, 배열이 아니라면 false를 반환한다.
	- typeof로는 일반 객체와 배열을 구분하기 어렵다.

#### 배열 메서드와 'thisArg'
<br>

- [배열명].[method](func, thisArg) 메서드
	- 배열 메서드(find, filter, map 등. sort는 제외)는 thisArg라는 매개변수를 옵션으로 받는다.
	- 배열 매서드에 있는 this를 불러올 수 있게 해준다.
	- thisArg는 func의 this가 된다.
	- this는 undefined가 되어 에러가 발생한다.

```
const army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
	// 매개변수 user의 age프로퍼티가 this로 불러온 객체 army의 minAge/maxAge 프로퍼티보다 크거나 작은가?
  }
};

const users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

const soldiers = users.filter(army.canJoin, army);
// thisArg 위치의 army는 army.canJoin 호출 시 this객체를 army로 지정해준다.
// army.Canjoin자리에 true가 반환되면 filter로 해당 프로퍼티만 걸러서 soldiers라는 이름을 가진 배열로 생성해준다.

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23
```