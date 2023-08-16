import "./Expenses.css"
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    return (
        <Card className="expenses">
            <ExpenseItem title={props.expenses[0].title} price={props.expenses[0].price} date={props.expenses[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} price={props.expenses[1].price} date={props.expenses[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} price={props.expenses[2].price} date={props.expenses[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenses[3].title} price={props.expenses[3].price} date={props.expenses[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;