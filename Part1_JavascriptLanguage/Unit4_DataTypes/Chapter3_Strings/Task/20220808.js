// 첫 글자를 대문자로 변경하기
// str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족해야 합니다.

// function ucFirst(str){
//     return str[0].toUpperCase() + str.substring(1); // 끝값은 있어도 되고 없어도 되고.
// }

// console.log(ucFirst("john"));

// =================================================================================

// 스팸 문자열 걸러내기
// str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요.
// 해당 문자열이 없으면 false를 반환하면 됩니다.
// 함수는 대·소문자 관계없이 해당 단어를 걸러주어야 합니다.

// function checkSpam(str){
//     str = str.toUpperCase();

//     return str.includes("VIAGRA") || str.includes("XXX");
// }

// console.log(checkSpam('buy ViAgRA now') === true);
// console.log(checkSpam('free xxxxx') === true);
// console.log(checkSpam("innocent rabbit") === false);

// =================================================================================

// 문자열 줄이기
// str의 길이를 확인하고, 최대 길이 maxlength를 초과하는 경우
// str의 끝을 생략 부호 ("…")로 대체해주는 함수 truncate(str, maxlength)를 만들어봅시다.
// 새로 만든 문자열의 길이는 maxlength가 되어야 합니다.

// 함수의 반환 값은 원하는 길이로 줄여진 문자열이 되어야 합니다.

// 예시:

// function truncate(str, maxlength){
//     if(str.length > maxlength) return str.substring(0,maxlength-1) + "…";
                                // 0이상 19미만의 문자를 자르기 때문에!
//     return str;
// }

// console.log(truncate("What I'd like to tell on this topic is:", 20) === "What I'd like to te…");

// console.log(truncate("Hi everyone!", 20) === "Hi everyone!");

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