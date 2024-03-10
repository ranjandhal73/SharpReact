import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from "./UI/Card"

const ExpenseItem = (props) => {

    return (
        <>
            {props.items.map((item)=>{     
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