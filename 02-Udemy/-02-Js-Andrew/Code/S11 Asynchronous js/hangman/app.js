const puzzleEl = document.querySelector(".puzzel");
const guessesEl = document.querySelector(".guesses");

let game;

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game.makingGuess(guess);
  render()
});

const render = () => {
  puzzleEl.textContent = game.puzzle;
  guessesEl.textContent = game.statusMessage;
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game = new Hangman(puzzle, 5);
  render()
}

document.querySelector('.reset').onclick = () => {
  startGame()
}

startGame()