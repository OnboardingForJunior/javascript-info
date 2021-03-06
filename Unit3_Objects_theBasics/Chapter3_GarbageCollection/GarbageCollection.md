# Unit3 Objects the Basics
<br>

### Chapter 3 Garbage Collection
<br>

자바스크립트 엔진이 어떻게 필요 없는 값들을 찾아내 삭제하는지 알아봅시다.

#### 가비지 컬렉션 기준
<br>

- 도달 가능성(reachability)을 통해 메모리 관리를 수행합니다.
	- 도달 가능한 값은 메모리에서 삭제되지 않습니다.
- 루트(root): 명확하게 도달 가능한 값
	- 현재 함수의 지역 변수와 매개변수
	- 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
	- 전역 변수
- 루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이다.

#### 참조 복사
<br>

- 할당연산자로 객체 참조값을 복사할 수 있습니다.
- 기존 변수에 다른값을 덮어씌워도 참조값이 복사된 전역변수를 통해서 객체에 접근가능하므로 객체는 사라지지 않는다.

#### 연결된 객체
<br>

- 프로퍼티가 객체와 참조를 통해 연결되어 있다면 도달 가능한 값이다.
- [객체].[프로퍼티]를 통해 참조값이 있는지 확인할 수 있다.

#### 도달할 수 없는 섬
<br>

- 근원 객체에 null을 할당한다면 아무것도 참조하지 않도록 할 수 있다.

#### 내부 알고리즘
<br>

- 가비지 컬렉터는 루트(root) 정보를 수집하고 루트가 참조하고 있는 모든 객체를 방문하여 이를 'mark(기억)' 합니다.
- mark 된 모든 객체에 방문하고 그 객체들이 참조하는 객체도 mark 합니다.
	- 한번 방문한 객체는 전부 mark 하기 때문에 중복이 일어나지 않습니다.
- 루트에서 도달 가능한 모든 객체를 방문할 때까지 위 과정을 반복합니다.
- mark 되지 않은 모든 객체를 메모리에서 삭제합니다.
- 이를 통해 가비지컬렉터는 불필요한 값을 삭제해준다.