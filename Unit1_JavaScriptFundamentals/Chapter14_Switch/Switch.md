# Unit1 자바스크립트 기본
<br>

### Chapter14 Switch
<br>

- 작성법: switch(x) { case 'value1': ; .... }
- Switch는 if문과 서로 바꾸어 표현될 수 있다.
- Switch를 읽을 때엔 위에서부터 아래까지 순차적으로 case문을 읽는다.
- x값과 일치하는 value를 찾고 해당 value가 있는 case문부터 순차적으로 읽는다.
	- case문을 읽는 과정중 break문을 만나거나 switch 문이 끝나면 코드의 실행은 멈춘다.
- 값과 일치하는 case문이 없다면, default문 아래의 코드가 실행됩니다.
- 자료형 구분
	- prompt를 통해 입력한 글자는 String이 된다.
	- case문의 value는 변수타입을 구분한다.
	- (ex) case 1와 case '1'은 같지 않다.