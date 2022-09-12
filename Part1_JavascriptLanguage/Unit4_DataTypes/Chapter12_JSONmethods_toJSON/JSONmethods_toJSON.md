# Unit4 Data Types

- 컴퓨터간에 통신시, 객체 자체를 네트워크로 보낼 순 없다.
    - 응답값은 구조가 없기 때문에
    - 따라서, 직렬화하여 통신한다.
    - 응답받을 때, 문자열을 파싱해서 응답받음.
    - (ex) localStorage
- JSON(Javascript Object Notation)
    - 데이터 교환을 목적으로 한다.
    - 언어에 종속되지 않는다.

### Chapter 12 JSON과 메서드

- 컴퓨터간에 통신 시, 응답값은 구조가 없어서 객체같은 경우 문자열로 파싱해서 응답받는다.
- JSON은 이러한 데이터 교환을 목적으로 하는데, 자바스크립트에서 여러가지 관련 메서드를 제공한다.

#### JSON.stringify

- JSON.stringify
    - 객체를 JSON으로 바꿔준다.
        - 객체의 심볼형 프로퍼티에 따라 바뀐다.
    - JSON.stringfy로 변경된 문자열은 인코딩된/직렬화 처리된/문자열로 변환된/결집된 객체라고 부른다.
    - 문자열로 변환된 후 네트워크를 통해 전송하거나 저장소에 저장할 수 있다.
    - 순환 참조가 있는 객체는 JSON.stringify가 안 먹힌다.
        - Error: Converting circular structure to JSON
- 사용할 수 있는 자료형
    - 객체
    - 배열
    - 원시형(문자형/숫자형/불린형/null)
- 호출이 안되는 자료형(빈 객체만 반환됨.)
    - 함수 프로퍼티(메서드)
    - 심볼형 프로퍼티(키가 심볼)
        - (ex) [Symbol("id")]: 123,
    - value가 undefined인 프로퍼티
        - (ex) something: undefined,

```
const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

const json = JSON.stringify(student);

console.log(typeof json); // 문자열 string

console.log(json);
/* JSON으로 인코딩된 객체:
{
  "name": "John", // JSON에선 작은따옴표나 백틱을 사용할 수 없다.
  "age": 30, // 객체 프로퍼티 이름은 큰따옴표로 감싸야 한다.
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

#### replacer로 원하는 프로퍼티만 직렬화하기

#### space로 가독성 높이기

#### 커스텀 "toJSON"

#### JSON.parse

#### reviver 사용하기
