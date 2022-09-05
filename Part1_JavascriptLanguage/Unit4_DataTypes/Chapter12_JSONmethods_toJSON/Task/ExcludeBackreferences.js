// 역참조 배제하기
// 중요도: 5
// 순환 참조가 있는 경우 프로퍼티 이름을 사용해 순환 참조를 만드는 프로퍼티를 직렬화에서 배제할 수 있습니다.

// 그런데 이 프로퍼티가 순환참조도 만들면서 일반 프로퍼티 역할을 하는 경우라면 단순히 이런 식으로 직렬화에서 배제할 수 없습니다. 이럴 땐 값을 이용해 해당 프로퍼티를 확인할 수밖에 없습니다.

// meetup을 참조하는 프로퍼티를 제외한 모든 프로퍼티를 직렬화해주는 replacer 함수를 작성해보세요.

let room = {
  number: 23
  // occupiedBy: meetup
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
  // self: meetup
};

// 순환 참조
// TypeError: Converting circular structure to JSON... 순환구조부터 없앱시다!
room.occupiedBy = meetup;
meetup.self = meetup;
// [[number, 23],[occupiedBy: meetup]]

console.log( JSON.stringify(meetup, function replacer(key, value) {
  if(key === "place") return JSON.parse(JSON.stringify(value, ["number"]));
                                                              // 키값 배열을 넣으면 해당 키값만 배열반환
  if(key === "self") return ;
  return value;
}));

/* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/