import React, { useContext } from 'react'
import { budgetContext } from '../context/budgetContext'
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({expense}) => {

  const {dispatch}=useContext(budgetContext)

  const deleteExpenses = (id) => {
      dispatch({
        type:"REMOVE_EXPENSE",
        payload:id
      })
  }

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {expense.name}
      <div>
        <span className=''>${expense.cost}</span>
      </div>
      < TiDelete size='1.5em' onClick={() => deleteExpenses(expense.id)}/>
    </li>
  )
}

export default ExpenseItem
