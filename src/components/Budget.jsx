import React, { useContext } from 'react'
import { budgetContext } from '../context/budgetContext'

const Budget = () => {

  const {budget}=useContext(budgetContext)

  return (
    <div className='alert alert-secondary'>
      <span>Budget: ${budget}</span>
    </div>
  )
}

export default Budget
