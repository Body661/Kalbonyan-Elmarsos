let age: number;
age = 16;

let useName: string;
useName = "Abdolrahman";

let isDeveloper: boolean;
isDeveloper = true;

let hobbies: string[];
hobbies = ["Sport"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

let persons: Person[];

let course: string | number = "React";

course = 123;

// Functions

function add(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics

function insercAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insercAtBeginning(demoArray, 0);
