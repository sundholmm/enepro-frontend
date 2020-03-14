import React from "react";
import HeaderLogo from "../Header/HeaderLogo";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = props => {
  const {
    service: { title, text, image, details }
  } = props;

  const singleServiceText = text.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  const links = details.detailLinks.map((link, index) => (
    <React.Fragment key={index}>
      <a
        href={link}
        className="single-service-detail-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
      <br></br>
    </React.Fragment>
  ));

  const detailCollection = (
    <div className="single-service-detail-collection">
      <h3>{details.detailsTitle}</h3>
      {links}
    </div>
  );

  return (
    <div className="single-service">
      <HeaderLogo includeTitleAndButton={false} />
      <div className="single-service-body">
        <div className="single-service-inner-body">
          {image && (
            <div className="single-service-inner-body-header-wrapper">
              <img
                className="single-service-inner-body-header"
                alt="Palvelua kuvaava kuva"
                src={process.env.PUBLIC_URL + `/${image}`}
              />
            </div>
          )}
          <div className="single-service-inner-body-text-wrapper">
            <div className="single-service-inner-body-text">
              <h2>{title}</h2>
              {singleServiceText}
              {details && detailCollection}
              <Link className="single-service-home-link" to={"/"}>
                <p>Palaa takaisin etusivulle</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleService;
