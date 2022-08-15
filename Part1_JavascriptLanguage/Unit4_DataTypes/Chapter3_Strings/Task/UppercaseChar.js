// 첫 글자를 대문자로 변경하기
// str의 첫 글자를 대문자로 바꿔 반환하는 함수, ucFirst(str)를 만들어보세요. 함수 실행 결과는 아래 예시를 충족해야 합니다.

function ucFirst(str){
    return str[0].toUpperCase() + str.substring(1); // 끝값은 있어도 되고 없어도 되고.
}

console.log(ucFirst("john"));