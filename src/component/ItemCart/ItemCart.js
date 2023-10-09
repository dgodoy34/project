import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import "../Cart/cart.css"

const ItemCart = ({ producto }) => {
    const { removeProducto } = useCartContext();
    return (
        <div className='itemCart'>
        <img src={producto.img} alt={producto.name} className='itemImage' />
        <div>
                <p>Título: {producto.name}</p>
                <p>Cantidad: {producto.quantity}</p>
                <p>Precio u.: $ {producto.price}</p>
                <p>Subtotal: ${producto.quantity * producto.price}</p>
                <button onClick={() => removeProducto(producto.id)} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;
