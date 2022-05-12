import React, { useEffect } from 'react'
import CartItems from './CartItems'
const Cart = () => {
    const products = JSON.parse(localStorage.getItem("CartItems"))
    let amount = 0;
    useEffect(() => {
        localStorage.setItem("amount", amount)
    }, [localStorage.getItem("amount")])

    return (
        <>

            {products === null || products.length === 0 ? "No Items are there........" : products.map((item, idx) => {
                amount += item.price * item.quantity;
                return (
                    < CartItems key={idx} product={item} />
                )
            })
            }
            <p>{amount}</p>
        </>
    )
}

export default Cart