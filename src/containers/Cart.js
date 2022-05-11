import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const products = useSelector((state) => state.cartProducts);
    console.log(products);
    return (
        <div></div>
    )
}

export default Cart