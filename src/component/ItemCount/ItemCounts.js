import React, { useState } from "react";
import Swal from 'sweetalert2';

const ItemCounts = ({ agregarAlCarrito }) => {
  const [counter, setCounter] = useState(1);

  const incrementarStock = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const agregarAlCarritoLocal = () => {
    agregarAlCarrito(counter);

    Swal.fire({
      title: '¡Producto agregado al carrito!',
      text: `Cantidad en el carrito: ${counter}`,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="container" id="itemcount">
      <div className="row col-md-6 offset-md-5">
        <div className="col-md-2">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-red" onClick={decrementarStock}>-</button>
            <button type="button" className="btn btn-blue">{counter}</button>
            <button type="button" className="btn btn-red" onClick={incrementarStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-5">
          <button type="button" className="btn btn-blue" onClick={agregarAlCarritoLocal}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCounts;
