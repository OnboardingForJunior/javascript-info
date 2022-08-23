// border-left-width를 borderLeftWidth로 변경하기
// 중요도: 5
// "my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한
// 문자열 "myShortString"로 변경해주는 함수를 작성해보세요.

// 대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.

// 예시:

function camelize(str){
	const arr = str.split("-");

    // 이름이 없는 함수 => 익명함수 (annonymous function)
    /*
        function() {}
        () => {}
    */

    arr.map((items, index, array) => {
        let glue = index !== 0 ? `${items[0]}`.toUpperCase() : items[0];
        array[index] = glue + items.slice(1,);
    });
    
    const subArr = arr.filter(items => items !== "undefined")
    
    return subArr.join("");
}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
// 힌트: split을 사용해 문자열을 배열로 바꾼 다음 join을 사용해 다시 합치면 됩니다.