import React from 'react'
import ExpenseForm from './ExpenseForm'
import { v4 as uuidv4 } from 'uuid';

import './Styles/NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: uuidv4()
        }
        props.onDataArive(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}


export default NewExpense 