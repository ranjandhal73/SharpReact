


function ExpenseForm() {

    function formHandler(e){
        let updateTitle = e.target.value;
        console.log(updateTitle)
    }

  return (
    <>
      <div className="flex items-center justify-center text-xl flex-wrap">
        <form className="flex gap-2 items-center text-center flex-wrap" onChange={formHandler}>
        <label htmlFor="expense-title">Expense title</label>
        <input type="text" id="expense-title" 
        className="text-black pl-3 text-xl" 
        />

        <label htmlFor="expense-amount">Expense Amount</label>
        <input type="text" id="expense-amount" className="text-black pl-3 text-xl"  />

        <label htmlFor="expense-Date" >Date</label>
        <input type="date" id="expense-Date" className="text-black pl-3 text-xl" />

        <button className="bg-green-700 rounded-xl text-center py-2 px-4 border border-white hover:border-opacity-50"
        >Submit</button>
        </form>
      </div>
    </>
  );
}

export default ExpenseForm;
