import React from 'react';

const MenuList = (props) => {
    return (
        <li>
            <a href={props.link}>{props.menu}</a>
        </li>
    );
};

export default MenuList;