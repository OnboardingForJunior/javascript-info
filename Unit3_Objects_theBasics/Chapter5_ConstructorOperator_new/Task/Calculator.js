// 계산기 만들기
// 아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.

// read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, 이를 객체 프로퍼티에 저장합니다.
// sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
// mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.

const calculator = new Calculator();

function Calculator(){
    
    this.read = function(){
        this.num1 = +prompt("값을 반환하세요.", 0);
        this.num2 = +prompt("값을 반환하세요.", 0);
    }

    this.sum = function(){
        return this.num1 + this.num2;
    }

    this.mul = function(){
        return this.num1 * this.num2;        
    }

}

calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );