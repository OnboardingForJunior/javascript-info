# Unit1 자바스크립트 기본
<br>

### Chpater11 Logical Operators
<br>
자바스크립트엔 세 종류의 논리 연산자 ||(OR), &&(AND), !(NOT)이 있습니다.<br>
자바스크립트에서만 제공하는 논리연산자의 '추가’기능을 알아봅시다.

##### OR 연산자 '||'
<br>
- OR 연산자는 비교값중 가장 첫 번째 truthy 값을 반환한다. (형변환 전 모습으로)
- 피연산자중 true값이 아닌 값들은 제외시키고 판별한다.
- (ex) (null || 1) // 1
- (ex) (null || 0 || 1) // 1
- (ex) ("" || "" || "violet" || "anonymous") // violet
- 함수 로직으로 활용하기 편하다.

##### AND 연산자 '&&'
<br>
- OR 연산자는 비교값중 가장 첫 번째 falsy 값을 반환한다. (형변환 전 모습으로)
- 만약 피연산자에 false값이 없을때 마지막 truthy를 반환한다.
- (ex) (true && false) // false
- (ex) (1 && 5) // 5
- (ex) (1 && null && 3) // null -> null은 falsy!
- (ex) (1 && 3 && 44) // 44
- &&가 ||보다 우선순위 높다.

##### NOT 연산자 '!'
<br>
- 불린형(true / false)으로 변환
- !연산자: truthy일때, false 반환 falsy일때, true를 반환.
	- (ex) !23 // false
	- (ex) !0 // true
- !!연산자: truthy일때, true 반환 falsy일때, false를 반환.
	- (ex) !!23 // true
	- (ex) !!0 // false
