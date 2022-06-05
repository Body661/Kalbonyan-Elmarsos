let book = {
  title: "1984",
  writer: "George",
  pageCount: 300,
};
console.log(book);
console.log(`${book.title} by ${book.writer}`);

book.title = "WOOOW";
console.log(`${book.title} by ${book.writer}`);

//Challenge

let person = {
  name: "Abdolrahman",
  age: 16,
  location: "Amsterdam",
};

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
person.age++;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
