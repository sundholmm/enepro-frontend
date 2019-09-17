import React from 'react';
import data from '../../data/data.json'
import './Body.css'

const Body = (props) => {

    const bodyText = data.body.map((paragraph) =>
        <p>{paragraph}</p>
    );

    const services = data.body.map((service) =>
        <li>{service}</li>
    );

    return (
        <div className="body">
            <div className="body-flex-container">
                <div>
                    {bodyText}
                </div>
                <div>
                    {services}
                </div>
            </div>
        </div>
    );
};

export default Body;