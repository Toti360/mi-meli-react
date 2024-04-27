import { Link } from "react-router-dom";

import carrito from "../assets/carrito.png";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div id="cart-widget">
        <img src={carrito} alt="Carrito de Compras" height={40} />
        <span>0</span>
      </div>
    </Link>
  );
};
