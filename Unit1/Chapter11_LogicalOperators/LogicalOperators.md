# Unit1 자바스크립트 기본
<br>

### Chpater11 Logical Operators
<br>

##### 논리 연산자
<br>

- OR 연산자는 true 값을 반환 (truthy)
- (ex) (null || 1) // 1
- (ex) (null || 0 || 1) // 1
- function시, 로직 활용 많음.
- &&연산자는 false가 있다면 false로 반환, 없다면 마지막 값 반환
- (ex) (true && false) // false
- (ex) (1 && 5) // 5
- (ex) (1 && null && 3) // null -> null은 falsy!
- !연산자: false 반환
- !!연산자: true 반환
- &&가 ||보다 우선순위 높다.
