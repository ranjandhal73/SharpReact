import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from "./UI/Card"

const ExpenseItem = (props) => {

    return (
        <Card>
            <p className='text-4xl text-center p-4 text-blue-600'>Expense Item</p>
            {
                props.items.map((item)=>{     
                   return <div key={item.id} style={{ backgroundColor: "#4b4b4b" }} className='w-3/4 flex items-center justify-between mx-auto my-4 rounded-3xl'>  
                        <ExpenseDate date={item.date} />
                        <ExpenseDetails amount={item.amount} location={item.location} title={item.title} />
                    </div>   
                
                })
            }
      </Card>
    );
}

export default ExpenseItem;