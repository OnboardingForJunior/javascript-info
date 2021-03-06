// 객체에 프로퍼티가 하나도 없는 경우 true, 그렇지 않은 경우 false를 반환해주는 함수 isEmpty(obj)를 만들어 보세요.

// 아래와 같이 동작해야 합니다.

function isEmpty(obj){
//    for(let key in obj) {
//        if (obj[key]) return false;
//    }
//    return true;
    return Object.keys(obj).length > 0; // 위의 주석처리된 코드를 이렇게도 축약할 수 있다.
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false