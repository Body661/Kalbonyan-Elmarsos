const myFunc = () => {
  const msg = "Hello World";
  const printMsg = () => {
    console.log(msg);
  };
  return printMsg;
};

const myPrintMsg = myFunc();
myPrintMsg();

const createCounter = () => {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.getCount());

const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const adder = createAdder(10);
console.log(adder(12));
console.log(adder(-12));

const createTipper = (tip) => {
  return (amount) => {
    return amount * tip;
  };
};

const calcTips = createTipper(0.15);
console.log(calcTips(10));
