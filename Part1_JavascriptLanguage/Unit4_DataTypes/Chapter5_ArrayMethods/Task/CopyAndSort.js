// 배열 복사본을 정렬하기
// 중요도: 5
// 문자열이 담긴 배열 arr을 복사한 다음 해당 배열을 정렬해봅시다. 단 이때 arr은 변경되면 안 됩니다.

// 함수 copySorted(arr)는 복사 후 정렬된 배열을 반환해야 합니다.

const arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr){
    const copyArr = arr.slice();
    // start end값을 설정하지 않음으로써 배열 전체를 복사했다.
    return copyArr.sort();
}

const sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)