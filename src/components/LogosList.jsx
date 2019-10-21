import React from 'react';

const LogosList = (props) => {
    return (
        <div className="logos-list">

            <img src={props.image} className={props.class}/>
            
        </div>
    );
};

export default LogosList;