// 최대합 부분 배열
// 중요도: 2
// 입력값은 arr = [1, -2, 3, 4, -9, 6] 같이 숫자로만 구성된 배열이라고 가정해봅시다.

// 우리가 해야 할 일은 인접한 요소의 총합이 최대인 arr의 부분 배열을 찾는 것입니다.

// 부분 배열 요소들의 합을 리턴하는 함수 getMaxSubSum(arr)를 작성해 봅시다.

// 예시:

// 조건은 숫자로만 구성된 배열
// getMaxSubSum([-1, 2, 3, -9]) == 5 (강조 표시된 요소들의 합)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (모든 요소)
// 요소 전체가 음수라면 아무런 요소도 선택하지 않아야 최댓값이 됩니다(부분 배열은 빈 배열). 그리고 합은 0이 됩니다.

// getMaxSubSum([-1, -2, -3]) = 0;
// 가능하다면 성능을 고려하여 답안을 작성해 봅시다. 답안은 O(n2) 또는 O(n)까지 가능합니다.

const arr = [1, -2, 3];
const sum = []
// 1
// 1 -2
// 1 -2 3
// -2
// -2 3
// 3

function getMaxSubSum(parameterArr) {
    let maxOfSum = 0;

    for(let i = 0; i < parameterArr.length ; i++){
        const subArr = [];
        subArr.push(parameterArr[i]);
        sumSubArr(subArr);

        for(let j = i+1; j < parameterArr.length ; j++){
            subArr.push(parameterArr[j]);
            sumSubArr(subArr);
        }
    }

    function sumSubArr(item){
        let sumItem = 0;
        for(let i=0; i < item.length; i++){
            sumItem += item[i];
        }
        sum.push(sumItem);
    }

    for(let i = 0; i < sum.length; i++){
        if(sum[i] < sum[i+1]) {
            if (i+1 === sum.length) break;
            maxOfSum = sum[i+1];
        }
    }

    console.log(maxOfSum);
}

getMaxSubSum(arr);