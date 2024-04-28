import { useContext, useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { Container } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { Swal } from 'sweetalert2';

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [buyer, setBuyer] = useState(initialValues);
  const { items, clear, removeItem } = useContext(CartContext);

  const handleChangue = (ev) => {
    const { name, value } = ev.target;

    setBuyer((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const total = items.reduce((acu, act) => acu + act.price * act.quantity, 0);

  const handledOrder = () => {
    const order = {
      buyer,
      items,
      total,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        Swal.fire({
          icon: "success",
          title: "¡Orden completada!",
          text: `Su orden: ${id} ha sido completada.`,
        });
      }
    });
  };

  return (
    <Container
      className="mt-4 text-center"
      style={{ backgroundColor: "#e6f2fe" }}
    >
      <h1
        style={{ textAlign: "center", marginBottom: "5px", color: "#136fec" }}
      >
        MI CARRITO
      </h1>
      <table>
        <thead>
          <tr
            style={{
              textAlign: "center",
              marginBottom: "5px",
              color: "#136fec",
            }}
          >
            <th>NOMBRE</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>ELIMINAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clear}>❌ VACIAR</button>
      <h2
        style={{ textAlign: "center", marginBottom: "5px", color: "#136fec" }}
      >
        DATOS
      </h2>
      <form className="form-container">
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={buyer.name}
            name="name"
            onChange={handleChangue}
          />
        </div>
        <div>
          <label>Celular</label>
          <input
            type="number"
            value={buyer.phone}
            name="phone"
            onChange={handleChangue}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={buyer.email}
            name="email"
            onChange={handleChangue}
          />
        </div>
        <button onClick={handledOrder}>COMPRAR</button>
      </form>
    </Container>
  );
};
