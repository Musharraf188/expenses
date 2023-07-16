import React, { useState } from "react";
import '../Expenses/Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('2022')
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }
    const filterExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear
    })
    return <Card className="expenses">
        <ExpenseFilter onSave={filterChangeHandler} />
        <ExpenseChart item={filterExpense}/>
       <ExpenseList items={filterExpense} />
        {/* <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}/>
  <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount}/>
  <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[4].amount}/>
  <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount}/>
  <ExpenseItem title={props.items[4].title} date={props.items[4].date} amount={props.items[4].amount}/> */}
    </Card>
}

export default Expenses;