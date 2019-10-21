import React from 'react';

const Button = (props) => {
    return (
            <button className={props.class}>
                <a href={props.link}>
                    {props.menu}
                </a>
            </button>
    );
};

export default Button;