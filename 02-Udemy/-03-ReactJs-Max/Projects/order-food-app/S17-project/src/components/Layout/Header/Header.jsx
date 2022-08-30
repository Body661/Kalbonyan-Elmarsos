import React from 'react'
import classes from './Header.module.css'
import meals from '../../../Imgs/meals.jpg'
import CartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton onOpen={props.onOpen} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="" />
            </div>
        </React.Fragment>
    )
}

export default Header