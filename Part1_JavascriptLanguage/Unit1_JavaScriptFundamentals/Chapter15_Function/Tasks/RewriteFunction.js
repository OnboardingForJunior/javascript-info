// '?'나 '||'를 사용하여 함수 다시 작성하기
// if문을 사용하지 않고 동일한 동작을 하는 함수를 한 줄에 작성해보세요.

// 아래 조건을 충족하는 해답 2개를 작성해야 합니다.

// 물음표 연산자 ?를 사용하여 본문을 작성
// OR 연산자 ||를 사용하여 본문을 작성

function checkAge(age) {
    return age > 18 ? true : '보호자의 동의를 받으셨나요?';
}

while(true){
    let age = prompt("당신의 나이는 몇살입니까?", 18);
    alert(checkAge(age));

    if(age > 18) break;
}
