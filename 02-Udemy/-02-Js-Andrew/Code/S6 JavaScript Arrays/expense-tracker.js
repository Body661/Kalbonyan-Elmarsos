const account = {
  name: "Abdolrahman",
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },
  addIncome: function (description, amount) {
    this.income.push({ description, amount });
  },
  getSummary: function () {
    let inExpenses = 0;
    let inIncome = 0;
    this.expenses.forEach(function (expense) {
      inExpenses += expense.amount;
    });
    this.income.forEach(function (e) {
      inIncome += e.amount;
    });
    let total = inIncome - inExpenses;
    return `${this.name} has a balance of $${total}: $${inIncome} in income and $${inExpenses} in expenses`;
  },
};
account.addExpense("Gym", 950);
account.addExpense("Phone", 2);
account.addIncome("Work", 1000);
console.log(account.getSummary());
