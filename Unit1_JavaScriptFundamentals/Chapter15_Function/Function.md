# Unit1 자바스크립트 기본
<br>

### Chapter15 Function
<br>
- 좋은 함수는 return을 통해 출력 부분 입력 부분을 나누어야 한다.
- 나쁜 함수

```
function bad(){
	alert("Hello");
}
```

- 지역변수: 지역변수는 함수 안에서만 접근 가능하다.
- 외부변수: 내부에 변수가 없을 때 외부에서 찾는 것
- 전역변수: 함수 외부에 선언된 변수
	- 전역 변수는 같은 이름을 가진 지역 변수가 없는 모든 함수에서 접근할 수 있습니다.
	- 전역변수는 클로저 이용하여 지역변수(개별변수)로 전환한다.
	- Closure(클로저): 외부 Scope(스코프) 변수 영역
	- Scope(스코프): 블록 안을 뜻한다. 제일 외부는 global scope
	- scope끼리는 체인으로 연결되어 있기 때문에 Closure 현상이 일어난다.
- 매개변수(parameter): 임의의 데이터를 함수 안에 전달하는 변수다.
	- 함수에 전달된 매개변수는 복사된 후 함수의 지역변수가 된다.
- 매개변수 기본값: 매개변수에 값을 전달하지 않으면 그 값은 undefined가 된다.
	- 매개변수를 초기화하면 기본값을 내 마음대로 설정할 수 있다.
<br>

- 반환값: 함수를 호출했을 때 함수를 호출한 장소에 특정 값을 반환
	- f(x)를 호출하면, x에 특정 변수값(인수)를 가지고 함수 f를 통과해서 f(x)자리에 반환값을 돌려준다.
	- return을 통해 반환하는데, 함수 내 어디서든 사용 가능하다.
	- 조건문에 쓸 경우 한 함수 내에 여러개의 반환값을 설정 가능하다.
	- 모든 함수에는 기본적으로 return undefined가 있다.
	- return시 줄바꾸면 자동으로 세미클론 처리 되므로 한줄 이상 작성시 {}블록으로 처리한다.
	
- 함수 이름: 함수가 하는 일(동작)을 설명해주는 이름을 짓도록 하자.