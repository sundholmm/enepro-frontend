import React from 'react';
import data from '../../data/data.json'
import './Body.css'

const Body = (props) => {

    const bodyText = data.body.map((paragraph, index) =>
        <p key={index}>{paragraph}</p>
    );

    const services = data.body.map((service, index) =>
        <li key={index}>{service}</li>
    );

    const matias = data.employees.matias;
    const albert = data.employees.albert;

    return (
        <div className="body">
            <div className="body-flex-container">
                <div>
                    {bodyText}
                </div>
                <div>
                    {services}
                </div>
                <div className="body-employees-flex-container">
                    <div className="body-employee-div">
                        <img className="body-employee-imgs" alt="Matias Virtanen"
                        src={process.env.PUBLIC_URL + '/matias.jpg'} />
                        <h2>{matias.firstname + ' ' + matias.lastname}</h2>
                        <p>{matias.title}</p>
                        <p>{matias.phone}</p>
                        <p>{matias.email}</p>
                    </div>
                    <div className="body-employee-div">
                        <img className="body-employee-imgs" alt="Albert Nordström"
                        src={process.env.PUBLIC_URL + '/albert.jpg'} />
                        <h2>{albert.firstname + ' ' + albert.lastname}</h2>
                        <p>{albert.title}</p>
                        <p>{albert.phone}</p>
                        <p>{albert.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;