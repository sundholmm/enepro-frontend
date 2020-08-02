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
      metaDesc,
      details: { additionalDetails },
    },
  } = props;

  const additionalDetailsLink = (
    <div className="single-service-details-link">
      <HyperLink
        path={`/${path}/ratkaisuvaihtoehdot`}
        text={"Ratkaisuvaihtoehtoja"}
      />
    </div>
  );

  const singleServiceText = text.map((element) => {
    if (Array.isArray(element)) {
      return element.map((text, index) => {
        if (typeof text === "object" && text.isHeader) {
          return <h2 key={index}>{text.header}</h2>;
        } else {
          return <p key={index}>{text}</p>;
        }
      });
    } else if (
      typeof element === "object" &&
      element !== null &&
      element.addLink &&
      additionalDetails
    ) {
      return (
        <React.Fragment key="link">{additionalDetailsLink}</React.Fragment>
      );
    }
    return null;
  });

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

  useEffect(() => {
    document.title = `EnePro Oy - ${title}`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", metaDesc);
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
