let myAccount = {
  name: "Abdolrahman",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function (account, amount) {
  account.income = account.income + amount;
};

let resetAccount = function (account) {
  account.income = 0;
  account.expenses = 0;
};

let accountSummary = function (account) {
  return `Account for ${account.name} has $${
    account.income - account.expenses
  }, $${account.income} in income, $${account.expenses} in expenses`;
};
addExpense(myAccount, 40);
addIncome(myAccount, 150);
console.log(accountSummary(myAccount));
resetAccount(myAccount);
console.log(accountSummary(myAccount));
