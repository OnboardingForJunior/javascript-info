// 단일 연결 리스트 출력하기
// 중요도: 5
// 재귀와 스택에서 설명한 바 있는, 단일 연결 리스트(single-linked list)가 있다고 가정해 봅시다.

/*
  LinkedList
  head {value, next} => node {value, next} => tail {value, next}
  => node {value, next}
*/

/*
  Array => [0] : 1
  [0] : 1
  [1] : 3
  [2] : 4
  [3] : 10

  10개 공간을 할당해서 사용하다가 공간 부족하면 또 10개 할당
*/

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list){
  // console.log(list.value);
  // while(list.next) {
  //   list = list.next;
  //   console.log(list.value);
  // }
  console.log(list.value);
  if(list.next === null) return;
  printList(list.next);
}

printList(list); // 1, 2, 3, 4

// 리스트 내 항목을 차례대로 하나씩 출력해주는 함수 printList(list)를 만들어보세요.

// 반복문과 재귀를 사용한 답안을 각각 만들어봅시다.

// 그리고 재귀를 사용한 것과 재귀를 사용하지 않은 것 중 어떤 게 더 좋은 코드인지 생각해봅시다.