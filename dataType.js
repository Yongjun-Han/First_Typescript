// 동일하게 반복되는 부분을 alias(별칭)로 묶을 수 있다
// const playerName : {
//   name : string,
//   age? : number
// }
var playerNico = {
    name: "nico"
};
var playerLynn = {
    name: "Lynn",
    age: 12
};
//if(playerNico.age < 10) age 는 undefined 일수도 있기때문에 오류 발생 
if (playerNico.age && playerNico.age < 10) {
}
//함수의 Return----------------------------------------------------
function playerMaker1(name) {
    return {
        name: name
    };
}
var Nico1 = playerMaker1("nico");
Nico1.age = 11;
console.log(Nico1);
//---------------------------------------------------------------
function playerMaker2(name, age) {
    return {
        name: name,
        age: age
    };
}
var Nico2 = playerMaker2("nico", 12);
console.log(Nico2);
//---------------------------------------------------------------
var playerMakerArrow = function (name) { return ({ name: name }); };
var Lynn = playerMakerArrow("lynn");
Lynn.age = 16;
console.log(Lynn);
