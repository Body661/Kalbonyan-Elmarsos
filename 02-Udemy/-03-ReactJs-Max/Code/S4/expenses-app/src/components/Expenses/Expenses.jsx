import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './styles/Espenses.css'
import { useState } from 'react';

const Expenses = (props) => {

    const [selectedYear, setYear] = useState()

    const setSelectedYear = (selectedYear) => {
        setYear(selectedYear)
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter getSelectedYear={setSelectedYear} />
                <ExpenseItem
                    title={props.data[0].title}
                    amount={props.data[0].amount}
                    date={props.data[0].date}
                />
                <ExpenseItem
                    title={props.data[1].title}
                    amount={props.data[1].amount}
                    date={props.data[1].date}
                />
                <ExpenseItem
                    title={props.data[2].title}
                    amount={props.data[2].amount}
                    date={props.data[2].date}
                />
            </Card>
        </div>
    )
}

export default Expenses