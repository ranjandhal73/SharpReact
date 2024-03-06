

const ExpenseDate = (props) =>{
  return (
    <div className="date text-2xl p-2 bg-white text-black rounded-3xl text-center">
      {props.date}
    </div>
  );
}

export default ExpenseDate;