# Unit1 자바스크립트 기본
<br>

### Chpater7 Type Conversions
<br>

#### 형변환
- 수동 형변환: 변환하려하는 값 앞에 타입이름(Number, String, Boolean)을 붙이고 괄호안에 변환하려는 값을 넣는다!
	- (ex) Number("6"); // 6
<br>

- 숫자형으로 변환 (tip! 연산)
	- 문자열에 '+'를 제외한 다른 연산자가 붙으면 숫자형이 됩니다.
	- (ex) console.log("6"/"2") // 3
	- "\t", "\n"은 숫자형으로 변환 시 무시한다.
<br>

- 문자형으로 변환 (tip! 출력)
	- console.log로 출력시, 문자열로만 출력됨 or 문자열로 자동 형변환됨!
	- false는 문자열 "false"로, null은 문자열 "null"로
	- (ex) console.log(String(undefined)); // undefined
<br>

- 불린형으로 변환 (tip! 논리 연산 || &&)
	- null --> 0
	- true / false --> 1 / 0
	- false 값: 0, null, undefined, NaN, ""
	- True 값: false를 제외한 그외 값
	- string --> 0 or NaN ("", "\t", "\n"은 모두 0이다.)
	- (ex) console.log(Boolean("hello")); // true
	- (ex) console.log(Boolean(1)); // true
<br>

- 예외사항
	- undefined --> NaN