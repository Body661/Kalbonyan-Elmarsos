import React, { useState } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (itemID) => {},
  clearCart: () => {},
});

export default CartContext;
