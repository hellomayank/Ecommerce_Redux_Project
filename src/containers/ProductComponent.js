import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ProductComponent.css'
const ProductComponent = () => {
    const getByTitle = (title) => {
        if (title.length < 20)
            return title;
        else {
            let result = title.substring(0, 25);
            return result + "..."
        }
    }
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product, index) => {
        const { id, title, image, price, category } = product;
        return (
            <div className='four wide column' key={id} style={{ padding: "55px" }}>
                <Link to={`/product/${index}`} >
                    <div className='ui link cards'>
                        <div className='card'>
                            <div className='image'>
                                <img src={image} alt={title} style={{ height: "250px" }}></img>
                            </div>
                            <div className='content'>
                                <div className='header'>{getByTitle(title)}</div>
                                <div className='meta price'>${price}</div>
                                <div className='meta'>{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div >
        );
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default ProductComponent