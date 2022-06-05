import React, { useState } from "react";

import './Styles/ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')

    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    const amountChange = (e) => {
        setAmount(e.target.value)
    }

    const dateChange = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const expenseObject = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseObject)
        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form action="" onSubmit={submitHandler} className='expenseForm'>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChange} required />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChange} required min='2019-01-01' max='2022-12-31' />
                </div>
            </div >
            <div className="new-expense__actions">
                <button type="button" onClick={props.cancelEditing}>Cancel</button>
                <button type="submit">New Expense</button>
            </div>
        </form >
    )
}

export default ExpenseForm