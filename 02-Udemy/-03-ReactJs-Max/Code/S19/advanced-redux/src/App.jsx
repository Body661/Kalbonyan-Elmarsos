import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Notification from "./components/UI/Notification";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { getCartData, sendCartData } from "./store/cart-actions";

let init = true;

function App() {
  const cartState = useSelector((state) => state.ui.isOpen);
  const notifications = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     dispatch(
  //       uiActions.setNotification({
  //         status: "pending",
  //         msg: "Sending...",
  //         title: "Sending cart data",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://advanced-redux-8b5b3-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     dispatch(
  //       uiActions.setNotification({
  //         status: "success",
  //         msg: "success",
  //         title: "sent cart data successfuly",
  //       })
  //     );
  //   };

  //   if (init) {
  //     init = false;
  //     return;
  //   }

  //   fetchCart().catch((error) => {
  //     dispatch(
  //       uiActions.setNotification({
  //         status: "error",
  //         msg: "error",
  //         title: "Sending cart data falid",
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (init) {
      init = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notifications && (
        <Notification
          status={notifications.status}
          title={notifications.title}
          message={notifications.msg}
        />
      )}
      <Layout>
        {cartState && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
