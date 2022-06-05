//* check if the user win the game

// const letterUnguessed = this.word.forEach((letter) => {
//   return !this.guessedLetters.includes(letter);
// });
// const finished = letterUnguessed.length === 0

//? Another way to solve the problem 2
// const finished = this.word.every((letter) => {
//   return this.guessedLetters.includes(letter);
// });

//*########################################################################################
const Person = function (firtsName, lastName, age, likes = []) {
  this.firtsName = firtsName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  let bio = `${this.firtsName} ${this.lastName} is ${this.age}`;

  this.likes.forEach((e) => {
    bio += ` | likes : ${e},`;
  });

  return bio;
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firtsName = names[0];
  this.lastName = names[1];
};
