import React from 'react'
import {Link} from 'react-router-dom';
import "../Entrada/entrar.css"


const item = ({item}) => {
  return (
    <Link to={"/item/" + item.id} className='text-decoration-none'>
      <div className='container'>
        <div className='card border border-1 fixed-card'>
          <img src={item.img} className='card-img-top' alt={item.name}/>
          <div className='card-body text-center'>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default item;