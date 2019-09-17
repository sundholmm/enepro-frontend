import React from 'react';
import './Footer.css'

const Footer = (props) => {

    const date = new Date();

    return (
        <div className="footer">
            &copy; {date.getFullYear()} EnePro Oy. Kaikki oikeudet pidätetään.
        </div>
    );
};

export default Footer;