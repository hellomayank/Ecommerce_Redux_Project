import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


import './ProductComponent.css'
const ProductDetail = () => {
    let product = useParams();
    const getAllData = () => {
        let list = window.localStorage.getItem("CartItems");
        if (list) {
            return JSON.parse(localStorage.getItem('CartItems'))
        }
        else
            return [];
    }
    const [data, setdata] = useState(getAllData());
    const products = useSelector((state) => state.allProducts.products);
    const newProduct = products[product.productId];
    useEffect(() => {
        localStorage.setItem('CartItems', JSON.stringify(data))
    }, [data])
    return (
        <>
            <div className='mainDetail'>
                <div className='mainDetail_product'>
                    <img src={newProduct.image} alt="product_images" id="ProductImage"></img>
                    <div className='mainDetail_items'>
                        <div className='mainDetail_product2'>
                            <h5>{newProduct.title}</h5>
                        </div>
                        <div className='mainDetail_product2'>
                            <button id="btn_atc" onClick={() => setdata([...data, newProduct])}>Add to cart</button>
                            <button id="btn_bn"  >Buy Now</button>
                        </div>
                        <h5>Category : {newProduct.category}</h5>
                        <h5>Price : ${newProduct.price}</h5>
                    </div>


                </div>

            </div>

        </>
    )
}

export default ProductDetail