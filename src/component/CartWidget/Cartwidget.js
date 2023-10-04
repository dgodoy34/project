import React from 'react'

const Cartwidget = ({ count }) => {
  const cantidad = parseInt(count, 10) || 0; 
  return (
    <div style={{ marginLeft: 'auto' }}>
      <i className="bi bi-cart4"></i>
      <span>{cantidad}</span>
    </div>
  )
}

export default Cartwidget;

