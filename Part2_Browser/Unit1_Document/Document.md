## Document

- document는 브라우저에 이미 존재하는 html을 가리키는 객체이다.
- console창에 document를 치면 페이지 위에 작성된 모든 html코드를 볼 수 있다.
- javascript는 html을 읽고 변경할 수 있게 설정되어 있다.
	- (ex) document.title // html 페이지 타이틀을 출력해준다.
	- (ex) document.title = "Hi" // html 페이지 타이틀을 변경시켜 준다.
- document 메서드
	- document.getElementId() // 해당 id의 html 태그를 불러와준다!
	- console.dir([html id]) 으로 추가 설정을 뭐뭐 가져올 수 있는지 확인가능.
	- document.querySelector() // querySelector는 첫번째로 검색된 element를 반환해준다.
	- // css Selector를 가져오기 때문에 #wrap .hello .h1 이런식으로 써야함!!
- 이벤트 메서드
	- Web API에서 확인가능
	- console.dir([something element])를 통해 콘솔창에 on[event 이름]으로 나온 property를 확인가능하다.
- 클릭 이벤트: addEventListner("click", [이벤트 메서드명])
- submit 이벤트: form 태그 안의 value를 브라우저에 넘겨준다.
	- 방금 일어난 event에 대한 정보를 지닌 argument(인자)를 가진 채로 호출이됨.
	- console.log([인자이름])을 통해 상세정보 확인 가능.
	- [인자이름].preventDefault();: event로 인해 자동적으로 일어나는 브라우저의 기본동작(ex. 새로고침)을 막아준다.