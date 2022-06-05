class Hangman {
    constructor(word, remainigGuesses) {
        this.word = word.toLowerCase().split("");
        this.remainigGuesses = remainigGuesses;
        this.guessedLetters = [];
        this.status = "playing";
    }
    getStatus() {
        //* check if the user win the game
        let finished = true;
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
            } else {
                finished = false;
            }
        });
        if (this.remainigGuesses === 0) {
            this.status = "failed";
        } else if (finished === true) {
            this.status = "win";
        }
    }
    get statusMessage() {
        if (this.status === "playing") {
            return `Guesses left: ${this.remainigGuesses}`;
        } else if (this.status === "failed") {
            return `Nice try the word was "${this.word.join("")}"`;
        } else {
            return "Great work! You guessed the word.";
        }
    }
    get puzzle() {
        let puzzle = "";
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {
                puzzle += letter;
            } else {
                puzzle += "*";
            }
        });
        return puzzle;
    }
    makingGuess(guess) {
        guess = guess.toLowerCase();
        //* Filter duplicated letters
        //? if (this.status === "playing") {
        //? }
        if (this.status !== "playing") {
            return;
        }

        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess);
            // this.guessedLetters = [...this.guessedLetters, guess] => The spread opreator

            if (!this.word.includes(guess)) {
                this.remainigGuesses--;
            }
        }
        this.getStatus();
    }
}

export { Hangman as default }
