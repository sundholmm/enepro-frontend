import React from "react";
import data from "../../data/data.json";
import Picture from "../Picture/Picture";
import "./Footer.css";

const Footer = (props) => {
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
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img"
              alt="Mitsubishi Electric"
              webp="mitsubishi-electric-logo.webp"
              jpg="mitsubishi-electric-logo.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.asiakastieto.fi/yritykset/fi/enepro-oy/30029787/yleiskuva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img footer-img-middle"
              alt="Luottoluokitus AA"
              webp="luottoluokitus.webp"
              jpg="luottoluokitus.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.scanoffice.fi/tuoteryhma/aurinkosahkojarjestelmat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img"
              alt="Scanoffice Aurinkopartneri"
              webp="so-aurinkopartneri-logo.webp"
              jpg="so-aurinkopartneri-logo.jpg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.scanoffice.fi/tuoteryhma/ilmalampopumput/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img"
              alt="Scanoffice Lämpöpumppu Dealer"
              webp="dealer.webp"
              jpg="dealer.jpg"
            />
          </a>
        </div>
      </div>
      <div className="footer-address">{contact}</div>
      <p className="footer-copyright">
        &copy; {date.getFullYear()} EnePro Oy. Kaikki oikeudet pidätetään.
      </p>
    </div>
  );
};

export default Footer;
