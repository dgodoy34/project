
import React from "react";

import {useCartContext} from '../../Context/CartContext';

const CartWidget = () => {
    const {totalProducts, cart} = useCartContext();
    return (
        <div>
            <button type="button" className="position-relative bi-cart4">
           
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() ||cart}</span>
            </button>
        </div>

    )
}

export default CartWidget;