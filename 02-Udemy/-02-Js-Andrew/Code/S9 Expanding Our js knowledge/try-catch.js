const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Invalid value");
  }
};

try {
  const result = getTip(29);
  console.log(result);
} catch (e) {
    console.log('Catch block is running');
}
