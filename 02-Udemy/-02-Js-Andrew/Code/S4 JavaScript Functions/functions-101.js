let greatUser = function () {
  console.log("Hello");
};

greatUser();
greatUser();
greatUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(2);
console.log(value);

// challenge
let convertFahrenheitToCelsius = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let temp1 = convertFahrenheitToCelsius(32);
let temp2 = convertFahrenheitToCelsius(68);

console.log(temp1);
console.log(temp2);
