import React  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "../src/component/Navbar/Navbar";
import ItemListContainer from "../src/component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/component/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../src/component/Error404";
import Entrar from './component/Entrada/Home';
import WhatsAppButton from '../src/component/Wpp/WhatsAppButton'; 

function App() {
  
  return (
    <div>
      
     <BrowserRouter>
  <NavBar />
  <WhatsAppButton />
  <Routes>
    <Route path="/" element={<Entrar />} />
    
    <Route path="/productos" element={<ItemListContainer />} />
    <Route path="/item/:id" element={<ItemDetailContainer />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;