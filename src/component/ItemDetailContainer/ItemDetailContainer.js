import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'product', id);
    getDoc(queryDoc).then((res)=>setItem({id: res.id, ...res.data()}));
    
      console.log(`No se encontró ningún item con el ID ${id}`);
    }
  , [id]);

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