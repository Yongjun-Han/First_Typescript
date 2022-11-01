function original(a,b) {
  if(typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    console.log("변수타입 에러")
  }
}
console.log(original("1","2"));