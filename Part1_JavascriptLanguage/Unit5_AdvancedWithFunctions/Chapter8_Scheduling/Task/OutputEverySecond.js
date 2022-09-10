// 일초 간격으로 숫자 출력하기
// 중요도: 5
// from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 함수 printNumbers(from, to)를 만들어보세요. 숫자는 일 초 간격으로 출력되어야 합니다.

// 두 가지 방법을 사용해 함수를 만드셔야 합니다.

// setInterval을 이용한 방법
// 함수 작성...

/*
function printNumbers(from, to){
    // 타이머 아이디
    const timerID = setInterval(() => {
                        // 가까운 scope가 접근되니까 여기 매개변수는 비워둠.
        console.log(from++);
        if(from > to) clearInterval(timerID);
    }, 1000);

    return timerID;
}

printNumbers(1, 10);
*/

// 중첩 setTimeout을 이용한 방법
// 함수 작성...

function printNumbers(from, to){
    // 함수가 실행되는 시간이 1초일때
    console.log(from++);
    setTimeout(function run(){
        if(from > to) return;
        console.log(from++);
        setTimeout(() => run(), 1000)
    },1000)
}

printNumbers(1, 10);