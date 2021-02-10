import data from "../../data/data.json";
import Picture from "../Picture/Picture";
import "./Footer.css";

const Footer = () => {
  const date = new Date();

  const contact = data.address.map((info, index) => (
    <h3 key={index}>{info}</h3>
  ));

  return (
    <div className="footer">
      <div className="footer-flex-container">
        <>
          <a
            href="https://www.scanoffice.fi/tuoteryhma/ilmalampopumput/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img"
              alt="Mitsubishi Electric"
              img={{ name: "mitsubishi-electric-logo", format: ".jpg" }}
              height="150px"
            />
          </a>
        </>
        <>
          <a
            href="https://www.scanoffice.fi/jalleenmyyjat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img footer-img-shallow"
              alt="Scanoffice Energiapartneri"
              img={{ name: "so-energiapartneri-logo", format: ".png" }}
              height="150px"
            />
          </a>
        </>
        <>
          <a
            href="https://www.asiakastieto.fi/yritykset/fi/enepro-oy/30029787/yleiskuva"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img footer-img-middle"
              alt="Luottoluokitus AA"
              img={{ name: "luottoluokitus", format: ".jpg" }}
              height="150px"
            />
          </a>
        </>
        <>
          <a
            href="https://www.scanoffice.fi/tuoteryhma/aurinkosahkojarjestelmat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img"
              alt="Scanoffice Aurinkopartneri"
              img={{ name: "so-aurinkopartneri-logo", format: ".jpg" }}
              height="150px"
            />
          </a>
        </>
        <>
          <a
            href="https://www.scanoffice.fi/tuoteryhma/ilmalampopumput/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Picture
              className="footer-img"
              alt="Scanoffice Lämpöpumppu Dealer"
              img={{ name: "dealer", format: ".jpg" }}
              height="150px"
            />
          </a>
        </>
      </div>
      <div className="footer-address">{contact}</div>
      <p className="footer-copyright">
        &copy; {date.getFullYear()} {data.copyright}
      </p>
    </div>
  );
};

export default Footer;
