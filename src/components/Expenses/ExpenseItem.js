import React from "react";
import '../Expenses/ExpenseItem.css';
const ExpenseItem = () => {
    return <div className="expense-item">
        <div>{}</div>
        <div className="expense-item__description"><h2>{}</h2>
        <div className="expense-item__price">{}</div>
        </div>
    </div>
}

export default ExpenseItem;