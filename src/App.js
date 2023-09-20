import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/component/Navbar/Navbar";
import ItemListContainer from "../src/component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/component/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../src/component/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
