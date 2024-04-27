import { useState } from "react";

export const ItemCount = () => {
    const [count, setCount] = useState(1);

  return (
    <div>
      <mark>➖</mark>
      <input value={count} readOnly />
      <mark>➕</mark>
      <button>AGREGAR AL CARRITO</button>
    </div>
  );
};
