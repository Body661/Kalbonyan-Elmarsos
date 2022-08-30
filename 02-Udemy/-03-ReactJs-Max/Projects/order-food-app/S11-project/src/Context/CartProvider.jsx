import { useReducer } from "react"
import CartContext from "./CartContext"

let defaultCart = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const existingCartItemIndex = state.items.findIndex((item) => (item.id === action.item.id))
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => (item.id === action.itemId))
        const existingCartItem = state.items[existingCartItemIndex]
        const newTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.itemId)
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        }
    }
    return defaultCart
}

const CartProvider = (props) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart)

    const addItemHandler = (item) => {
        dispatchCart({ type: 'ADD', item: item })
    }
    const removeItemHandler = (itemID) => {
        dispatchCart({ type: 'REMOVE', itemId: itemID })

    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider