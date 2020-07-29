import React, { useEffect } from "react";
import HeaderLogo from "../Header/HeaderLogo";
import Footer from "../Footer/Footer";
import HyperLink from "../HyperLink/HyperLink";
import "./SingleService.css";

const SingleService = (props) => {
  const {
    service: {
      title,
      path,
      text,
      image,
      details,
      details: { additionalDetails },
    },
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

  const additionalDetailsLink = (
    <div className="single-service-details-link">
      <HyperLink
        path={`/${path}/ratkaisuvaihtoehdot`}
        text={"Ratkaisuvaihtoehtoja"}
      />
    </div>
  );

  const detailCollection = (
    <div className="single-service-detail-collection">
      <h3>{details.detailsTitle}</h3>
      {links}
    </div>
  );

  useEffect(() => {
    document.title = `EnePro Oy - ${title}`;
  });

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
              {additionalDetails && additionalDetailsLink}
              {details && detailCollection}
              <HyperLink path={"/"} text={"Palaa takaisin etusivulle"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleService;
