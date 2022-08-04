# Unit3 Objects the Basics
<br>

### Chapter 5 Constructor Operator new
<br>

#### 생성자 함수
<br>

- new 생성자: 객체를 만들어주는 연산자
- JS에서 생성자 함수는 자기자신(this)를 반환한다.
	- new와 함께 호출하면 내부에서 this가 생성되고 마지막에 this를 반환
- 생성자 함수는 반드시 new 연산자와 함께 호출


```
function User(name) {
  // this = {};  (빈 객체가 암시적으로 만들어짐)

  // 새로운 프로퍼티를 this에 추가함
  this.name = name;
  this.isAdmin = false;

  // return this;  (this가 암시적으로 반환됨)
}

let user = {
  name: "보라",
  isAdmin: false
};
```

- new를 쓰면 'this = {};'과 'return this;'가 자동 생성된다.

#### new.target과 생성자 함수
<br>

- new.target은 함수가 new와 함께 호출되었을때 함수 자체를 반환해준다.

```
function User() {
  console.log(new.target);
}

// 'new' 없이 호출함
User(); // undefined

// 'new'를 붙여 호출함
new User(); // function User { ... }
```

#### 생성자와 return문
<br>

- 객체를 return 한다면 this 대신 객체가 반환된다.
- 원시형을 return 한다면 return문이 무시된다.

#### 생성자 내 메서드
<br>

- 매개변수를 이용해 this에 메서드를 더해줄 수 있습니다.

```
// new User(name)는 프로퍼티 name과 메서드 sayHi를 가진 객체 생성

function User(name) {
  this.name = name;

  this.sayHi = function() {
    console.log( "제 이름은 " + this.name + "입니다." );
  };
}

let bora = new User("이보라");
bora.sayHi(); // 제 이름은 이보라입니다.

/*
bora = {
   name: "이보라",
   sayHi: function() { ... }
}
*/
```