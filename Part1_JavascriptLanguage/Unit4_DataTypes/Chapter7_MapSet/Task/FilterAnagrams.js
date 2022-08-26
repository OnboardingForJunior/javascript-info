// ============================================================================

// 애너그램 걸러내기
// 중요도: 4
// 애너그램(어구전철)은 단어나 문장을 구성하고 있는 문자의 순서를 바꾸어 다른 단어나 문장을 만드는 놀이입니다.

// 예시:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// 애너그램으로 만든 단어를 걸러내는 함수 aclean(arr)을 만들어보세요.
// 에너그램으로 만든 단어 = 본래단어 ! 이렇게중복제거해라

// 예시:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
// 애너그램 그룹에서 한 단어는 남아있어야 합니다.

function aclean(arr){
    const mapObj = new Map();
    arr.forEach(element => {
        const setItem = element.split("").sort().join("").toLowerCase();
        mapObj.set(setItem, element); // 키 밸류를 저장
        // 키랑 밸류를 파라미터로 쓴다. 중복 키값은 저장하지 않게해줌 set메소드가
    });

    return [...mapObj.values()];
}