import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const item = items.map((item) => (
    <CartItem
      key={item.id}
      item={{
        title: item.title,
        quantity: item.amount,
        total: item.total,
        price: item.price,
        id: item.id,
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{item}</ul>
    </Card>
  );
};

export default Cart;
