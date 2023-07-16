import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";

const App =()=>{
 const EXPENSES=[
    {title:'Car Insurance', date:new Date(2023, 8, 23), amount:232.56},
    {title:'Monthly Recharge', date:new Date(2023, 8, 23), amount:54.56},
    {title:'Personal Expenses', date:new Date(2023, 8, 23), amount:897.99},
    {title:'Coding Expenses', date:new Date(2023, 8, 23), amount:123.84},
    {title:'Home Expenses', date:new Date(2023, 8, 23), amount:1435.34}
  ]
  return <div><h2>Let's Start</h2>
  <ExpenseItem title={EXPENSES[0].title} date={EXPENSES[0].date} amount={EXPENSES[0].amount}/>
  <ExpenseItem title={EXPENSES[1].title} date={EXPENSES[1].date} amount={EXPENSES[1].amount}/>
  <ExpenseItem title={EXPENSES[2].title} date={EXPENSES[2].date} amount={EXPENSES[4].amount}/>
  <ExpenseItem title={EXPENSES[3].title} date={EXPENSES[3].date} amount={EXPENSES[3].amount}/>
  <ExpenseItem title={EXPENSES[4].title} date={EXPENSES[4].date} amount={EXPENSES[4].amount}/>
   </div>
}

export default App;
