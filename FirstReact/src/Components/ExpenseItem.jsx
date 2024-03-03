import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

function ExpenseItem(props){

    return (
      <>
            {
                props.items.map((item)=>{     
                   return <div key={item.title}>        
                        <ExpenseDate date={item.date} />
                        <ExpenseDetails amount={item.amount} location={item.location} title={item.title} />
                    </div> 
                })
            }
      </>
    );
}

export default ExpenseItem;