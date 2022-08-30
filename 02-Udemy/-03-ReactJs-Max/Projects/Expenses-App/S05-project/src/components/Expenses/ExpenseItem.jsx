import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './styles/ExpeseItem.css'


const ExpenseItem = (props) => {

    let id;

    const remove = () => {
        id = props.id
        props.remove(id)
    }
    // console.log(props)

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={new Date(props.date)} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>

                    <div className='remove-price'>
                        <div className="expense-item__price">${props.amount}</div>
                        <button className='expense-item__remove' onClick={remove}>Remove</button>
                    </div>
                </div>
            </Card>
        </li>
    )
}


export default ExpenseItem 