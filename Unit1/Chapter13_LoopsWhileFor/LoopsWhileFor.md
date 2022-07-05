# Unit1 자바스크립트 기본
<br>

### Chpater13 Loops: While For
<br>
While과 For 반복문
- While과 For는 서로 표현 가능하다.

##### 'While' 반복문

- while([조건]){[액션]}
- while(true){[액션]} // 무한반복
- do{[액션]} while([조건]);
	- 가독성 때문에 잘 쓰지 않는다.

##### 'For' 반복문

- for([시작(지역변수,역할)];[조건];[단계]){[액션]}
- for(;;){[액션]} // 무한반복

##### 반복문 제어

- break: 반복문을 빠져나온다.
- continue: 뒷내용을 실행하지 않고, 다시 반복문으로 돌아간다.
- label: C언어의 goto랑 같다.
	- 잘 쓰지 않고 가독성이 나쁘다.
	- flag: label의 대체제, break 순간에 flag 변수를 true로 분기표시를 해 놓는다.