import React from 'react';
import data from '../../data/data.json'
import './Footer.css'

const Footer = (props) => {

    const date = new Date();

    const contact = data.address.map((info, index) =>
        <h3 key={index}>{info}</h3>
    );

    return (
        <div className="footer">
            <div className="footer-flex-container">
                <div>
                    <img className="footer-img" alt="Mitsubishi Electric"
                    src={process.env.PUBLIC_URL + '/mitsubishi-electric-logo.png'} />
                </div>
                <div className="footer-address">
                    <h2>Yhteystiedot</h2>
                    {contact}
                </div>
                <div>
                    <img className="footer-img" alt="Scanoffice Aurinkopartneri"
                    src={process.env.PUBLIC_URL + '/so-aurinkopartneri-logo.jpg'} />
                </div>
            </div>
            <p>
                &copy; {date.getFullYear()} EnePro Oy. Kaikki oikeudet pidätetään.
            </p>
        </div>
    );
};

export default Footer;