import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";


export const getCartData = () => {
    return async (dispatch) => {
        const request = async () => {
            const response = await fetch('https://advanced-redux-8b5b3-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const data = await response.json()
            return data
        }
        try {
            const cartData = await request()
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(
                uiActions.setNotification({
                    status: "error",
                    msg: "error",
                    title: "Fetching cart data falid",
                })
            );
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.setNotification({
                status: "pending",
                msg: "Sending...",
                title: "Sending cart data",
            })
        )

        const sendReq = async () => {
            const response = await fetch(
                "https://advanced-redux-8b5b3-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
        }

        try {
            await sendReq()
            dispatch(
                uiActions.setNotification({
                    status: "success",
                    msg: "success",
                    title: "sent cart data successfuly",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.setNotification({
                    status: "error",
                    msg: "error",
                    title: "Sending cart data falid",
                })
            );
        }
    }
}