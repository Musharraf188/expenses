import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App =()=>{
 const EXPENSES=[
    {title:'Car Insurance', date:new Date(2023, 8, 23), amount:232.56},
    {title:'Monthly Recharge', date:new Date(2023, 8, 23), amount:54.56},
    {title:'Personal Expenses', date:new Date(2023, 8, 23), amount:897.99},
    {title:'Coding Expenses', date:new Date(2023, 8, 23), amount:123.84},
    {title:'Home Expenses', date:new Date(2023, 8, 23), amount:1435.34}
  ]
  return <div><h2>Let's Start</h2>
<Expenses items={EXPENSES}/>
   </div>
}

export default App;
