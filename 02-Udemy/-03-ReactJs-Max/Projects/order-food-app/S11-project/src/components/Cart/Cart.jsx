import React, { useContext } from "react";

import Modal from "../UI/Modal";
import classes from './Cart.module.css'
import CartItem from "./CartItem";
import CartContext from "../../Context/CartContext";

const Cart = (props) => {
    const ctx = useContext(CartContext)
    const hasItems = ctx.items.length > 0

    const removeItem = (itemId) => {
        ctx.removeItem(itemId)
    }

    const addItem = (item) => {
        ctx.addItem({ ...item, amount: 1 })
    }

    const cartItems = (
        <ul className={classes['cart-items']}>
            {[...ctx.items].map((item) =>
                <CartItem
                    name={item.name}
                    price={item.price}
                    key={item.id}
                    amount={item.amount}
                    onRemove={removeItem.bind(null, item.id)}
                    onAdd={addItem.bind(null, item)} />)
            }
        </ul>
    )

    return (
        <Modal onClick={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']} >Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart