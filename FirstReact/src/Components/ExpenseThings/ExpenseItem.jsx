import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import ExpenseFilter from './ExpenseFilter';


const ExpenseItem = (props) => {
const changeFilterHandler = (year) =>{
    props.onYearChange(year);
}
let filteredItem = props.items;
if (props.year !== null) {
  filteredItem = props.items.filter((item) => {
    // return item.date.split("/")[2] === props.year;
   return item.date.substring(6) === props.year
  });
}

    return (
        <>
            <ExpenseFilter onChangeFilter={changeFilterHandler}/>
            {filteredItem.map((item)=>{     
                   return <div key={item.id} style={{ backgroundColor: "#4b4b4b" }} className={`w-3/4 flex items-center justify-between mx-auto my-4 rounded-3xl flex-wrap`}>  
                        <ExpenseDate date={item.date} />
                        <ExpenseDetails amount={item.amount} location={item.location} title={item.title} />
                    </div>   
                
                })
            }
        </>    
    );
}

export default ExpenseItem;