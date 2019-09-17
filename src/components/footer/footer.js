import React from 'react';
import './footer.css'

const Footer = (props) => {

    const date = new Date();

    return (
        <div className="footer">
            Copyright &copy; {date.getFullYear()} {props.author}. All Rights Reserved.
        </div>
    );
};

export default Footer;