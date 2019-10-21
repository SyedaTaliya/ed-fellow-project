import React from 'react';
import Button from './Button.jsx';
import './ProductText.css';

const ProductText = (props) => {
    return (
        <div className="product-text">

            <span>{props.smallHeading}</span>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <Button link="#" menu="OUR PORTFOLIO" class="portfolio-btn" />

        </div>
    );
};

export default ProductText;