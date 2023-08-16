/*
This function here is a React component.
It basically returns a special syntax called JSX that works very similar to HTML.
*/
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {id: "e1", title: "Toilet Paper", price: 2.99, date: new Date(2021, 2, 3)},
    {id: "e2", title: "New TV", price: 299.99, date: new Date(2021, 2, 4)},
    {id: "e3", title: "Car Insurance", price: 956.83, date: new Date(2021, 2, 5)},
    {id: "e4", title: "New Copic Marker Set", price: 99.99, date: new Date(2021, 2, 6)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
