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

    const employees = data.employees.map((employee) => 
        <div key={employee.firstname} className="body-employee-div">
            <img className="body-employee-imgs" alt={employee.firstname + ' ' + employee.lastname}
            src={process.env.PUBLIC_URL + `/${employee.firstname.toLowerCase()}.jpg`} />
            <h2>{employee.firstname + ' ' + employee.lastname}</h2>
            <p>{employee.title}</p>
            <a href={`tel:${employee.phone}`}>{employee.phone}</a><br/>
            <a href={`mailto:${employee.email}`}>{employee.email}</a>
        </div>
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
                <div className="body-employees-flex-container">
                    {employees}
                </div>
            </div>
        </div>
    );
};

export default Body;