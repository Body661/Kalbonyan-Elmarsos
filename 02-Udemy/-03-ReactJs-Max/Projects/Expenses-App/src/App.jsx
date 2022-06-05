import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState, setState } from "react";

const getSavedExpenses = function () {
  const JSONExpenses = localStorage.getItem("expenses");

  if (JSONExpenses !== null) {
    return JSON.parse(JSONExpenses);
  } else {
    return [];
  }
};

let expensesList = getSavedExpenses()

const saveExpenses = function (expensesList) {
  localStorage.setItem("expenses", JSON.stringify(expensesList));
};

const App = () => {
  const [expenses, setExpenses] = useState(expensesList)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      expensesList.unshift(expense)
      return [expense, ...prevExpenses]
    })
    saveExpenses(expensesList)
  }

  const removeExpense = (expenseId) => {
    const expenseIndex = expensesList.findIndex((expense) => expense.id === expenseId);

    if (expenseIndex > -1) {
      expensesList.splice(expenseIndex, 1);
      setExpenses((prevExpenses) => {
        return [...prevExpenses]
      })
    }
    saveExpenses(expensesList)
  };

  return (
    <div>
      <NewExpense onDataArive={addExpenseHandler} />
      <Expenses data={expensesList} remove={removeExpense} />
    </div>
  )
}

export default App;