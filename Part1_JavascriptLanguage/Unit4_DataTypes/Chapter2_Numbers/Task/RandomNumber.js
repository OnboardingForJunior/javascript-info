// 함수 랜덤 생성최소값과 최대값을 모두 포함하는 최소값에서 최대값까지의 임의의 정수값을 생성하는 정수(min, max)입니다.
// 간격 min의 임의의 숫자 min..max는 동일한 확률로 나타나야 합니다.
// 작업의 예:

function random(min,max){
    return min+Math.random()*(max-min);
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );