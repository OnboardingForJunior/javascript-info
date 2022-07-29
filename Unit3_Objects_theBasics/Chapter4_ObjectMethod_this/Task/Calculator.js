// calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.

// read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 입력받은 값은 객체의 프로퍼티에 저장합니다.
// sum()은 저장된 두 값의 합을 반환합니다.
// mul()은 저장된 두 값의 곱을 반환합니다.

let calculator = {
    read : function(){
        const array = prompt("더할값을 입력하세요.").split(" ");
        this.x = +array[0];
        this.y = +array[1];
    },
    sum : function(){return this.x + this.y;},
    mul : function(){return this.x * this.y;},
};

// 초기화: calculator.read를 호출했을때, 접근할 수 있는 this가 calculator(caller)가 됩니다.

calculator.read(); // this = calculator
alert( calculator.sum() );
alert( calculator.mul() );