import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCounts';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({ item }) => {

  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext()
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(item, quantity);
  }

  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <img src={item.img} className='img-fluid' alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
      </div>
      <div>
        {goToCart ? 
          <Link to='/Cart' className="btn btn-primary">Terminar Compra</Link> 
          : 
          <ItemCount stock={10} initial={0} onAdd={onAdd} />
        }
      </div>
    </div>
  );
};

export default ItemDetail;
