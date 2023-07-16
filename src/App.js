import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

   const EXPENSES = [
      { title: 'Car Insurance', date: new Date(2023, 8, 23), amount: 232.56 },
      { title: 'Monthly Recharge', date: new Date(2023, 8, 23), amount: 54.56 },
      { title: 'Personal Expenses', date: new Date(2023, 8, 23), amount: 897.99 },
      { title: 'Coding Expenses', date: new Date(2023, 8, 23), amount: 123.84 },
      { title: 'Home Expenses', date: new Date(2023, 8, 23), amount: 1435.34 }
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
