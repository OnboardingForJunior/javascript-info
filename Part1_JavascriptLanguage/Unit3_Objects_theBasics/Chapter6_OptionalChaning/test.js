const user = {
    adress:{
        street: "loloara"
    }
}

try{
    console.log(user.name.street);
} catch(e){
    console.log("no user.name key so ... generate user.name.street");
    user.name = {
        street:"loloara"
    }
    console.log(user.name.street);
}

const sayHi = () => console.log("hi");
const users = [{sayHi}, , null, undefined, {sayHi}, null, {sayHi}]
let x = 0;

users.forEach(user => user?.sayHi(x++));
// const normalUser = users.filter(user => user);
// normalUser.forEach(user => user.sayHi());

// console.log(`user count: ${normalUser.length}`);