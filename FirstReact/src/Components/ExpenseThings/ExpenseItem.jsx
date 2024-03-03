import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from "./UI/Card"

const ExpenseItem = (props) => {

    return (
        <Card>
            {
                props.items.map((item)=>{     
                   return <div key={item.id}>    
                        <ExpenseDate date={item.date} />
                        <ExpenseDetails amount={item.amount} location={item.location} title={item.title} />
                    </div>   
                
                })
            }
      </Card>
    );
}

export default ExpenseItem;