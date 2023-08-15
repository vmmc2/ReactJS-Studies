/*
This function here is a React component.
It basically returns a special syntax called JSX that works very similar to HTML.
*/
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
