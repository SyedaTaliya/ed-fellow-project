import React from 'react';
import './BusinessCard.css';

const BusinessCard = (props) => {
    return (
        <div className="business-card" id={props.giveID}>
            <span>{props.textTop}</span>
            <p>{props.textDown}</p>
        </div>
    );
};

export default BusinessCard;