import React, { useContext, useState } from 'react'
import { budgetContext } from '../context/budgetContext'
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {

    const {dispatch}=useContext(budgetContext)

    const [name,setName]=useState("")
    const [cost,setCost]=useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const expenses={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost)
        }

        dispatch({
			type: 'ADD_EXPENSE',
			payload: expenses,
		});

        setName('')
        setCost('')
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label htmlFor="name">Name</label>
                    <input
                        type='text'
                        required
                        id="name"
                        className='form-control'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='col-sm col-lg-4'>
                    <label htmlFor="cost">Cost</label>
                    <input
                        type='text'
                        required
                        id="cost"
                        className='form-control' 
                        value={cost} 
                        onChange={(e) => setCost(e.target.value)}
                        />
                </div>
            </div>
            <div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>

        </form>

    )
}

export default ExpenseForm
