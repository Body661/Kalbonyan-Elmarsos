import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {

  const [value, setValue] = useState()

  const expenses = [
    {
      title: "Car",
      amount: 12000,
      date: new Date(2018, 5, 28),
    },
    {
      title: "Phone",
      amount: 1100,
      date: new Date(2020, 3, 30),
    },
    {
      title: "TV",
      amount: 400,
      date: new Date(2022, 1, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    // setValue(expenses.push(expense))
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onDataArive={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  )
}

export default App;