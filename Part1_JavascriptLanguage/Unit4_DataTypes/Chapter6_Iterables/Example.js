const obj = {}

// iterable한 객체
obj[Symbol.iterator] = function() {
    return {
        next : function(){
            return {done : false, value : 0};
        }
    }
}

// iterable한 객체만 사용가능
for(let a of obj) {}
obj.forEach(element => {});

// (1) Symbol.iterator 함수를 호출해서 iterator 객체 반환
const it = obj[Symbol.iterator]();

// (2) 다음 값을 a 변수에 담고, 끝인지 확인한다.
const nextObj = next();
if(nextObj.done) return;
// done이 true이면 value에 접근하지 않음.
let a = nextObj.value;

// (3) nextObj.done이 false인 경우 (2)를 반복한다.


// string array가 forEach나 for..of를 쓸수 있는 이유
String[Symbol.iterator]
Array[Symbol.iterator]
// 이미 정의되어 있어서!

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
}

arrayLike[Symbol.iterator] = function(){
    return {
        obj: Object.entries(this),
        index: 0,
        
        next:function(){
            if(this.index === this.obj.length || this.obj[this.index][0] === 'length') return {done: true};
            return {done: false, value: this.obj[this.index++][1]};
        }
    }
}

for (let item of arrayLike){
    console.log(item);
}

const obj = {length: 10}; // non iterable
const arr = Array.from(obj, () => 0); // iterable 하다.
const tbt = Array.from({length: 10}, (v1, k1) =>
                            Array.from({length: 3}, (v2, k2) => k1*3 + k2)
                        );

console.log("arr", arr);
console.log("tbt", tbt);