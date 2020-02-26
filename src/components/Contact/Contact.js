import React, { useState } from "react";
import "./Contact.css";

const Contact = props => {
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const onSubmitHandler = event => {
    event.preventDefault();
    console.log(emailValue, phoneValue, textValue);
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-title-wrapper">
        <h2 className="contact-form-title">{props.title[0]}</h2>
        <h3 className="contact-form-title">{props.title[1]}</h3>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmitHandler}>
          <div className="contact-form-inner-wrapper">
            <textarea
              className="contact-form-input-text"
              placeholder="Kerro lyhyesti yhteydenottosi aiheesta"
              onChange={event => setTextValue(event.target.value)}
            ></textarea>
            <input
              className="contact-form-input-email"
              type="email"
              placeholder="Sähköposti"
              onChange={event => setEmailValue(event.target.value)}
            />
            <input
              className="contact-form-input-number"
              type="tel"
              placeholder="Puhelinnumero"
              onChange={event => setPhoneValue(event.target.value)}
            />
            <button className="contact-form-button">Lähetä</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
