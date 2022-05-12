import React, { useState, useEffect } from 'react'
import ProductComponent from './ProductComponent';
import CarouselComponent from './CarouselComponent';
import './ProductComponent.css'
const ProductListing = () => {
    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);
    return (
        <>
            <CarouselComponent />
            <div className={mobileView ? "" : "ui grid"} style={{ background: "#1C1D1F" }}>
                < ProductComponent />
            </div >
        </>
    )
}

export default ProductListing