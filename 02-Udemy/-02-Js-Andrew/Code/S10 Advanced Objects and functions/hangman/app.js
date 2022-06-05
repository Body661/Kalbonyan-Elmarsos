const puzzelEl = document.querySelector(".puzzel");
const guessesEl = document.querySelector(".guesses");
const game1 = new Hangman("car parts", 4);

puzzelEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makingGuess(guess);
  puzzelEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});
