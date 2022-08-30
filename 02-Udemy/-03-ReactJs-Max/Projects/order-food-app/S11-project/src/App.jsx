import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart";

import CartProvider from "./Context/CartProvider";

function App() {

  const [cartState, setCartState] = useState(false)

  const onOpen = () => {
    setCartState(true)
  }
  const onClose = () => {
    setCartState(false)
  }

  return (
    <CartProvider>
      {cartState && <Cart onClose={onClose} />}
      <Header onOpen={onOpen} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
