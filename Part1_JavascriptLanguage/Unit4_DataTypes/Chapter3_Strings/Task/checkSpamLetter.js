// =================================================================================

// 스팸 문자열 걸러내기
// str에 'viagra’나 'XXX’라는 문자열이 있으면 true를 반환해주는 함수 checkSpam(str)을 만들어보세요.
// 해당 문자열이 없으면 false를 반환하면 됩니다.
// 함수는 대·소문자 관계없이 해당 단어를 걸러주어야 합니다.

function checkSpam(str){
    str = str.toUpperCase();

    return str.includes("VIAGRA") || str.includes("XXX");
}

console.log(checkSpam('buy ViAgRA now') === true);
console.log(checkSpam('free xxxxx') === true);
console.log(checkSpam("innocent rabbit") === false);