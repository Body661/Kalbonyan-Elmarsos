let add = function (a, b) {
  let result = a + b;
  return result;
};

let result = add(1, 2);
console.log(result);

let game = function (name = "player", score = 0) {
  // return "Name " + name + "- Score: " + score
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = game(undefined, 43);
console.log(scoreText);

//Challenge

let tipCalc = function (price, tipPercent = 0.15) {
  // return price * tipPercent;
  let percent = tipPercent * 100;
  let tip = price * tipPercent;
  return `A ${percent}% on $${price} would be $${tip}`;
};

let tip = tipCalc(100, 0.2);
console.log(tip);

//Template Strings

let name = "Abdolrahman";
let age = 16;
console.log(`Hey, my name is ${name}, I am ${age} years old`);
