class Person {
  constructor(firtsName, lastName, age, likes = []) {
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firtsName} ${this.lastName} is ${this.age}`;

    this.likes.forEach((e) => {
      bio += ` | likes : ${e},`;
    });

    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firtsName = names[0];
    this.lastName = names[1];
  }
  get fullName() {
    return `${this.firtsName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firtsName, lastName, age, position, likes) {
    super(firtsName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName} is a ${this.position}`;
  }
  getYearsLeft() {
    return 68 - this.age;
  }
}

class student extends Person {
  constructor(firtsName, lastName, age, grade, likes) {
    super(firtsName, lastName, age, likes);
    this.grade = grade;
  }
  updateGrade(change = 0) {
    this.grade += change;
  }
  getBio() {
    const status = this.grade >= 70 ? "passing" : "failing";
    return `${this.firtsName} is ${status} the class`;
  }
}
const me = new Employee("Ahmed", "Mohammed", 19, "Developer ", []);
me.fullName = "Memmoooo hooooo";
console.log(me.getBio());
