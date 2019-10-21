import React from 'react';
import './SliderBar.css';
import Button from './Button.jsx';

const SliderBar = (props) => {
    return (
        <div className="slider-text">
            
            <span>{props.smallHeading}</span>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <Button link="#" menu="CONTACT US" id="contact-btn"  class="contact-btn"/>

        </div>
    );
};

export default SliderBar;