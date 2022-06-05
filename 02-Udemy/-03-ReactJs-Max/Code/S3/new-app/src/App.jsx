import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
  return (
    <div>
      <Expenses data={expenses} />
    </div>
  )
}

export default App;