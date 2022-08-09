// 최소에서 최대까지의 임의 정수
// 함수 랜덤 생성최소값과 최대값을 모두 포함하는 최소값에서 최대값까지의 임의의 정수값을 생성하는 정수(min, max)입니다.
// 간격 min의 임의의 숫자..max는 동일한 확률로 나타나야 합니다.

// 작업의 예:

function randomInteger(min,max){
    let randomValue = parseInt(Math.random()*(max-min));
    return min+(randomValue);
}

console.log( randomInteger(1, 5) ); // 1
console.log( randomInteger(1, 5) ); // 3
console.log( randomInteger(1, 5) ); // 5