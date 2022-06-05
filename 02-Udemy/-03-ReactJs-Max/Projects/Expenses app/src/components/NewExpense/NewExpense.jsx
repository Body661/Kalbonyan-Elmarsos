import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import { v4 as uuidv4 } from 'uuid';
import './Styles/ExpenseForm.css'
import './Styles/NewExpense.css'

const NewExpense = (props) => {

    const [editing, setEditing] = useState(false);

    const saveExpenseDataHandler = (data) => {
        const expenseData = {
            ...data,
            id: uuidv4()
        }
        props.onDataArive(expenseData)
        setEditing(false)
    }

    const setEditingHadler = () => {
        setEditing(true)
    }

    const stopEditingHadler = () => {
        setEditing(false)
    }
    return (
        <div className='new-expense'>
            {!editing && <button onClick={setEditingHadler} >New Expense</button>}
            {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelEditing={stopEditingHadler} />}
        </div>
    )
}


export default NewExpense 