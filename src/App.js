import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

   const EXPENSES = [
      { id:'e1', title: 'Car Insurance', date: new Date(2023, 8, 23), amount: 232.56 },
      { id:'e2', title: 'Monthly Recharge', date: new Date(2022, 1, 23), amount: 54.56 },
      { id:'e3', title: 'Personal Expenses', date: new Date(2022, 7, 23), amount: 897.99 },
      { id:'e4', title: 'Coding Expenses', date: new Date(2021, 3, 23), amount: 123.84 },
      { id:'e5', title: 'Home Expenses', date: new Date(2020, 10  , 23), amount: 1435.34 }
   ]
   const App = () => {
   const [expenses, setExpenses] = useState(EXPENSES)
   const newExpensehandler =(userInput)=>{
setExpenses((prevValue)=>{
return [userInput, ...prevValue];
})
   }
   return <div>
      <NewExpense onSave={newExpensehandler}/>
      <Expenses items={expenses} />
   </div>
}

export default App;
