import React, { useState, useRef } from "react";

import ErrorModel from "../UI/ErrorModel";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './styles/AddUser.module.css'
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState(false)

    const addUser = (event) => {
        event.preventDefault()
        const name = nameInputRef.current.value
        const age = ageInputRef.current.value

        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)',
            })
            return
        }
        if (+age < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age ( > 0)',
            })
            return
        }

        const userObject = {
            name,
            age,
            id: Math.random()
        }

        props.userData(userObject)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const closeError = () => {
        setError(null)
    }
    return (
        <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} onClick={closeError} />}
            <Card className={classes.input}>
                <form action="" onSubmit={addUser}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" ref={nameInputRef} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="Age (Years)" ref={ageInputRef} />
                    <Button type='submit'>Add User</Button >
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser