import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { ItemListConteiner } from "./components/ItemListConteiner";
import { ItemDetailConteiner } from "./components/ItemDetailConteiner";
import { NavBar } from "./components/NavBar";
import { CartProvider } from "./contexts/CartContext";
import { Cart } from "./components/Cart";

function NotFound() {
  return <h1>404 - Página No Encontrada</h1>;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:id" element={<ItemListConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
