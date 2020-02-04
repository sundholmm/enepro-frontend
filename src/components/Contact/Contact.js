import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Contact.css";

const Contact = props => {
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_DEVELOPMENT_URL
      : process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_PRODUCTION_URL
      : process.env.REACT_APP_TEST_URL;
  return <MailchimpSubscribe url={url} />;
};

export default Contact;
