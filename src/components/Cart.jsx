import Container from "react-bootstrap/Container";
import { useContext, useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
import {
  getFirestore,
	addDoc,
	collection,
} from 'firebase/firestore';

import { CartContext } from "../contexts/CartContext";
//import { PhoneAuthCredential } from "firebase/auth/cordova";

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
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
  };

  return (
    <Container className="mt-4">
      <h1>MI CARRITO</h1>
      <table>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div onClick={clear}>❌ VACIAR</div>
      <h2>DATOS</h2>
      <form>
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
