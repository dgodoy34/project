import React, { useState } from "react";
import Swal from 'sweetalert2';


const ItemCounts = ({ stockItems }) => {
  const [counter, setCounter] = useState(1);
  const [stock, ] = useState(stockItems);
  const [carritoCount, setCarritoCount] = useState(0);

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
    console.log(`Se agregó ${counter} item(s) al carrito`);
    setCarritoCount(carritoCount + counter);

    Swal.fire({
      title: '¡Producto agregado al carrito!',
      text: `Cantidad en el carrito: ${carritoCount + counter}`,
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
            <button type="button" className="btn btn-success" onClick={decrementarStock}>-</button>
            <button type="button" className="btn btn-success">{counter}</button>
            <button type="button" className="btn btn-success" onClick={incrementarStock}>+</button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-5">
          <button type="button" className="btn btn-success" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
      </div>
    </div>
    
  );
};

export default ItemCounts;
