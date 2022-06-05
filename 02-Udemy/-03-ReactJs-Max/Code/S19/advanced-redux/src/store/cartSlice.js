import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalQuantity: 0, changed: false },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        addItem(state, action) {
            const itemInCart = state.items.find((item) => item.id === action.payload.id)
            state.totalQuantity++
            state.changed = true
            if (!itemInCart) {
                state.items.push({
                    title: action.payload.title,
                    price: action.payload.price,
                    amount: 1,
                    total: action.payload.price,
                    id: action.payload.id
                })
            } else {
                itemInCart.amount++
                itemInCart.total += action.payload.price
            }
        },
        removeItem(state, action) {
            const itemInCart = state.items.find((item) => item.id === action.payload)
            state.totalQuantity--
            state.changed = true
            if (itemInCart.amount > 1) {
                itemInCart.total -= itemInCart.price
                itemInCart.amount--
            } else {
                state.items = state.items.filter((item) => item.id !== itemInCart.id)
            }
        }
    }
})




export const cartActions = cartSlice.actions
export default cartSlice.reducer