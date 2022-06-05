import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggle = () => dispatch(uiActions.toggle());
  const cartBadge = useSelector((state) => state.cart.totalQuantity);

  return (
    <button className={classes.button} onClick={cartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartBadge}</span>
    </button>
  );
};

export default CartButton;
