import Button from "./Button";
import { useState } from "react";

const ExpenseDetails = (props) => {
  const [changeExpense, setchangeExpense] = useState(props.amount);
  function editHandler(){
    setchangeExpense(100)
  }

  return (
    <div className="rounded-3xl p-4 items-center w-3/4 flex justify-around text-2xl flex-wrap">
      <div className=" w-1/5">{props.title}</div>
        <div className=" w-1/5">{props.location}</div>
        <div style={{backgroundColor: "#40005d"}}className=" w-1/10 bg-blue-700 rounded-xl text-center py-2 px-4">
          ${changeExpense}
        </div>
        {/* <EditBtn name='Edit'/> */}
        <button className="bg-blue-700 rounded-xl text-center py-2 px-4 border border-white hover:border-opacity-50 "
        onClick={editHandler}
        >Edit</button>
        <Button name='Delete'/>
    </div>
  );
};

export default ExpenseDetails;
