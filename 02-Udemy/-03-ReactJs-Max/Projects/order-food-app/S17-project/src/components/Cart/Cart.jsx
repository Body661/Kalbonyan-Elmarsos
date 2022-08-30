import React, { useContext, useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../Context/CartContext";
import Checkout from "./Checkout";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const hasItems = ctx.items.length > 0;

  const [checkoutFormState, setCheckoutState] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const removeItem = (itemId) => {
    ctx.removeItem(itemId);
  };

  const addItem = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[...ctx.items].map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          key={item.id}
          amount={item.amount}
          onRemove={removeItem.bind(null, item.id)}
          onAdd={addItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setCheckoutState(true);
  };

  const submitOrder = async (userData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://food-order-6438a-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            userData: userData,
            orderdItems: ctx.items,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Some thing went wrong");
      }
    } catch (error) {}

    setIsSubmitting(false);
    setDidSubmit(true);
    ctx.clearCart()
  };

  const modalActions = (
    <div className={classes.actions}>
      <button onClick={props.onClose} className={classes["button--alt"]}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const CartModelContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ctx.totalAmount.toFixed(2)}</span>
      </div>
      {checkoutFormState && (
        <Checkout submitOrder={submitOrder} onCancel={props.onClose} />
      )}
      {!checkoutFormState && modalActions}
    </React.Fragment>
  );

  const isSubmittingModel = <p>Sending order data...</p>;
  const didSubmittingModel = (
    <React.Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && !didSubmit && CartModelContent}
      {isSubmitting && isSubmittingModel}
      {!isSubmitting && didSubmit && didSubmittingModel}
    </Modal>
  );
};

export default Cart;
