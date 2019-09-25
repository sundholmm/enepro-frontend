import React from 'react';
import data from '../../data/data.json'
import './Body.css'

const Body = (props) => {

    const bodyText = data.body.map((paragraph, index) =>
        <p key={index}>{paragraph}</p>
    );

    const services = data.services.map((service, index) =>
        <li key={index}>{service}</li>
    );

    const employees = data.employees.map((employee) => {
        const phone = employee.phone.replace(/\s/g, '');
        const email = (employee.firstname + '.' + employee.lastname.replace("ö", "o") + employee.email).toLowerCase();
        return <div key={employee.firstname} className="body-employee-div">
            <img className="body-employee-imgs" alt={employee.firstname + ' ' + employee.lastname}
            src={process.env.PUBLIC_URL + `/${employee.firstname.toLowerCase()}.jpg`} />
            <h2>{employee.firstname + ' ' + employee.lastname}</h2>
            <p>{employee.title}</p>
            <a href={`tel:${phone}`}>{employee.phone}</a><br/>
            <a href={`mailto:${email}`}>{email}</a>
        </div>
    });

    return (
        <div className="body">
            <div className="body-flex-container">
                <div className="body-text">
                    <h2>Yritys</h2>
                    {bodyText}
                </div>
                <div className="body-text">
                    <h2>Palvelumme</h2>
                    {services}
                </div>
                <h2 className="body-employees-title">Tekijät</h2>
                <div className="body-employees-flex-container">
                    {employees}
                </div>
            </div>
        </div>
    );
};

export default Body;