import { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  const [enteredLocation, setenteredLocation] = useState("");

  function titleHandler(e) {
    setenteredTitle(e.target.value);
  }

  function amountHandler(e) {
    setenteredAmount(e.target.value);
  }

  function dateHandler(e) {
    setenteredDate(e.target.value);
  }

  function locationHandler(e) {
    setenteredLocation(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const expenseData = {
      id: Math.random(),
      title: enteredTitle,
      amount: enteredAmount,
      location: enteredLocation,
      date: new Date(enteredDate).toLocaleDateString(),
    };
    if ( enteredTitle === "" || enteredAmount === "" || enteredDate === "" || enteredLocation === '' ) {
          alert("Entered the Details");
    } else {
      props.onAddNewData(expenseData);
    }

    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
    setenteredLocation("");
  }

  return (
    <>
      <div className="flex items-center justify-center text-xl flex-wrap">
        <form className="flex gap-2 items-center text-center flex-wrap">
          <label htmlFor="expense-title">Expense title</label>
          <input
            type="text"
            id="expense-title"
            className="text-black p-0.5 pl-3 text-xl w-36"
            value={enteredTitle}
            onChange={titleHandler}
          />

          <label htmlFor="expense-amount">Expense Amount</label>
          <input
            type="number"
            id="expense-amount"
            placeholder="$"
            className="text-black p-0.5 pl-3 text-xl w-36"
            value={enteredAmount}
            onChange={amountHandler}
          />

          <label htmlFor="expense-amount">Expense Location</label>
          <input
            type="text"
            id="expense-location"
            className="text-black p-0.5 pl-3 text-xl w-36"
            value={enteredLocation}
            onChange={locationHandler}
          />

          <label htmlFor="expense-Date">Date</label>
          <input
            type="date"
            id="expense-Date"
            className="text-black p-0.5 pl-3 text-xl w-40"
            value={enteredDate}
            onChange={dateHandler}
          />

          <button
            className="bg-green-700 rounded-xl text-center py-2 px-4 border border-white hover:border-opacity-50"
            onClick={submitHandler}
          >
            Submit
          </button>
        </form>
      </div>
      
    </>
  );
}

export default ExpenseForm;
