const age = 16;
let message;

//* if (age >= 18) {
//*   message = "You can vote";
//* } else {
//*   message = "You can't vote";
//* }

message = age >= 16 ? "You can vote" : "You can't vote";
console.log(message);

const showPage = () => {
  console.log("Showing the page");
};
const ShowError = () => {
  console.log("Shownig the error page");
};

age >= 21 ? showPage() : ShowError();

// Challenge
const team = ["Tyler", "Porter"];

console.log(team.length <= 4 ? `Team Size: ${team.length}` : "Too many people on your team")


console.log(teamSize);
