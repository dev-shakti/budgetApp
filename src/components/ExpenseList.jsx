import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { budgetContext } from '../context/budgetContext'

const ExpenseList = () => {
  
  const {expenses}=useContext(budgetContext)

  return (
    <ul className='list-group mt-3 mb-3'>
      {
      expenses.map((expense) => {
        return <ExpenseItem expense={expense}/>
      })
      }
    </ul>
  )
}

export default ExpenseList
