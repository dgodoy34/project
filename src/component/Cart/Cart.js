import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../../component/ItemCart/ItemCart";
import {getFirestore, addDoc, collection} from "firebase/firestore"
const Cart = () => {
    const {cart, totalPrice } = useCartContext();

    const order={
        buyer:{
            name:"el Diego",
            email: "dg@gmail.com",
            phone: "12345678",
            adress: "calle 124"
        },
        items: cart.map((product)=>({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
        })),
        total: totalPrice(),
        };

        const handleClick=()=>{
            const db= getFirestore();
            const ordersCollection= collection(db, "orders");
            addDoc(ordersCollection, order).then(({id})=> console.log(id));
        };

    if (cart.length === 0){
        return(
            <>
            <p>No existen Productos en el carrito</p>
            <Link to="/">Hacer compra</Link></>
        );
    }

    return(
        <>
           {cart.map((product) => (
            <ItemCart key={ product.id} product={product}/>
           ))}
           <p>total: {totalPrice()}</p>
           <button onClick={handleClick}>Confirmar compra</button>
        </>
    )
}

export default Cart