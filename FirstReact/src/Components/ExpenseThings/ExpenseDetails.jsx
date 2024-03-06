import Button from "./Button";

const ExpenseDetails = (props) => {

  return (
    <div className="rounded-3xl p-4 items-center w-3/4 flex justify-around text-2xl flex-wrap">
      <div className=" w-1/3">{props.title}</div>
        <div className=" w-1/3">{props.location}</div>
        <div style={{backgroundColor: "#40005d"}}className=" w-2/10 bg-blue-700 rounded-xl text-center py-2 px-4">
          ${props.amount}
        </div>
        <Button name='Delete'/>
    </div>
  );
};

export default ExpenseDetails;
