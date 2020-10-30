import React, { useEffect } from "react";
import data from "../../data/data.json";
import Contact from "../Contact/Contact";
import HyperLink from "../HyperLink/HyperLink";
import Picture from "../Picture/Picture";
import "./Body.css";

const Body = () => {
  const bodyText = data.body.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const services = data.services.map((service, index) => (
    <React.Fragment key={index}>
      {service.text && (
        <li className="body-single-service-with-content" key={index}>
          <HyperLink path={`/${service.path}`} text={service.title} />
        </li>
      )}
    </React.Fragment>
  ));

  const employees = data.employees.map((employee) => {
    const imgPrefix = employee.firstname.toLowerCase();
    const phone = employee.phone.replace(/\s/g, "");
    const email = (
      employee.firstname +
      "." +
      employee.lastname.replace("ö", "o") +
      employee.email
    ).toLowerCase();
    return (
      <div key={employee.firstname} className="body-employee-div selectable">
        <Picture
          className="body-employee-imgs"
          webp={`${imgPrefix}.webp`}
          jpg={`${imgPrefix}.jpg`}
          alt={employee.firstname + " " + employee.lastname}
          height="160px"
        />
        <h2>{employee.firstname + " " + employee.lastname}</h2>
        <p>{employee.title}</p>
        <a href={`tel:${phone}`}>{employee.phone}</a>
        <br />
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    );
  });

  useEffect(() => {
    document.title = "EnePro Oy";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", data.metaDesc);
  });

  return (
    <div className="body">
      <div className="body-flex-container">
        <div className="body-text">
          <h2>Yritys</h2>
          {bodyText}
        </div>
        <div className="body-text" id="body-services">
          <h2>Palvelumme</h2>
          {services}
        </div>
        <h2 className="body-employees-title">Tekijät</h2>
        <div className="body-employees-flex-container">{employees}</div>
      </div>
      <Contact title={data.contactFormTitle} />
    </div>
  );
};

export default Body;
