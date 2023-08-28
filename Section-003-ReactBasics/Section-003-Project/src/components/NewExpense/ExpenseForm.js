import React, {useState} from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    function inputChangeHandler(identifier, value){
        if(identifier === "title"){
            setEnteredTitle(value);
        }else if(identifier === "amount"){
            setEnteredAmount(value);
        }else if(identifier === "date"){
            setEnteredDate(value);
        }
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01"/>
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    );
}

export default ExpenseForm;