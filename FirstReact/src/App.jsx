import ExpenseItem from "./Components/ExpenseItem"
import ItemList from "./Components/ItemList"

function App() {

  const list = [
    {
      expenstItem: 'Item1',
      expensePrice: 'Price1',
      LocationOfExpenditure: 'Location1',
    },
    {
      expenstItem: 'Item2',
      expensePrice: 'Price2',
      LocationOfExpenditure: 'Location2',
    },
    {
      expenstItem: 'Item3',
      expensePrice: 'Price3',
      LocationOfExpenditure: 'Location3',
    },
    {
      expenstItem: 'Item4',
      expensePrice: 'Price4',
      LocationOfExpenditure: 'Location4',
    },
    {
      expenstItem: 'Item5',
      expensePrice: 'Price5',
      LocationOfExpenditure: 'Location5',
    },
    {
      expenstItem: 'Item6',
      expensePrice: 'Price6',
      LocationOfExpenditure: 'Location6',
    },
    {
      expenstItem: 'Item7',
      expensePrice: 'Price7',
      LocationOfExpenditure: 'Location7',
    },
    {
      expenstItem: 'Item8',
      expensePrice: 'Price8',
      LocationOfExpenditure: 'Location8',
    },
    {
      expenstItem: 'Item9',
      expensePrice: 'Price9',
      LocationOfExpenditure: 'Location9',
    },
    {
      expenstItem: 'Item10',
      expensePrice: 'Price10',
      LocationOfExpenditure: 'Location10',
    }
  ];
  
  return (
      <>
        <ExpenseItem />
        <ItemList expenseList={list} />
      </>
  )
}

export default App
