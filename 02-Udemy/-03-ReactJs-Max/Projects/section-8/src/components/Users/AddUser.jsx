import React, { useState } from "react";

import ErrorModel from "../UI/ErrorModel";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './styles/AddUser.module.css'

const AddUser = (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState(false)

    const addUser = (event) => {
        event.preventDefault()

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
        setName('')
        setAge('')
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const closeError = () => {
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModel title={error.title} message={error.message} onClick={closeError} />}
            <Card className={classes.input}>
                <form action="" onSubmit={addUser}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={name} onChange={nameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="Age (Years)" value={age} onChange={ageChangeHandler} />
                    <Button type='submit'>Add User</Button >
                </form>
            </Card>
        </div>
    )

}

export default AddUser