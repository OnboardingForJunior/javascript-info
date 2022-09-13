# Unit5 Advanced working with functions
<br>

### Chapter 1 재귀와 스택

- 자기자신을 호출하는걸 재귀하고 합니다.

#### 두 가지 사고방식


- 반복적인 사고를 통한 방법: for 루프
- 재귀적인 사고를 통한 방법: 작업을 단순화하고 자기 자신을 호출함
    - 재귀 깊이(recursion depth): 처음 호출을 포함한 중첩 호출의 최대 개수
    - pow(x, n)의 재귀 깊이는 n이다.
```
function pow(x, n) {
    if (n == 1) return x;
    return x * pow(x, n - 1);
}

console.log( pow(2, 3) ); // 8

// 재귀 단계
// pow(2, 3) = 2 * pow(2, 2)
// pow(2, 2) = 2 * pow(2, 1)
// pow(2, 1) = 2
```

#### 실행 컨텍스트와 스택

- 실행 컨텍스트(Execution Context)
    - 자바스크립트 코드가 실행되고 연산되는 범위를 나타내는 추상적인 개념.
    - 함수 실행에 대한 세부 정보를 담고 있는 내부 데이터 구조
    - (ex) 변수: 전역변수 / 지역변수 / 매개변수 / 객체의 프로퍼티
    - (ex) 함수 선언, 변수의 유효범위, this
    - 함수 호출 1회당 1개의 실행 컨텍스트가 생성된다.

- 중첩 호출의 실행절차
    - 함수의 실행이 일시중지된다.
    - 중지된 함수와 연관된 실행 컨텍스트는 실행 컨텍스트 스택이라는 자료구조에 저장된다.
    - 중첩 호출이 실행된다.
    - 중첩 호출 실행이 끝난 후 일시 중단한 실행 컨텍스트를 다시 불러오고 중단한 함수의 실행을 이어간다.

#### 재귀 호출에서의 실행 컨텍스트 진행과정

- 재귀 호출 코드는 반복문 코드로 재작성 가능하다.
- 반복문을 사용하면 함수 호출의 비용(메모리 사용)이 절약됩니다.

<br>

- 재귀 깊이가 3인 재귀호출의 진행과정

```
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log( pow(2, 3) );
```

- pow(2, 3)
    - 실행 컨텍스트에 변수 x = 2, n = 3이 저장된다.
    - Context: { x: 2, n: 3, at line 1 } call: pow(2, 3)
    - n == 1 을 만족하지 않아서 if의 두번째 분기로 넘어간다.
- pow(2, 2)
    - 중첩 호출을 하기 위해 실행 컨텍스트 스택에 저장한다.
    1. 스택 최상단에 현재 컨텍스트가 기록된다.
    2. 서브 호출을 위한 새로운 컨텍스트가 만들어진다.
    3. 서브 호출 이후 기존의 스택에서 꺼내(pop) 실행을 이어간다.
    - Context: { x: 2, n: 2, at line 1 } call: pow(2, 2) // 현재의 컨텍스트
    - Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)
- pow(2, 1)
    - Context: { x: 2, n: 1, at line 1 } call: pow(2, 1)
    - Context: { x: 2, n: 2, at line 5 } call: pow(2, 2)
    - Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)
- 실행 종료
    1. n == 1의 조건을 만족하는 pow(2, 1)가 실행, x값인 2가 반환된다.
        - 남아있는 실행 컨텍스
        - Context: { x: 2, n: 2, at line 5 } call: pow(2, 2)
        - Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)
    2. 맨 위의 이전 실행 컨텍스인 pow(2, 1)가 실행되고 x * pow (x, n - 1)가 계산되어 4를 반환한다.
        - 남아있는 실행 컨텍스
        - Context: { x: 2, n: 3, at line 5 } call: pow(2, 3)
    3. 마지막 컨텍스를 실행 pow(2, 3) = 8

#### 재귀적 순회

- 재귀적 순회로 임직원 객체의 급여 합계를 구하는 방법
1. 재귀의 베이스: 임직원 배열 을 가진 ‘단순한’ 부서
    - 간단한 반복문으로 급여 합계를 구할 수 있습니다.
2. 재귀의 단계: N개의 하위 부서가 있는 객체
    - 각 하위 부서에 속한 임직원의 급여 합계를 낸다.
    - N번의 재귀 호출을 하고, 최종적으로 모든 하위부서 임직원의 급여를 더합니다.

```
let company = { // 동일한 객체(간결성을 위해 약간 압축함)
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// 급여 합계를 구해주는 함수
function sumSalaries(department) {
  if (Array.isArray(department)) { // 첫 번째 경우: 결과를 바로 계산한다.
    return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
  } else { // 두 번째 경우: 서브 호출이 일어난다.
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
    }
    return sum;
  }
}

console.log(sumSalaries(company)); // 7700
```

#### 재귀적 구조

- 재귀적 자료 구조
    - 재귀적으로 정의된 자료구조
    - 자기 자신의 일부를 복제하는 형태의 자료 구조입니다.
- HTML, XML은 재귀적 자료 구조 형태 // Q. 자세한 설명이 듣고싶어요!
    - 일반 텍스트
    - HTML 주석
    - 이외의 HTML 태그(일반 텍스트, HTML-주석, 다른 HTML 태그가 올 수 있다.)
- 연결 리스트
    - 빠르게 삽입 혹은 삭제를 해야 할 때 배열 대신 쓰이는 자료구조이다.
    - 연결 리스트의 요소는 객체와 아래 프로퍼티들을 조합하여 정의한다.
    - value
    - next: 다음 연결 리스트 요소를 참조하는 프로퍼티. 다음 요소가 없을 때 null
    ```
    // 1. 문법
    let list1 = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
        next: {
            value: 4,
            next: null
        }
        }
    }
    };

    // 2. 다른 형태
    let list2 = { value: 1 };
    list2.next = { value: 2 };
    list2.next.next = { value: 3 };
    list2.next.next.next = { value: 4 };
    list2.next.next.next.next = null;
    // 1 ---> 2 ---> 3 ---> 4 ---> null

    // 3. 합치기
    let secondList = list.next.next;
    list.next.next = null;
    list.next.next = secondList;
    // list: 1 ---> 2 ---> null // Q. 이렇게 안나와요! 1 ---> 2 ---> 3 ---> 4 ---> null로 나와요
    // secondList: 3 ---> 4 ---> null

    // 4. 새로운 값 추가하기
    let list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };

    list = { value: "new item", next: list }; // list에 새로운 value를 추가합니다.
    // 'new item' ---> 1 ---> 2 ---> 3 ---> 4 ---> null
    ```