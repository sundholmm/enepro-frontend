import React from 'react';
import './Header.css'

const Header = (props) => {

    return (
        <div className="header">
            <div className="header-flex-container">
                <img className="header-img-logo" alt="EnePro Oy"
                src={process.env.PUBLIC_URL + '/logo.png'} />
                <img className="header-img-panels" alt="Paneelikuva"
                src={process.env.PUBLIC_URL + '/paneelikuva.jpg'} />
            </div>
        </div>
    );
};

export default Header;