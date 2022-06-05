import Hangman from "./hangman"
import getPuzzle from './requests'

const puzzleEl = document.querySelector(".puzzle");
const guessesEl = document.querySelector(".guesses");

let game;

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.makingGuess(guess);
    render()
});

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game.statusMessage;

    game.puzzle.split('').forEach(letter => {
        const letterSpan = document.createElement('span')
        letterSpan.textContent = letter
        puzzleEl.appendChild(letterSpan)
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5);
    render()
}

document.querySelector('.reset').onclick = () => {
    startGame()
}

startGame()