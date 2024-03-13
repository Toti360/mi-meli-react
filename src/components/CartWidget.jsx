import carrito from "../assets/carrito.png";

export const CartWidget = () => {
  return (
    <>
      <img src={carrito} alt="Carrito de Compras" height={40} />
      <span>0</span>
    </>
  );
};
