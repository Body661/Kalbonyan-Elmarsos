const squareLong = (num) => {
  return num * num;
};

const square = (num) => num * num;

console.log(square(2));

//**########################################################################################### */

const people = [
  {
    name: "Ahmed",
    age: 19,
  },
  {
    name: "mohammed",
    age: 32,
  },
  {
    name: "Abdolrahman",
    age: 16,
  },
];

// const under30 = people.filter(function (person) {
//   return person.age < 30;
// });

const under30 = people.filter((person) => person.age < 30);

console.log(under30);

const age19 = people.find((person) => person.age === 19);
console.log(age19.name);
