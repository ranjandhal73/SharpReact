


function ItemList(props) {
    return (
        <>
           {props.expenseList.map((items)=>{
                return <p><b>Expense Item:</b>{items.expenstItem} - <b>Expense Price:</b>{items.expensePrice} - <b>LocationOfExpenditure:</b>{items.LocationOfExpenditure}</p>
           })}         
        </>
    )
}

export default ItemList;