import { createContext, useState } from "react";

export const CartContext = createContext([]);

// const mockItem = [
//   {
//     item: {
//       id: 1,
//       name: "Item 1",
//     },
//     quantity: 3,
//   },
// ];

export const CartProvider = ({ defaultValue = [], children }) => {
  const [items, setItems] = useState(defaultValue);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) {
      return;
    }
    setItems([...items, currentItem]);
  };

  const removeItem = (itemId) => {};

  const clear = () => setItems(defaultValue);

  const isInCart = (itemId) => {
    // True if item is in cart
    // False if item is not in cart
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
