import React from 'react';
import './ProductCard.css';

const ProductList = (props) => {
    return (
        <div className="product-card" id={props.change}>

            <i className={props.icon}></i>
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
            
        </div>
    );
};

export default ProductList;