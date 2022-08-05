// 누산기 만들기
// 생성자 함수 Accumulator(startingValue)를 만들어 보세요.
// Accumulator(startingValue)를 이용해 만드는 객체는 아래와 같은 요건을 충족해야 합니다.

// 프로퍼티 value에 현재 값(current value)을 저장합니다. 최초 호출 시엔 생성자 함수의 인수, startingValue에서 시작값(starting value)을 받아옵니다.
// 메서드 read()에선 prompt 함수를 사용해 사용자로부터 숫자를 받아오고, 받은 숫자를 value에 더해줍니다.
// 프로퍼티 value엔 startingValue와 사용자가 입력한 모든 값의 총합이 더해져 저장됩니다.

// 데모를 위한 코드는 다음과 같습니다.

const accumulator = new Accumulator(1); // 최초값: 1

function Accumulator(startingValue){
    this.value = +(startingValue);

    // this.read = () => {
    //     return (this.value += +prompt("사용자 지정 숫자를 입력하세요.", 0));
    // }
    // 화살표 함수 read의 this가 작동하는 이유 : 화살표 함수 read 바깥의 일반 함수 Accumulator가 read의 this가 되어 객체인 accumulator를 받아오기 때문입니다.

    // Q. 일반 함수 메서드에서 바깥쪽의 this.value를 가져오는 방법이 있을까요?

    // 일반 함수는 호출하는 순간 caller가 this가 된다.
    // 화살표 함수는 정의하는 순간 바깥쪽 scope의 this가 this가 된다.
    // (화살표 함수 내의 this는 없음, 따라서 바깥쪽 scope가 일반 함수이어야지 this를 사용할 수 있음)

    // 그래서 화살표 함수의 this는 정적으로 설정되고 일반 함수는 동적으로 설정된다. (호출하는 환경에 따라 바뀌기 때문에)
    // apply, call 메서드를 통해 일반 함수의 this를 고정시킬 수 있다.

    this.read = function(){
        return (this.value += +prompt("사용자 지정 숫자를 입력하세요.", 0));
    }
    // 일반 함수 read의 this가 작동하는 이유 : 일반함수 read는 호출자인 객체 accumulator를 this로 받고있으므로 this가 적정하게 작동합니다.
}

accumulator.read(); // 사용자가 입력한 값을 더해줌
accumulator.read(); // 사용자가 입력한 값을 더해줌

console.log(accumulator.value); // 최초값과 사용자가 입력한 모든 값을 더해 출력함