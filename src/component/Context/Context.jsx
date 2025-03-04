import React, { createContext, useState } from "react";
import all_product from "../../Assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item]) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };
  const contexValue = {
    all_product,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contexValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
