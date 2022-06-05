import React, { useState } from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (itemID) => { }
})

export default CartContext