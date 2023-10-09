import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/" className="btn btn-primary">
          Volver al Home
        </Link>
      </>
    );
  }

  return (
    <>
      <div className='cart-container'>
        {cart.map((producto) => (
          <ItemCart key={producto.id} producto={producto} />
        ))}
      </div>
      <div className='price'>
      <p className='total-price'>total: $ {totalPrice()}</p>

      <div className='checkout-btn-container'>
        <Link to="/checkout" className="btn btn-success">
          Confirmar Compra
        </Link>
      </div>
      </div>
    </>
  );
};

export default Cart;
