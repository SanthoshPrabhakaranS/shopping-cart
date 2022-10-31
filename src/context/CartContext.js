import React, { createContext, useState } from "react";

export const cartContext = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [added, setAdded] = useState(false);

  return (
    <cartContext.Provider
      value={{
        cart,
        setCart,
        showCart,
        setShowCart,
        search,
        setSearch,
        added,
        setAdded,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContext;
