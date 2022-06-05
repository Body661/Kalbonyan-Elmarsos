let num = 123.845;

console.log(num.toFixed(2));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
console.log(Math.trunc(num));

let randomNum = Math.random();
console.log(randomNum);

let min = 20;
let max = 40;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//Challenge

let guessGame = function (guess) {
  let numToGuess = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  if (guess === numToGuess) {
    console.log("You win");
  } else {
    console.log(`Game over , num was ${numToGuess}`);
  }
};

guessGame(3);
