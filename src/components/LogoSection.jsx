import React from 'react';
import './LogoSection.css';
import LogosList from './LogosList.jsx';

// Logos

import logo1 from './images/1.png';
import logo2 from './images/2.png';
import logo3 from './images/3.png';
import logo4 from './images/4.png';
import logo5 from './images/5.png';
import logo6 from './images/6.png';
import logo7 from './images/7.png';
import logo8 from './images/8.png';


const LogoSection = () => {
    return (
        <div className="logos-section">

            <LogosList image={logo1} class="logo" />
            <LogosList image={logo2} class="logo" />
            <LogosList image={logo3} class="logo" />
            <LogosList image={logo4} class="logo" />
            <LogosList image={logo5} class="logo" />
            <LogosList image={logo6} class="logo" />
            <LogosList image={logo7} class="logo" />
            <LogosList image={logo8} class="logo" />
            
        </div>
    );
};

export default LogoSection;