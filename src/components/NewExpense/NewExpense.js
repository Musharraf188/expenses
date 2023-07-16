import React from "react";
import '../NewExpense/NewExpense.css';
import ExpenseForm from "../Expenses/ExpenseForm";

const NewExpense =(props)=>{
    const formDataHandler =(userInput)=>{
        const expenseData={
            ...userInput
        }
props.onSave(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSave={formDataHandler}/>
    </div>
}

export default NewExpense;