let mybook = {
  title: "1984",
  writer: "George",
  pageCount: 300,
};

let book2 = {
  title: "People History",
  writer: "Howard",
  pageCount: 700,
};

let books = function (book) {
  return {
    summary: `${book.title} by ${book.writer}`,
    pageCountSummary: `${book.title}: ${book.pageCount} pages long`,
  };
};

console.log(books(mybook).summary);
console.log(books(book2).pageCountSummary);

//challenge

let convertFahrenheit = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: ((fahrenheit - 32) * 5) / 9,
    tempInKelvin: ((fahrenheit + 459.67) * 5) / 9,
  };
};

console.log(convertFahrenheit(32));
