interface ObjInterface{
    id: number;
    pw: string;
}

const obj2 = {
    id: "123",
    pw: "456"
};

// Typescript <= 새로운 언어x
function login2({id, pw} : ObjInterface) : string {
    console.log(id, pw);
    return "clear";
}

// Typescript
// Sugar Syntax : 개꿀문법(개발자에게 참 쉽다.)

// Transfiling

// Typescript => transfiling 과정 => Javascript 변환됨.
// React js => tsx => jsx => transfiling => Javascript (.js)

// 개발은 여러 파일로 분리해서
// => 하나의 파일로 합쳐주는 일 => webpack

// VanillaJS webpack, babel 포함시키는게 개발다운 개발~

// typescript확인하는거는 여기서 tsc로 보면 javascript로 변환되서 값 찍힘.