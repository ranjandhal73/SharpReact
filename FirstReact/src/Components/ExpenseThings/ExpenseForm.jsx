import { useState } from "react";


function ExpenseForm() {
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');

    function formHandler(e){
      e.preventDefault();

      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate).toLocaleDateString()
      }
      console.log(expenseData);
      setenteredTitle('');
      setenteredAmount('');
      setenteredDate('');
    }

    function titleHandler(e){
      setenteredTitle(e.target.value)
    }

    function amountHandler(e){
      setenteredAmount(e.target.value)
    }

    function dateHandler(e){
      setenteredDate(e.target.value)
    }

  return (
    <>
      <div className="flex items-center justify-center text-xl flex-wrap">
        <form className="flex gap-2 items-center text-center flex-wrap" 
        >
        <label htmlFor="expense-title">Expense title</label>
        <input type="text" id="expense-title" 
        className="text-black pl-3 text-xl"
        value={enteredTitle}
        onChange={titleHandler}
        />

        <label htmlFor="expense-amount">Expense Amount</label>
        <input type="text" id="expense-amount" 
        className="text-black pl-3 text-xl"
        value={enteredAmount}
        onChange={amountHandler}  />

        <label htmlFor="expense-Date" >Date</label>
        <input type="date" id="expense-Date" 
        className="text-black pl-3 text-xl"
        value={enteredDate}
        onChange={dateHandler} />

        <button className="bg-green-700 rounded-xl text-center py-2 px-4 border border-white hover:border-opacity-50"
        onClick={formHandler}
        >Submit</button>
        </form>
      </div>
    </>
  );
}

export default ExpenseForm;
