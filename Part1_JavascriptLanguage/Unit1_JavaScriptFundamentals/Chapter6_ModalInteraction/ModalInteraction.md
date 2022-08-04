# Unit1 자바스크립트 기본
<br>

### Chapter6 Modal Interaction

alert, prompt, confirm을 이용한 상호작용

#### 브라우저 내에서 실행되는 인터페이스 기능
- alert
	- 모달 창에 결과값을 알림으로 띄워준다.
	- alert("hello"); // hello
	- console.log 대신 가시적으로 테스트 출력값을 볼 때 쓰이기도 한다.
- prompt
	- 모달 창에 값을 입력해 주도록 한다.
	- let age = prompt('나이를 입력해주세요.', 100); // age = 100 or 입력값
- confirm
	- 모달 창에 True False의 선택창을 띄워준다.
	- confirm("당신의 나이는 100살 입니까?"); // 예: true, 아니오: false