// 배열은 복사가 될까요?
// 중요도: 3
// 아래 코드를 실행하면 어떤 결과가 나올까요?

// let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
// let shoppingCart = fruits;
// shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
// console.log( fruits.length ); // 4

// 복사가 안된다. 복사 = 로컬을 새로운 변수에 값만 복붙
// 쇼핑카트 참조값으로 push하면 fruits도 똑같이변해서

// 배열과 관련된 연산
// 중요도: 5
// 배열과 관련된 다섯 가지 연산을 해봅시다.

// 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
// "Rock-n-Roll"을 배열 끝에 추가합니다.
// 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서야 합도 잘 작동해니다.
// 배열의 첫 번째 요소를 꺼내서 출력합니다.
// "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
// 단계를 하나씩 거칠 때마다 배열 모습은 아래와 같이 변해야 합니다.

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

// const styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// const middleNum = Math.floor(styles.length / 2);
// styles[middleNum] = "Classics";
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Reggae");
// console.log(styles);

// 배열 컨텍스트에서 함수 호출하기
// 중요도: 5
// 아래 코드를 실행하면 어떤 결과가 나올까요? 그리고 그 이유는 무엇일까요?

// let arr = ["a", "b"];

// arr.push(function() {
//   console.log( this );
// })

// arr[2](); // ?

// function이 객체니까~

// 입력한 숫자의 합 구하기
// 중요도: 4
// 아래 조건을 만족하는 함수 sumInput()을 작성해 봅시다.

// prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 입력받은 값들을 배열에 저장합니다.
// 숫자가 아닌 값, 혹은 빈 문자열을 입력하배열 요소의 합을 계산하고 리턴합니다.거나 ‘Cancel’ 버튼을 누르면 질문을 멈춥니다.
// 
// 주의: 숫자 0은 유효한 숫자이므로, 사용자가 0을 입력하더라도 질문이 멈추지 말아야 합니다.

// function sumInput(){
//     const arr = [1,2,3,4,5];

//     while(true){
//         const n = prompt("숫자를 입력해주세요.", 0);
//         if(n === "" || n === null) break;

//         arr.push(+n);
//     }

//     let sum = 0;
    // reduce = 줄이다. map... map reduce 분산처리~ ^^, hadoop?
    // reduce 함수 ******
    // alert(arr.reduce((prev, cur) => {return prev + cur;}, 0));
    // cur에 1,2,3,4,5가 들어온다!
    // prev는 arrowfunc에서 return한 값이 된다. for문처럼~
    // 처음에 리턴값이 없으니까 초기값 0설정

    // for(const item of arr){
    //     sum += item;
    // }

    // alert(sum);
// }

// sumInput();

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

function getMaxSubSum(parameterArr) {
    for(let i = 0; i < parameterArr.length ; i++){
        const subArr = [];
        subArr.push(parameterArr[i]);
        for(let j = i+1; j < parameterArr.length ; j++){
            subArr.push(parameterArr[j]);
            // 다 푼담에 깃에 올리기!!!
        }
    }
}

getMaxSubSum(arr);