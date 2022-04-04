import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './ProductComponent.css'
const ProductDetail = () => {
    let product = useParams();
    const products = useSelector((state) => state.allProducts.products);
    const newProduct = products[product.productId];
    console.log(newProduct);
    // console.log(product.productId);
    return (
        <div className='mainDetail'>
            <div className='mainDetail_product'>
                <img src={newProduct.image}></img>
                <h3></h3>
                <h3></h3>
                <h3></h3>
            </div>
        </div>
    )
}

export default ProductDetail