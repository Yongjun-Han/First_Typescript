
// 동일하게 반복되는 부분을 alias(별칭)로 묶을 수 있다
// const playerName : {
  //   name : string,
  //   age? : number
  // }

  //Alias
type Player = {
  readonly name : string,
  age? : number //선택적인 값 은 ?를 붙인다.
}

const playerNico : Player= {
  name : "nico",
}

const playerLynn : Player = {
  name : "Lynn",
  age : 12
}

//if(playerNico.age < 10) age 는 undefined 일수도 있기때문에 오류 발생 
if(playerNico.age && playerNico.age < 10){
}

//함수의 Return----------------------------------------------------
function playerMaker1(name:string) : Player {
  return {
    name
  }
}
const Nico1 = playerMaker1("nico");
Nico1.age = 11;
console.log(Nico1)
//---------------------------------------------------------------
function playerMaker2(name:string, age:number) {
  return {
    name,
    age
  }
}
const Nico2 = playerMaker2("nico",12);
console.log(Nico2)
//---------------------------------------------------------------
const playerMakerArrow = (name:string) : Player => ({name})

const Lynn = playerMakerArrow("lynn")
Lynn.age = 16;
// Lynn.name = "Lyan" name 은 읽기전용 값이라 수정 불가 
console.log(Lynn)



