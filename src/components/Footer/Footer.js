import React from "react";
import data from "../../data/data.json";
import "./Footer.css";

const Footer = props => {
  const date = new Date();

  const contact = data.address.map((info, index) => (
    <h3 key={index}>{info}</h3>
  ));

  return (
    <div className="footer">
      <div className="footer-flex-container">
        <div>
          <a
            href="https://www.scanoffice.fi/tuoteryhma/ilmalampopumput/"
            target="_blank"
          >
            <img
              className="footer-img"
              draggable="false"
              alt="Mitsubishi Electric"
              src={process.env.PUBLIC_URL + "/mitsubishi-electric-logo.png"}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.asiakastieto.fi/yritykset/fi/enepro-oy/30029787/yleiskuva"
            target="_blank"
          >
            <img
              className="footer-img footer-img-middle"
              draggable="false"
              alt="Luottoluokitus AA"
              src={process.env.PUBLIC_URL + "/luottoluokitus.jpg"}
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.scanoffice.fi/tuoteryhma/aurinkosahkojarjestelmat/"
            target="_blank"
          >
            <img
              className="footer-img"
              draggable="false"
              alt="Scanoffice Aurinkopartneri"
              src={process.env.PUBLIC_URL + "/so-aurinkopartneri-logo.jpg"}
            />
          </a>
        </div>
      </div>
      <div className="footer-address">{contact}</div>
      <p>&copy; {date.getFullYear()} EnePro Oy. Kaikki oikeudet pidätetään.</p>
    </div>
  );
};

export default Footer;
