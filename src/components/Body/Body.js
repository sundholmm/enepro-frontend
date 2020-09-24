import React, { useEffect } from "react";
import data from "../../data/data.json";
import Contact from "../Contact/Contact";
import HyperLink from "../HyperLink/HyperLink";
import "./Body.css";

const Body = (props) => {
  const bodyText = data.body.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const servicesWithContent = data.services.map((service, index) => (
    <React.Fragment key={index}>
      {service.text && (
        <li className="body-single-service-with-content" key={index}>
          <HyperLink path={`/${service.path}`} text={service.title} />
        </li>
      )}
    </React.Fragment>
  ));

  const servicesWithNoContent = data.services.map((service, index) => (
    <React.Fragment key={index}>
      {!service.text && (
        <li className="body-single-service-without-content">{service.title}</li>
      )}
    </React.Fragment>
  ));

  const employees = data.employees.map((employee) => {
    const phone = employee.phone.replace(/\s/g, "");
    const email = (
      employee.firstname +
      "." +
      employee.lastname.replace("ö", "o") +
      employee.email
    ).toLowerCase();
    return (
      <div key={employee.firstname} className="body-employee-div selectable">
        <img
          className="body-employee-imgs"
          draggable="false"
          alt={employee.firstname + " " + employee.lastname}
          src={
            process.env.PUBLIC_URL + `/${employee.firstname.toLowerCase()}.webp`
          }
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
          {servicesWithContent}
          {servicesWithNoContent.length > 0 && (
            <>
              <h2 className="body-additional-services-title">Lisäksi</h2>
              {servicesWithNoContent}
            </>
          )}
        </div>
        <h2 className="body-employees-title">Tekijät</h2>
        <div className="body-employees-flex-container">{employees}</div>
      </div>
      <Contact title={data.contactFormTitle} />
    </div>
  );
};

export default Body;
