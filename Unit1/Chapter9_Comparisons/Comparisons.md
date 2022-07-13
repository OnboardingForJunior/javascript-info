# Unit1 자바스크립트 기본
<br>

### Chapter9 Comparisons
<br>

#### 비교 연산자
- 동등 연산자'==' vs 일치 연산자'==='
	- '=='는 형변환이 일어나지만 '==='은 형변환이 일어나지 않아 타입 불일치시 false를 반환한다.
	- 특이 사항: null == undefined // true (실제론 아님)
- 비교 연산자 특징
	- 불린값을 반환한다. T / F
	- 비교하려는 값의 자료형이 다르면 이 값들을 숫자형으로 형변환 해준다.
	- 문자열 비교시 ASCII 코드, 유니코드를 통해 문자를 숫자로 변환할 수 있다.
- 비교 불가능한 undefined
	- console.log(undefined == 0); // false
- 유니코드 (ex) utf-8