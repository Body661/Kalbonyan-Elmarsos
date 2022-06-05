let myName = " Abdolrahman Saleh ";

console.log(myName.length); // Length Property
console.log(myName.toUpperCase()); // Convert To upper case
console.log(myName.toLowerCase()); // Convert To lower case
console.log(myName.includes("A")); // Search in string
console.log(myName.includes("Z"));
console.log(myName.trim());

let isValidPass = function (pass) {
  return !pass.includes("password") && pass.length >= 8;
};

console.log(isValidPass("password"));
