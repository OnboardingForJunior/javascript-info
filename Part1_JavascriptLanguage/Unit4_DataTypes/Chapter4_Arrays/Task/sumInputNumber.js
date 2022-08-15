// 입력한 숫자의 합 구하기
// 중요도: 4
// 아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

// prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
// 숫자가 아닌 값, 혹은 빈 문자열을 입력하배열 요소의 합을 계산하고 리턴합니다.거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
// 
// 주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.

function sumInput(){
    const arr = [1,2,3,4,5];

    while(true){
        const n = prompt("숫자를 입력해주세요.", 0);
        if(n === "" || n === null) break;

        arr.push(+n);
    }

    let sum = 0;
    // reduce = 줄이다. map... map reduce 분산처리~ ^^, hadoop?
    // reduce 함수 ******
    alert(arr.reduce((prev, cur) => {return prev + cur;}, 0));
    // cur에 1,2,3,4,5가 들어온다!
    // prev는 arrowfunc에서 return한 값이 된다. for문처럼~
    // 처음에 리턴값이 없으니까 초기값 0설정

    for(const item of arr){
        sum += item;
    }

    alert(sum);
}

sumInput();