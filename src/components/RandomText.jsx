import React from 'react';
import './Randomtext.css';

const RandomText = (props) => {
    return (
        <div className="product-text">
            <span>{props.smallHeading}</span>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    );
};

export default RandomText;