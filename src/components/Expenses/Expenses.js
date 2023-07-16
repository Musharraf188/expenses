import React from "react";
import '../Expenses/Expenses.css';
import ExpenseItem from "./ExpenseItem";

const Expenses =(props)=>{
    return <div className="expenses">
  <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}/>
  <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount}/>
  <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[4].amount}/>
  <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount}/>
  <ExpenseItem title={props.items[4].title} date={props.items[4].date} amount={props.items[4].amount}/>
    </div>
}

export default Expenses;