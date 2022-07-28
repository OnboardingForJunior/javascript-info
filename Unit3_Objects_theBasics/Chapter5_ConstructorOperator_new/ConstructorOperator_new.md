# Unit3 Objects the Basics
<br>

### Chapter 5 Constructor Operator new
<br>

#### 생성자 함수
<br>

- new 생성자: 객체를 만들어주는 연산자
- JS에서 생성자 함수는 자기자신(this)를 반환한다.
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

- new.target은 
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

#### 생성자 내 메서드
<br>
