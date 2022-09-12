// 단일 연결 리스트를 역순으로 출력하기
// 중요도: 5

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

// (1) 반복문
// function printList(list){
//   let arr = [list.value];

//   while(list.next) {
//     list = list.next;
//     arr.push(list.value);
//   }

//   return arr.reverse();
// }

// (2) 재귀문
function printList(list){
    if(list.next) printList(list.next); // 브레이크포인트 null일때 거꾸로 돌아간다.
    console.log(list.value);
}

printList(list); // 1, 2, 3, 4

// OutputSingleLinkedList.js(단일 연결 리스트 출력하기)에 있는 단일 연결 리스트의 항목을 역순으로 출력해주는 함수를 만들어봅시다.

// 반복문과 재귀를 사용한 답안을 각각 만들어보세요.