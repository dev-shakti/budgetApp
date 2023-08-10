import React, { useContext } from 'react'
import { budgetContext } from '../context/budgetContext'

const ExpenseTotal = () => {
  const { expenses } = useContext(budgetContext)
  const totalExpense = expenses.map((expense) => expense.cost).reduce((total, val) => {
    return total = total + val
  }, 0)

  return (
    <div className='alert alert-primary'>
      <span>Spent so far: ${totalExpense}</span>
    </div>
  )
}

export default ExpenseTotal
