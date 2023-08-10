import React, { useContext } from 'react'
import { budgetContext } from '../context/budgetContext'

const Remaining = () => {

  const {expenses,budget}=useContext(budgetContext)
  const totalExpense = expenses.map((expense) => expense.cost).reduce((total, val) => {
    return total = total + val
  }, 0)
  
  const alertType = totalExpense > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget-totalExpense}</span>
    </div>
  )
}

export default Remaining
