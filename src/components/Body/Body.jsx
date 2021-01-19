import { Fragment, useEffect } from "react";
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
    <Fragment key={index}>
      {service.text && (
        <li className="body-single-service-with-content" key={index}>
          <HyperLink
            path={`/${service.path}`}
            text={service.title.replace("-", "‑")}
          />
        </li>
      )}
    </Fragment>
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
          img={{ name: imgPrefix, format: ".jpg" }}
          alt={employee.firstname + " " + employee.lastname}
          height="160px"
        />
        <h2 className="body-text-header">
          {employee.firstname + " " + employee.lastname}
        </h2>
        {employee.titles.map((title) => (
          <h4 className="body-employee-title" key={title}>
            {title}
          </h4>
        ))}
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
          <h2 className="body-text-header">Yritys</h2>
          {bodyText}
        </div>
        <div className="body-text" id="body-services">
          <h2 className="body-text-header">Palvelumme</h2>
          <ul>{services}</ul>
        </div>
        <h2 className="body-employees-title body-text-header">Tekijät</h2>
        <div className="body-employees-flex-container">{employees}</div>
      </div>
      <Contact title={data.contactFormTitle} />
    </div>
  );
};

export default Body;
