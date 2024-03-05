


const ExpenseDetails = (props) => {
  return (
    <div className="rounded-3xl p-4 w-3/4 flex justify-around text-2xl items-center">
      <div className="">
        {props.title}
        </div>
        <div>{props.location}</div>
        <div style={{backgroundColor: "#40005d"}}className="bg-blue-700 rounded-xl text-center py-2 px-8">
          ${props.amount}
        </div>
      
    </div>
  );
};

export default ExpenseDetails;
