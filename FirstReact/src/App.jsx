import ExpenseItem from "./Components/ExpenseItem"


function App() {
  const data = [
    {
      title: 'Movies',
      amount: 99,
      location: 'Mumbai',
      date: '12/01/2024'
    },
    {
      title: 'Books',
      amount: 25,
      location: 'New York',
      date: '15/02/2024'
    },
    {
      title: 'Groceries',
      amount: 50,
      location: 'London',
      date: '22/03/2024'
    },
    {
      title: 'Dinner',
      amount: 30,
      location: 'Paris',
      date: '05/04/2024'
    },
    {
      title: 'Clothing',
      amount: 75,
      location: 'Tokyo',
      date: '18/05/2024'
    },
    {
      title: 'Electronics',
      amount: 120,
      location: 'Berlin',
      date: '26/06/2024'
    },
    {
      title: 'Travel',
      amount: 200,
      location: 'Sydney',
      date: '10/07/2024'
    },
    {
      title: 'Fitness',
      amount: 45,
      location: 'Rio de Janeiro',
      date: '14/08/2024'
    },
    {
      title: 'Home Decor',
      amount: 80,
      location: 'Cape Town',
      date: '02/09/2024'
    },
    {
      title: 'Gadgets',
      amount: 150,
      location: 'Seoul',
      date: '19/10/2024'
    }
  ];
  
  return (
      <>
        <ExpenseItem items={data}/>
      </>
  )
}

export default App
