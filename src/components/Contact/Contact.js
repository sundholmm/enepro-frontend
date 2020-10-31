import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [statusValue, setStatusValue] = useState("");

  const clearValues = () => {
    document.getElementById("contact-form-element").reset();
    setEmailValue("");
    setPhoneValue("");
    setTextValue("");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (emailValue) {
      axios
        .post(process.env.REACT_APP_PRODUCTION_URL, {
          email: emailValue,
          phone: phoneValue,
          text: textValue,
        })
        .then((response) => {
          clearValues();
          setStatusValue("success");
          console.log(response);
        })
        .catch((error) => {
          clearValues();
          setStatusValue("error");
          console.error(error);
        });
    } else {
      setStatusValue("missing");
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-title-wrapper">
        <h2 className="contact-form-title">{props.title[0]}</h2>
        <h3 className="contact-form-title">{props.title[1]}</h3>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmitHandler} id="contact-form-element">
          <div className="contact-form-inner-wrapper">
            <div>
              <label htmlFor="contact-form-input-text">Viesti:</label>
              <textarea
                id="contact-form-input-text"
                className="contact-form-input-text"
                placeholder="Kerro lyhyesti yhteydenottosi aiheesta"
                onChange={(event) => setTextValue(event.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="contact-form-input-email">Sähköposti:</label>
              <input
                id="contact-form-input-email"
                className="contact-form-input-email"
                type="email"
                placeholder="etunimi.sukunimi@gmail.com"
                onChange={(event) => setEmailValue(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="contact-form-input-number">Puhelinnumero:</label>
              <input
                id="contact-form-input-number"
                className="contact-form-input-number"
                type="tel"
                placeholder="+358 44 1234567"
                onChange={(event) => setPhoneValue(event.target.value)}
              />
            </div>
            <button className="contact-form-button">Lähetä</button>
          </div>
        </form>
        <div className="contact-form-status-wrapper">
          {statusValue === "success" ? (
            <div className="contact-form-status-value-success">
              Lähetys onnistui!
            </div>
          ) : statusValue === "error" ? (
            <div className="contact-form-status-value-error">
              Lähetys epäonnistui, yritäthän myöhemmin uudelleen!
            </div>
          ) : statusValue === "missing" ? (
            <div className="contact-form-status-value-error">
              Täytä sähköpostiosoite!
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Contact;
