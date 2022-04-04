import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './ProductComponent.css'
const ProductDetail = () => {
    let product = useParams();
    const products = useSelector((state) => state.allProducts.products);
    const newProduct = products[product.productId];
    console.log(newProduct);

    return (
        <>
            <div className='mainDetail'>
                <div className='mainDetail_product'>
                    <img src={newProduct.image} style={{ width: "300px" }}></img>
                    <div className='mainDetail'>
                        <div className='mainDetail_product2'>
                            <h5>{newProduct.title}</h5>
                        </div>
                        <div className='mainDetail_product2'>
                            <button id="btn_atc">Add to cart</button>
                            <button id="btn_bn">Buy Now</button>
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