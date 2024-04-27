import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const addItem = (item) => setItems((prev) => [...prev, item]);

  /*const addItem = (item, quantity) => {
    const addedItem = { ...item, quantity };
    const newCart = [...items];
    const inCart = newCart.find((product) => product.id === addedItem.id);
    if (inCart) {
        inCart.quantity += quantity;
        setItems(newCart);
    } else {
        setItems([...items, addedItem]);
    }
  }

  /*const removeItem = (i) => {
    const filterCart = items.filter((item) => item.id !== i);
    console.log(filterCart);
    setItems(filterCart);
};*/

  return (
    <CartContext.Provider value={{ addItem, clear, items }}>
      {children}
    </CartContext.Provider>
  );
};
