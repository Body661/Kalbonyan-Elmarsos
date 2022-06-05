import { useState } from 'react';

import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";

import './styles/Espenses.css'

const Expenses = (props) => {

    const [selectedYear, setYear] = useState('2022')
    const setSelectedYear = (selectedYear) => {
        setYear(selectedYear)
    }

    const filteredExpenses = props.data.filter((expense) => {
        if (new Date(expense.date).getFullYear().toString() === selectedYear) {
            return expense
        }
    })


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter getSelectedYear={setSelectedYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} remove={props.remove} />
            </Card>
        </div>
    )
}

export default Expenses