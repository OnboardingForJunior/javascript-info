# Unit3 Objects the Basics
<br>

### Chapter 4 Object Method this
<br>

#### 메서드 만들기
<br>

- method: 객체 프로퍼티에 할당된 함수
- js에서 function은 1급 객체라서 프로퍼티에 할당할 수 있습니다.
- 객체 안에 함수 변수를 넣을 수 있습니다.
- 함수도 key값으로 사용 가능하다.
- key : value구조에서 익명함수는 간략하게 단축할 수 있다. (arrow func으로도 응용 가능)
	- 'sayHi : function(){}'는 'sayHi(){}'와 같다
- admin['f'](); // admin.f();

#### 메서드에서의 this
<br>

- 메서드 내부에서 this 키워드를 사용하면 메서드가 있는 현재 객체에 접근할 수 있다.
	- [this].[key name] // key value
	- 메서드는 this로 객체를 참조하기 때문이다.
- 함수를 호출한 객체(부모)를 가리킴
	- [this].[method function]
- 점 앞의 this는 객체를 나타낸다.
- object.method()같이 ‘메서드’ 형태로 호출시, this는 object를 참조합니다.

#### 바운드가 없는 this
<br>

- this 값은 런타임에 결정된다.
- 모든 함수에 this를 사용할 수 있다.
- 함수가 호출되기 전까지 this엔 값이 할당되지 않는다.
- 동일한 함수라도 다른 객체에서 호출했다면 'this’가 참조하는 값이 달라진다.

#### this가 없는 화살표 함수
<br>

- arrow function은 this가 없다.
	- this가 없기 때문에 화살표 함수는 생성자 함수로 사용할 수 없다
	- 화살표 함수는 new와 함께 호출할 수 없습니다.

```
let user = {
  firstName: "보라",
  sayHi() {
	// arrow()의 this는 arrow()를 무시하고 외부 함수 user.sayHi()의 this가 된다.
    let arrow = () => console.log(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보라
```

- 임뮤터블: 불변성
- 뮤터블: 변화 (ex) this
	- js의 객체개념과 사응되지 않게 실행됨.