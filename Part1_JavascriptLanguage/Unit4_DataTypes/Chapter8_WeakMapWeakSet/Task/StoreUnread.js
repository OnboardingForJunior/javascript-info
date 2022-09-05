// 읽은 날짜 저장하기
// 중요도: 5
// 이전 과제처럼 배열에 메시지를 저장하고 있다고 가정해 봅시다.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let storeSet = new WeakMap();
let storeDate = new Date(2022,07,26);

storeSet.set(storeDate, messages);
checkMessgaes(storeSet, storeDate);

function checkMessgaes(storeSet, storeDate){
    alert("메세지를 언제 읽었나요?");
    console.log(storeSet);
    return alert(storeSet.has(storeDate) ? storeDate.toLocaleDateString() : false);
}

storeDate = null;

// 이번 문제에선 "메시지를 언제 읽었나요?"라는 질문을 던지면 제대로 된 답이 반환되는 자료구조가 무엇인지 생각해봅시다.

// 위 문제에선 'yes’나 'no’만 저장해도 괜찮았는데, 이제는 날짜 정보를 저장해야 하고,
// 이 날짜 정보는 메시지가 기비지 컬렉션의 대상이 되기 전까지만 메모리에 남아있어야 합니다.

// 참고: Date라는 내장 클래스의 구현체(객체)를 사용하면 날짜를 저장할 수 있습니다(Date클래스에 대해선 추후에 학습할 예정입니다).