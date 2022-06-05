let name = "Abdolrahman"; //Global
if (true) {
  let name = "Ahmed"; //local
  if (true) {
    name = "Mohammed";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
