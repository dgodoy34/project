import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "../src/component/Navbar/Navbar";
import ItemListContainer from "../src/component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/component/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../src/component/Error404";
import CartProvider from '../src/Context/CartContext';
import Cart from "../src/component/Cart/Cart";
import {Checkout} from '../src/component/Checkout/Checkout';
import Entrar from './component/Entrada/Home';
import WhatsAppButton from '../src/component/Wpp/WhatsAppButton';

function App() {

  return (
    <div>

      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Entrar />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path="/Productos" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;