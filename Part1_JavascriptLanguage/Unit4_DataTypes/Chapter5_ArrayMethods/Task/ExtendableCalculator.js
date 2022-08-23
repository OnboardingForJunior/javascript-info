// 확장 가능한 계산기
// 중요도: 5
// 기능을 "확장"할 수 있는 계산기 객체를 만들어 주는 생성자 함수 Calculator를 작성해봅시다.

// Calculator는 두 단계를 거쳐 만들 수 있습니다.

// 첫 번째 단계는 "1 + 2"와 같은 문자열을 받아서 “숫자 연산자 숫자” 형태(공백으로 구분)로 바꿔주는
// 메서드 calculate(str)를 구현하는 것입니다. 이 함수는 +와 -를 처리할 수 있어야 하고, 연산 결과를 반환해야 합니다.

// 예시:

/*
const calc = new Calculator();

function Calculator(){
    this.calculate = (str) => {
        const newArr = `${str}`.split(" ");
        const sumNumbers = (sum, current, index, array) => {
            const next = array[index+1];
    
            if(current === '+') sum += next;
            if(current === '-') sum -= next;
    
            return sum;
        }
    
        newArr.forEach((item, index, array) => {
            if(!isNaN(+item)) array[index] = +item;
        });
    
        return newArr.reduce(sumNumbers);    
    }
}

console.log( calc.calculate("3 + 7 - 6") ); // 4
*/
// 두 번째 단계는 계산기가 새로운 연산을 학습할 수 있도록 해주는 메서드 addMethod(name, func)를 추가해 주는 것입니다.
// 연산자 이름을 나타내는 name과 인수가 두개인 익명 함수 func(a,b)를 받는 새 메서드를 구현해야 하죠.

// 구현된 메서드를 이용해 곱셈 *과 나눗셈 /, 거듭제곱 **연산자를 추가해주는 예시는 아래와 같습니다.

const powerCalc = new Calculator();

function Calculator(){ // class function
    const store = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
    };

    this.addMethod = (name, func) => {
        store[name] = func;
    }

    this.calculate = (str) => {
        const newArr = `${str}`.split(" ");
        return store[newArr[1]](+newArr[0], +newArr[2]);
    }
}

// opperator : 연산자
powerCalc.addMethod("*", (a, b) => a * b); // mul
powerCalc.addMethod("/", (a, b) => a / b); // div
powerCalc.addMethod("**", (a, b) => a ** b); // square

const result1 = powerCalc.calculate("2 ** 3");
const result2 = powerCalc.calculate("2 * 3");
const result3 = powerCalc.calculate("9 / 3");
const result4 = powerCalc.calculate("9 - 3");
console.log( result1, result2, result3, result4 ); // 8

// 참고사항:

// 괄호나 복잡한 표현식 없이도 본 과제를 풀 수 있습니다.
// 숫자와 연산자는 공백 하나로 구분합니다.
// 에러 핸들링을 위한 코드를 추가해도 좋습니다(선택 사항).