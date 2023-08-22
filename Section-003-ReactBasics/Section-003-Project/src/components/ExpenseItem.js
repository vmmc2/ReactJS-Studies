import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){
    const clickHandler = () => {
        console.log("Button was clicked!!!");
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2> {props.title} </h2>
                <div className="expense-item__price"> ${props.price} </div>
            </div>
            <button onClick={clickHandler}> Click Me! </button>
        </Card>
    );
}

export default ExpenseItem;