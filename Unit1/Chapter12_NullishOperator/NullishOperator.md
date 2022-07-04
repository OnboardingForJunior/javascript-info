# Unit1 자바스크립트 기본
<br>

### Chpater12 Nullish Operator
<br>
병합 연산자

##### nullish 병합 연산자 '??'

- null과 undefined를 제외한 첫번째 값을 반환해준다.
	- OR이 truthy값을 반환한다면, ??은 정의된(defined)값을 반환한다.
- (ex) (null ?? undefined ?? 33) // 33
- ??는 =와 ? 보다는 먼저 실행되고, 대부분의 연산자보다는 나중에 실행된다.
- ??는 &&나 ||와 함께 사용하지 못한다.