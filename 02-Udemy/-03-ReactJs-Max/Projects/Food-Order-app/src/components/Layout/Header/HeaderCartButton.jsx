import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../../Context/CartContext";

const CartButton = (props) => {
    const [buttonBump, setButtonBump] = useState(false)
    const ctx = useContext(CartContext)

    const amountOfCartItems = ctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ''}`

    useEffect(() => {
        if (ctx.items.length === 0) {
            return
        }
        setButtonBump(true)
        const timer = setTimeout(() => {
            setButtonBump(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [ctx.items])

    return (
        <button className={btnClasses} onClick={props.onOpen}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Card
            </span>
            <span className={classes.badge}>{amountOfCartItems}</span>
        </button>
    )
}

export default CartButton