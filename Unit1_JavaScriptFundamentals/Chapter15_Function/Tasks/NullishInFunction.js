// nullish(??) 사용
// 매개변수 'count'가 넘어오지 않으면 'unknown'을 출력해주는 함수
function showCount(count) {
  return count ?? "unknown";
}
console.log(showCount(0)); // 0
console.log(showCount(null)); // unknown
console.log(showCount()); // unknown