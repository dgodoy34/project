import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arrayProductos from '../../Json/arrayProductos.json';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const selectedItem = arrayProductos.find(item => item.id === parseInt(id));
    if (selectedItem) {
      setItem(selectedItem);
    } else {
      console.log(`No se encontró ningún item con el ID ${id}`);
    }
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='container'>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;