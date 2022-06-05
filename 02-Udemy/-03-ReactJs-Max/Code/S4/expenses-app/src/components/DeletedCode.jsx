import React, { useState } from "react"

const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
})

const titleChange = (e) => {
    setUserInput({
        ...userInput,
        enteredTitle: e.target.value
    })
}

const amountChange = (e) => {
    setUserInput({
        ...userInput,
        enteredAmount: e.target.value
    })
}

const dateChange = (e) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredDate: e.target.value
        }
    })
}