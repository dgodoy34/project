import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCounts';
 

const ItemDetail = ({ item }) => {
  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <img src={item.imagen} className='img-fluid' alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>$ {item.precio}</p>
        <p>Cantidad: {item.stock}</p>
        <Link to="/">Home</Link>
      </div>
      <div>
        <ItemCount stockItems={item.stock} />
      </div>
    </div>
  )
}

export default ItemDetail;