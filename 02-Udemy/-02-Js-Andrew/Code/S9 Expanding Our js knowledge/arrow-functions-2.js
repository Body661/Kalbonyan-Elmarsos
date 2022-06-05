const add = function () {
  return arguments[0] + arguments[1];
};

//! const add = () => arguments[0] + arguments[1]; ==> ERROR

console.log(add(12, 18, 24));

const person = {
  name: "Abdolrahman",
  age: 16,
  //!  getSummary: () => { ==> ERROR
  //!    return this.age;
  //!  },

  getSummary: function () {
    return this.age;
  },
};

console.log(person.getSummary());
