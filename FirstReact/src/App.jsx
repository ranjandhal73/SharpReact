import ExpenseItem from "./Components/ExpenseThings/ExpenseItem"
import Card from "./Components/ExpenseThings/UI/Card"
import ExpenseForm from "./Components/ExpenseThings/ExpenseForm";
import { useState } from "react";

const dummyData = [
  {
    id: 1,
    title: 'Movies',
    amount: 99,
    location: 'Mumbai',
    date: '12/01/2024'
  },
  {
    id: 2,
    title: 'Books',
    amount: 25,
    location: 'New York',
    date: '15/02/2024'
  },
  {
    id: 3,
    title: 'Groceries',
    amount: 50,
    location: 'London',
    date: '22/03/2024'
  },
  {
    id: 4,
    title: 'Dinner',
    amount: 30,
    location: 'Paris',
    date: '05/04/2024'
  },
  {
    id: 5,
    title: 'Clothing',
    amount: 75,
    location: 'Tokyo',
    date: '18/05/2024'
  },
  {
    id: 6,
    title: 'Electronics',
    amount: 120,
    location: 'Berlin',
    date: '26/06/2024'
  },
  {
    id: 7,
    title: 'Travel',
    amount: 200,
    location: 'Sydney',
    date: '10/07/2024'
  },
  {
    id: 8,
    title: 'Fitness',
    amount: 45,
    location: 'Rio de Janeiro',
    date: '14/08/2024'
  },
  {
    id: 9,
    title: 'Home Decor',
    amount: 80,
    location: 'Cape Town',
    date: '02/09/2024'
  },
  {
    id: 10,
    title: 'Gadgets',
    amount: 150,
    location: 'Seoul',
    date: '19/10/2024'
  }
];

const App = ()=> {
 const [data, setData] = useState(dummyData);

 function addNewData(item){
    setData((prevData)=>{
      return [...prevData,item]
    })
 }
  return (
    <Card>
        <p className='text-6xl text-center p-4 text-white'>Expense Item</p>
        <ExpenseForm  addNewData = {addNewData}/>
        <ExpenseItem items={data}/>
      </Card> 
  )
}

export default App
