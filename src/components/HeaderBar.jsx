import React from 'react';
import './HeaderBar.css';

import MenuList from './MenuList.jsx';
import Button from './Button.jsx';

const HeaderBar = (props) => {
    return (
        <header className="main-header">
            
            <div className="logo-div">
                <img src={props.image}></img>
            </div>

            <ul className="menu-list">
                
                <MenuList link="#" menu="Who we are"/>
                <MenuList link="#" menu="What we do"/>
                <MenuList link="#" menu="Process"/>
                <MenuList link="#" menu="Works"/>
                <MenuList link="#" menu="Testimonials"/>
                <MenuList link="#" menu="FAQs"/>
                <li>
                <Button link="#" menu="CONTACT US" class="contact-btn" />
                </li>

               <i class="fas fa-bars" className="menubar-icon"></i>
                
            </ul>


        </header>
    );
};

export default HeaderBar;