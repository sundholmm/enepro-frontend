import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Contact.css";

const Contact = props => {
  const CustomForm = ({ status, message, onValidated }) => {
    let email;
    let number;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        PHONE: number.value ? number.value : ""
      });

    return (
      <div className="contact-form-inner-wrapper">
        <input
          className="contact-form-input-email"
          ref={node => (email = node)}
          type="email"
          placeholder="Sähköposti"
          required
        />
        <input
          className="contact-form-input-number"
          ref={node => (number = node)}
          type="tel"
          placeholder="Puhelinnumero"
        />
        <button className="contact-form-button" onClick={submit}>
          Lähetä
        </button>
        <div className="contact-form-status-message-wrapper">
          {status === "sending" && (
            <div className="contact-form-status-message">Lähetetään...</div>
          )}
          {status === "error" &&
            (console.warn(message),
            (
              <div className="contact-form-status-message">
                Lähetys epäonnistui!
              </div>
            ))}
          {status === "success" && (
            <div className="contact-form-status-message">
              Lähetetty onnistuneesti!
            </div>
          )}
        </div>
      </div>
    );
  };

  const url =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEVELOPMENT_URL
      : process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_TEST_URL;
  return (
    <div className="contact-form-wrapper">
      <div className="contact-form-title-wrapper">
        <h2 className="contact-form-title">{props.title}</h2>
      </div>
      <div className="contact-form">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Contact;
