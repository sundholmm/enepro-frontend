import React from "react";
import HeaderLogo from "../Header/HeaderLogo";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import "./SingleService.css";

const SingleService = props => {
  const {
    service: { title, text, image }
  } = props;

  const singleServiceText = text.map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <div className="single-service">
      <HeaderLogo includeTitleAndButton={false} />
      <div className="single-service-body">
        <div className="single-service-inner-body">
        {image && <div className="single-service-inner-body-header-wrapper">
            <img className="single-service-inner-body-header" alt="Palvelua kuvaava kuva" src={process.env.PUBLIC_URL + `/${image}`}/>
          </div>}
          <div className="single-service-inner-body-text-wrapper">
          <div className="single-service-inner-body-text">
          <h2>{title}</h2>
          {singleServiceText}
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
