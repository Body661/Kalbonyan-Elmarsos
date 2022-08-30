import React, { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [isValid, setIsValid] = useState(true)
    const amountRef = useRef()

    const submitHandler = event => {
        event.preventDefault()
        const enterdAmount = +amountRef.current.value

        if (enterdAmount < 1) {
            setIsValid(false)
            return
        }

        props.onAddToCart(enterdAmount)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input title='Amount' input={{ id: 'amount_' + props.id, type: 'number', min: '1', defaultValue: '1' }} ref={amountRef} />
            <button>+ Add</button>
            {!isValid && <p>Please enter valid amount</p>}
        </form>
    )
}

export default MealItemForm