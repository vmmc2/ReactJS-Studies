/*
This function here is a React component.
It basically returns a special syntax called JSX that works very similar to HTML.
*/
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {id: "e1", title: "Toilet Paper", price: 2.99, date: new Date(2021, 2, 3)},
    {id: "e2", title: "New TV", price: 299.99, date: new Date(2021, 2, 4)},
    {id: "e3", title: "Car Insurance", price: 956.83, date: new Date(2021, 2, 5)},
    {id: "e4", title: "New Copic Marker Set", price: 99.99, date: new Date(2021, 2, 6)}
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
