import React, { useState } from "react";

const ItemCounts = ({ stockItems }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(stockItems);

  const incrementarStock = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const agregarAlCarrito = () => {
    // Aquí puedes realizar alguna acción con el item y la cantidad
    console.log(`Se agregó ${counter} item(s) al carrito`);
  };

  return (
    <div className="container" id="itemcount">
      <div className="row mb-3">
        <div className="col-md-2">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={decrementarStock}>-</button>
            <button type="button" className="btn btn-outline-primary">{counter}</button>
            <button type="button" className="btn btn-outline-primary" onClick={incrementarStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <button type="button" className="btn btn-outline-primary" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCounts;
