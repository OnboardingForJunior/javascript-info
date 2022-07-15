# Unit1 자바스크립트 기본
<br>

### Chapter3 Strict Mode
<br>

- 엄격 모드(strict mode)
	- ECMAScript(ES5)부터 생성되었다.
	- strict mode를 통해 지금의 문법과 맞지 않는 ES5 이전의 버전의 코드를 작동하지 못하게 한다.
	- use strict;
	- 코드 사용 규칙을 제한, 전역 변수 사용을 제한
	- (ex) 중복된 매개변수 이름을 사용하면 SyntaxError가 발생한다.
	- (ex) this 값이 null 또는 undefined인 경우 전역 객체로 변환하지 않는다.