// 함수 두 개로 동일한 객체 만들기
// new A()==new B()가 성립 가능한 함수 A와 B를 만드는 게 가능할까요?

// 클래스를 프로그램이 사용할 수 있도록 메모리에 할당된 상태 => 객체 또는 인스턴스

const obj = new Object();

function A() {
    return obj;
}
function B() {
    return obj;
}

// 전역스코프를 활용해서 같은 obj를 반환한다.

let a = new A;
let b = new B;

console.log( a === b ); // true
// 만약 가능하다면, 실행 가능한 예시를 작성해 보세요.

// 가능합니다.

// 실무에서는...

let nextId = 0;

// function 대신 es6의 class 문법도 주로 쓰입니다.
function Fruit(name){
    // this = {};

    if(Fruit.cache.has(name)) return Fruit.cache.get(name);

    this.name = name;
    this.id = nextId++;

    this.toString = () => `id: ${this.id}, name: ${this.name}`;
    Fruit.cache.set(name, this);

    // return this;
}

Fruit.__proto__.cache = new Map();

// map의 다양한 메소드를 살펴봅시다.
// new Map().

const banana = new Fruit("banana");
const banana2 = new Fruit("banana");

console.log(`banana: ${banana.toString()}`);
console.log(`banana2: ${banana2.toString()}`);

console.log(`is Equal? ${banana === banana2}`);