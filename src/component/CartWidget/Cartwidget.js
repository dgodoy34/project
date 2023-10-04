import React from 'react';

const CartWidget = ({ count }) => {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <i className="bi bi-cart4"></i>
      <span>{count}</span>
    </div>
  );
};

export default CartWidget;

