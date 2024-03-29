// 특정 범위에 속하는 요소 찾기(배열 변경하기)
// 중요도: 4
// 배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요.
// 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

// 작성한 함수는 기존 배열을 변경하기만 하고 아무것도 반환하지 않아야 합니다.

// 예시:

const arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b){
    arr.forEach((items, index, array) => {
        if(items >= a && items <= b) array[index] = items;
        else array.splice(index, 1);
    });
    // for문은 반복문이라서 break, continue를 쓸 수 있다.
    // forEach에서는 break, continue가 없는데, return으로 continue를 대신해서 쓸 수 있다..
}

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

console.log( arr ); // [3, 1]