import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from '../ItemDetail/ItemDetail';
import { css } from '@emotion/react';
import styled from 'styled-components';
import { RingLoader } from 'react-spinners';



const override = css`
display: block;
margin: 0 auto;
border-color: red; // Color del loader
animation-duration: 3s; // Cambia la duración de la animación 
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'product', id);
    getDoc(queryDoc)
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
        setIsLoading(false);
      },[id])
      .catch((error) => {
        console.error(`Error al cargar los datos: ${error}`);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <RingLoader css={override} size={150} /> 
      </LoaderWrapper>
    );
  }

  if (!item) {
    return <div>No se encontró ningún item con el ID {id}</div>;
  }

  return (
    <div className='container'>
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
