import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCounts';
 

const ItemDetail = ({ item }) => {
  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <img src={item.img} className='img-fluid' alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <p>Cantidad: {item.stock}</p>
        <Link to="/Productos">Productos</Link>
      </div>
      <div>
        <ItemCount stockItems={item.stock} />
      </div>
    </div>
  )
}

export default ItemDetail;