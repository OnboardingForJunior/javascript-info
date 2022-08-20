// 숫자만 추출하기
// 달러 표시가 먼저 나오고 그 뒤에 숫자가 나오는 문자열 "$120"가 있다고 가정해 봅시다.
// 위와 같은 문자열에서 숫자만 뽑아내는 함수 extractCurrencyValue(str)를 작성해 봅시다.

// 실행 결과는 아래와 같아야 합니다.

// function extractCurrencyValue(str){
//     let strNumber = "";
//     for (let i=0; i<str.length; i++){
//         if(0 <= (+str[i]) && (+str[i]) <= 9){
//             strNumber += str[i];
//         }
//     }
//     return strNumber;
// }

// console.log( extractCurrencyValue('$1ㅇㅇㅇ?222'));//  === 120  // true

function extractCurrencyValue(str){
    return +[...str].reduce((prev, cur) => {
        if(+cur >= 0 && +cur <= 9) return prev + cur;
        return prev;
    }, "")
}

console.log(extractCurrencyValue('$120'));