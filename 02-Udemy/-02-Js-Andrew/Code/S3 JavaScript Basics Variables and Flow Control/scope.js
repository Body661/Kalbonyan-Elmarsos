//Lexical scope (Static Scope)

let varOne = "varOne"; //Global Scope

if (true) {
  console.log(varOne);

  let varTwo = "varTwo"; //Local Scope
  console.log(varTwo);

  if (true) {
    let varFour = "varFour"; //Local Scope
  }
}

if (true) {
  let varThree = "varThree"; //Local Scope
}
console.log(varTwo); // Error
