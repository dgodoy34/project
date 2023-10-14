import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from 'styled-components';
import { RingLoader } from 'react-spinners';
import "../../component/Entrada/entrar.css";
import category1Image from '../assets/images/ferti_org.jpg';
import category2Image from '../assets/images/macetas.jpg';
import category3Image from '../assets/images/sustrato.png';
import category4Image from '../assets/images/leds.jpg';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red; 
  animation-duration: 5s; 
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Fondo gris claro */
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEntrarClick = () => {
    setIsLoading(true);

    // Simulación de carga de datos
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }

  const categories = [
    { id: 1, name: 'Fertilizante', description: 'Descripción de la categoría 1', image: category1Image },
    { id: 2, name: 'Plantas', description: 'Descripción de la categoría 2', image: category2Image },
    { id: 3, name: 'Sustrato', description: 'Descripción de la categoría 3', image: category3Image },
    { id: 4, name: 'Leds', description: 'Descripción de la categoría 4', image: category4Image },
    
  ];

  return (
    <div>
      {isLoading ? (
        <LoaderWrapper>
          <RingLoader css={override} size={150} />
        </LoaderWrapper>
      ) : (
        <div className='entrar'>
          <h1>BIENVENIDOS</h1>
          <p>Si sos mayor de 18 años ingresa a nuestro sitio </p>
          <Link to="/productos">
            <button className="btn btn-primary" onClick={handleEntrarClick}>Entrar</button>
          </Link>
          <section>
          <div className="card-container">
            {categories.map(category => (
              <div className="card" key={category.id}>
                <img src={category.image} alt={category.name} style={{ width: '100%', height: 'auto' }} />
                <h2 className='card__title'>{category.name}</h2>
                <p className='card__description'>{category.description}</p>
              </div>
            ))}
          </div>
          </section>
        </div>
        
      )}
    </div>
  );
}

export default Home;
