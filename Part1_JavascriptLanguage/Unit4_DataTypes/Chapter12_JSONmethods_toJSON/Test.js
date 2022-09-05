const user = {
    age: 14,
    name: "jongku",
    birth: new Date("1994-03-16")
}

const userStr = JSON.stringify(user);

console.log("str", userStr);

const userObj = JSON.parse(userStr, (key, value) => {
    if(key === "birth") return new Date(value);
    return value;
});

// for(key of Object.keys(userObj)){
//     console.log(key);
// }

// for(value of Object.values(userObj)){
//     console.log(typeof value, value);
// }

console.log("obj", userStr); // obj {"age":14,"name":"jongku","birth":"1994-03-16T00:00:00.000Z"}
                                                                    // ㄴ> obj