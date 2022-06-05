const gradeCalc = function (score, totalScore) {
  if (typeof score !== "number" || typeof totalScore !== "number") {
    throw Error("Invalid value");
  }

  const percent = (score / totalScore) * 100;
  let letter;
  if (percent >= 90) {
    letter = "A";
  } else if (percent >= 80) {
    letter = "B";
  } else if (percent >= 70) {
    letter = "C";
  } else if (percent >= 60) {
    letter = "D";
  } else {
    letter = "F";
  }
  return `You got a ${letter} (${percent}%)`;
};

try {
  console.log(gradeCalc(8, "100"));
} catch (e) {
  console.log("Please provide numbers only");
}
