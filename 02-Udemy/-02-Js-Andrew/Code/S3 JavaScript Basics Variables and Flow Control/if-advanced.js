let isAccLocked = true;
let userRole = "admin";

if (isAccLocked) {
  console.log("Your account is locked");
} else if (userRole === "admin") {
  console.log("welcome admin");
} else {
  console.log("Welcome");
}

// challenge

let temp = 25;
if (temp <= 20) {
  console.log("It is freezing outside");
} else if (temp >= 35) {
  console.log("It is hot outside");
} else {
  console.log("It's fine to go outside");
}
