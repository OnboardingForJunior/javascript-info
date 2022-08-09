// => 식별자
// 객체의 특정 키값으로 사용한다.

const id = Symbol("name");

const obj = {
    [id]: 123
}

const id2 = Symbol.for("name");

obj[Symbol.for("name")]
// id.description // 설명이 됩니다.

// 간단하고 유연한 로직을 짤 때 쓰는 시스템 심볼
// iterator: 순회할때 다음 상태값을 정의할때.
// toPrimitive: 객체의 상태에 따라... number, string이냐에 따라 반환을 달리 합니다.
// Obj[Symbol.iterator] --> 상태 설정

// toString과 valueOf는 자바스크립트 코어에 대한 기능