import React, { useState, useEffect } from 'react'
import './Cart.css'
const CartItems = ({ product }) => {
    const { id, title, image, price, category, quantity } = product;
    const getAlldata = () => {
        const Data = JSON.parse(localStorage.getItem("CartItems"))
        if (Data.length === 0) {
            return []
        }
        else {
            return Data;
        }
    }

    const [products, setProducts] = useState(getAlldata())

    const [Qty, setQty] = useState(quantity);
    const getByTitle = (title) => {
        if (title.length < 20)
            return title;
        else {
            let result = title.substring(0, 25);
            return result + "..."
        }
    }
    useEffect(() => {
        localStorage.setItem('CartItems', JSON.stringify(products))
        let amount = 0;
        products.map((item) => {
            amount += item.price * item.quantity;
        });
        localStorage.setItem("amount", amount);
        window.location.reload();
    }, [products])

    const Decrement = () => {
        if (Qty == 1) {
            let updatedData = products.filter((item) => {
                return item.id != id
            });
            setProducts(updatedData);
        }
        else {
            setQty(Qty - 1);
            let updatedData = products.map((elem) => {
                if (elem.id == id) {
                    return {
                        ...elem,
                        quantity: elem.quantity - 1
                    }


                }
                return elem;
            })
            setProducts(updatedData);

        }

    }
    const Increment = () => {
        setQty(Qty + 1);
        let updatedData = products.map((elem) => {
            if (elem.id == id) {
                return { ...elem, quantity: elem.quantity + 1 }
            }
            return elem;
        })
        setProducts(updatedData);

    }
    return (
        <>
            <div className='cartItem_Body'>
                <div className='cartItem'>
                    <img src={image} alt="productImage"></img>
                    <div className='cartItem_text'>
                        <h4>{getByTitle(title)}</h4>
                        <h5>Category :{category}</h5>
                        <h5>Price :{price} Rs</h5>
                    </div>

                    <div className='cartItem_qty'>
                        <h4>Qty</h4>
                        <button onClick={Decrement}>-</button>
                        <p>{Qty}</p>
                        <button onClick={Increment}>+</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems