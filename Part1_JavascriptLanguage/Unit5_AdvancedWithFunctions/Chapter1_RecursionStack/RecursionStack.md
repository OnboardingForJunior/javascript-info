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

#### pow(2, 3)

#### pow(2, 2)

#### pow(2, 1)

#### 실행 종료

#### 재귀적 순회

#### 재귀적 구조

- 연결 리스트